# instructions
1. Install the extension.
2. Run index.html on http://localhost:8000/index.html
3. view console for app (ctr-sh-i)

# observations on console messages

1. CS:Content Script injected.
2. received WebComponentsReady in inline script
3. ME:ready
4. CS:received polymer-ready
5. CS:setting property
6. CS:setting attribute
7. received polymer-ready in inline script
8. ME:mypropertyChange: unset->assigning to attribute from content script my-element-ready handler
9. CS:received my-property-changed

On line 5 you can see the Content Script (CS) attempts sets the my-element property, but there is no line 'ME:mypropertyChage ...unset->assigning to property...' message.
On line 6 you can see the CS set a my-element attribute, and line 8 shows the myPropertyChange called with the new value. Notice the old value is what the property is initialised with in the create: handler, showing that the propery hasn't been changed by assigning to the property.

# Notes 

I found that using the `"run_at": "document_start"`, the event_page can add an event listener for the polymer-ready event before the page is loaded.
I wonder if there is any way to do this using the executeScript() method of injection - seems it might be possible using chrome.tabs.onUpdate() (and that might also solve the issues below).

I also notice that there is no way to specify a port in the manifest's matches field, while you can do that using the `pageUrl` property of the PageStateMatcher. This makes it necessary to run a local server as root since port below 1024 require root.

I also wonder how to do the equivalent of the `pathContains` property of PageStateMatcher() for the Content Script property.
