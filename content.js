// content.js — Content script for Extensions Manager
// Injected into pages; can communicate with background.js via chrome.runtime.sendMessage

;(() => {
  // Content scripts run in isolated world — safe to add listeners
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === 'PING') {
      sendResponse({ pong: true })
    }
  })
})()
