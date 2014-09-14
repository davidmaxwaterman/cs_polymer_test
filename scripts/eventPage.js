'use strict';

// Listens for the app launching then creates the window
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined,function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'http://localhost:8000/' }
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

var firstClick=true;
chrome.pageAction.onClicked.addListener(function(tab) {
  if (firstClick) {
    firstClick=false;
    chrome.tabs.executeScript(null, {file: "scripts/contentScript.js"});
  } else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "boo"}, function(response) {
      });
    });
  }
});