const uploadInput = document.getElementById('upload-input');
const uploadIcon = document.querySelector('.upload-icon');

uploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const imageUrl = reader.result;
    uploadIcon.style.backgroundImage = `url('${imageUrl}')`;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});