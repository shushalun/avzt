function updateButtonText() {
  let fileInput = document.getElementById('fileInput');
  let buttonText = document.getElementById('buttonText');

  if (fileInput.files.length > 0) {
      buttonText.textContent = 'Soubor byl nahrán ' + fileInput.files[0].name;
  } else {
      buttonText.textContent = 'Nahrát soubor';
  }
}
