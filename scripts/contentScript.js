// CONTENT SCRIPT
(function(){
  console.log('CS:Content Script injected.');

  var myElement = document.querySelector('my-element');

  // this works
  myElement.addEventListener('my-property-changed', function(e) {
    console.log('CS:received my-property-changed');
  });

  // From console.log message, I think my-element-ready is fired before
  // this handler is registered, so we don't get it
  //
  // nb similarly for polymer-ready on window
  //
  // I tried setting a property in my-element to indicate it was ready
  // but that seems not to change
  //
  // so: How to know when polymer is ready inside CS?
  myElement.addEventListener('my-element-ready', function(e) {
    console.log('CS:received my-element-ready');
    myElement.myproperty = 'assigning to property from content script in my-element-ready handler';
    myElement.setAttribute('myproperty','assigning to attribute from content script my-element-ready handler');
  });

  // I can test a dom element that is set by inline script to see that
  // polymer is ready - seems so obtuse - supposed to use a mutationObserver??
  console.log('CS:polymer-ready-indicator:',document.querySelector('#polymer-ready-indicator').innerText);

  // don't receive my-element-ready, so wait for 5 seconds then test setting property
  setTimeout(function() {
    console.log('CS:timeout event');
    myElement.myproperty = 'assigning to property from content script after 5 seconds';
    myElement.setAttribute('myproperty','assigning to attribute from content script after 5 seconds');
  }, 5000);

})();
