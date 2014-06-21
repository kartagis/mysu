window.addEventListener('load', function() {
  var urls= document.querySelectorAll('a.url');
  for(i=0,len=urls.length;i<len; i++) {
    urls[i].addEventListener('click', function() {
      chrome.tabs.create({url: this.href});
    }, false);
  }
}, false);

chrome.contextMenus.create({'title': 'Add to mySU bookmarks', 'contexts': ['link', 'page'], 'onclick': mySUBookmark});

function mySUBookmark(info, tab) {
  var a = document.getElementsByTagName('');
  for (i=0,len=a.length;i<len;i++) {
    a[i].addEventListener('contextmenu', function() {
      alert(this.textContent+' clicked!');
    });
  };
};
