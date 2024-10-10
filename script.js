document.getElementById('downloadButton').addEventListener('click', async () => {
    const videoLink = document.getElementById('videoLink').value;
    const apiUrl = `https://tele-social.vercel.app/down?url=${encodeURIComponent(videoLink)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status) {
            const videoPlayer = document.getElementById('videoPlayer');
            const downloadLink = document.getElementById('downloadLink');
            const result = document.getElementById('result');

            videoPlayer.src = data.data.video;
            downloadLink.href = data.data.video;

            result.classList.remove('hidden');
        } else {
            alert('Error fetching video. Please check the link and try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
