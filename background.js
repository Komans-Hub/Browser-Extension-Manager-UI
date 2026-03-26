// background.js — Service Worker for Extensions Manager
// Handles background tasks: storage initialization, message passing, etc.

chrome.runtime.onInstalled.addListener(() => {
  console.log('[Extensions Manager] Installed / Updated.')
})

// Listen for messages from the popup or content scripts
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'GET_EXTENSIONS') {
    chrome.management.getAll((extensions) => {
      sendResponse({ extensions })
    })
    return true // keeps the message channel open for async response
  }
})
