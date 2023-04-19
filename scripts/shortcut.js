// button is the "Start a chat" button in the DOM.
var button

// toggleChatSelector will toggle the chat selector when the user presses Ctrl+K.
// The triggering key combination is currently hard-coded, but will be configurable
// in the future.
function toggleChatSelector(e) {
  if (!e.ctrlKey) return

  switch(e.key) {
    case 'k':
      button.click()
      e.preventDefault()
      e.stopImmediatePropagation()
      e.stopPropagation()
      return
  }
}

// updateButton sets the button variable to the current "Start a chat" button in the DOM.
function updateButton() {
  button = document.querySelector('[aria-label="Start a chat"]');
}

// Call updateButton() to set the button variable, and then add the event listener.
updateButton()
document.addEventListener("keydown", toggleChatSelector, false)

// Call updateButton() every second to keep the button variable up to date.
setInterval(updateButton, 1000)