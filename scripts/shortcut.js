var button

document.onkeydown = function(e) {
  if (!e.ctrlKey) return

  switch(e.key) {
    case 'k':
      button.click()
      e.preventDefault()
      return
  }
}

function updateButton() {
  button = document.querySelector('[aria-label="Start a chat"]');
}
updateButton()
setInterval(updateButton, 1000)