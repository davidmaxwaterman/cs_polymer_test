'use strict';

// Listens for the app launching then creates the window

  chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
    console.log("EP:tabId:",tabId);
    console.log("EP:changeInfo:",changeInfo);
    console.log("EP:tab:",tab);


    if (changeInfo.status=='loading' && tab.url=='http://localhost:8000/index.html') {
      console.log("EP:executing script.");
      // execute script
      chrome.tabs.executeScript(null, {file: "scripts/contentScript.js"});
    }
  });
