// CONTENT SCRIPT
(function(){
  console.log('CS:Content Script injected.');

  window.addEventListener('polymer-ready', function(e) {
    console.log('CS:received polymer-ready');

    var myElement = document.createElement('my-element');

    myElement.addEventListener('my-property-changed', function(e) {
      console.log('CS:received my-property-changed');
    });

    console.log('CS:setting property');
    myElement.myproperty = 'assigning to property from content script in my-element-ready handler';
    console.log('CS:setting attribute');
    myElement.setAttribute('myproperty','assigning to attribute from content script my-element-ready handler');

    var appendHere = document.getElementById('append-here');
    appendHere.appendChild(myElement);
  });

})();
