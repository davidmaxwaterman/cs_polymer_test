1. Install the extension.
2. Run index.html on http://localhost:8000/index.html
3. click the page action icon

notice that only way to change a property on the element and have the Changed handler/function called is to set an attribute.

I found that using the `"run_at": "document_start"`, the event_page can add an event listener for the polymer-ready event before the page is loaded.
I wonder if there is any way to do this using the executeScript() method of injection - seems it might be possible using chrome.tabs.onUpdate() (and that might also solve the issues below).

I also notice that there is no way to specify a port in the manifest's matches field, while you can do that using the `pageUrl` property of the PageStateMatcher. This makes it necessary to run a local server as root since port below 1024 require root.

I also wonder how to do the equivalent of the `pathContains` property of PageStateMatcher() for the Content Script property.
