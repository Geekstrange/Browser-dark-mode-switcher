// background.js
let color = 'rgba(66,66,66,1)';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('插件主色调为: %c rgba(0,125,255,1)', `color: ${color}`);
});