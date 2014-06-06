window.addEventListener('load', function() {
  var urls = document.querySelectorAll('a.url');
  for(i=0, len=urls.length; i<len; i++) {
    urls[i].addEventListener('click', function() {
      chrome.tabs.create({url: this.href});
    }, false);
  }
}, false);
