/*
Copyright 2023 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
