document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-order')
  const submitButton = document.getElementById('submitButton');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    submitButton.textContent = 'odeslano';
  });
});
