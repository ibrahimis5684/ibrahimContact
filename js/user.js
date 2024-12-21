document.getElementById('profile-pic-upload').addEventListener('change', function (event) {
  const file = event.target.files[0]; // Get the selected file
  if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader(); // Use FileReader to preview the image
      reader.onload = function (e) {
          const preview = document.getElementById('profile-pic-preview');
          preview.src = e.target.result; // Set the image preview
          preview.style.display = 'block'; // Make it visible
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
  } else {
      alert('Please upload a valid image file (JPEG/PNG).'); // Error message for invalid file types
  }
});
