const video = document.getElementById('bgVideo');

    // Add an event listener to stop the video after it ends
    video.addEventListener('ended', function() {
      video.pause(); // Stops the video after playback finishes
    });