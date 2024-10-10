document.getElementById('downloadButton').addEventListener('click', async () => {
    const videoLink = document.getElementById('videoLink').value.trim();
    const apiUrl = `https://tele-social.vercel.app/down?url=${encodeURIComponent(videoLink)}`;

    // Ensure the user has entered a valid video URL
    if (!videoLink) {
        alert('Please enter a valid video URL.');
        return;
    }

    try {
        const response = await fetch(apiUrl);

        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if the status in the API response is true
        if (data.status) {
            const videoPlayer = document.getElementById('videoPlayer');
            const downloadLink = document.getElementById('downloadLink');
            const thumbnail = document.getElementById('thumbnail');
            const videoSize = document.getElementById('videoSize');
            const result = document.getElementById('result');

            // Set the video source
            videoPlayer.src = data.data.video;
            videoPlayer.load(); // Load the new video source

            // Set the download link
            downloadLink.href = data.data.video;

            // Set the thumbnail image source
            thumbnail.src = data.data.image;

            // Display video size
            videoSize.innerText = `Size: ${data.size}`;

            // Make elements visible
            result.classList.remove('hidden');
            downloadLink.classList.remove('hidden');
            thumbnail.classList.remove('hidden');
        } else {
            console.error('API response status false:', data);
            alert('Error fetching video. Please check the link and try again.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred: ' + error.message);
    }
});
