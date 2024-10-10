document.getElementById('downloadButton').addEventListener('click', async () => {
    const videoLink = document.getElementById('videoLink').value;
    const apiUrl = `https://tele-social.vercel.app/down?url=${encodeURIComponent(videoLink)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status) {
            const videoPlayer = document.getElementById('videoPlayer');
            const downloadLink = document.getElementById('downloadLink');
            const thumbnail = document.getElementById('thumbnail');
            const result = document.getElementById('result');

            // Set the video source
            videoPlayer.src = data.data.video;
            videoPlayer.load(); // Load the new video source

            // Set the download link
            downloadLink.href = data.data.video;

            // Set the thumbnail image source
            thumbnail.src = data.data.image;

            // Make elements visible
            result.classList.remove('hidden');
            downloadLink.classList.remove('hidden');
            thumbnail.classList.remove('hidden');
        } else {
            alert('Error fetching video. Please check the link and try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
