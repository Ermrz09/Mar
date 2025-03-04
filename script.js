// Show the birthday message when the button is clicked
document.getElementById('wishButton').onclick = function() {
    document.getElementById('birthdayMessage').style.display = 'block';
    document.getElementById('cake').style.display = 'none'; // Hide the cake
    document.getElementById('cakeGif').style.display = 'block'; // Show the GIF
};
