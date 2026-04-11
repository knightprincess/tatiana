// Function to handle the flipbook page turning
function nextPage(currentPage) {
    // Hide the current page
    document.getElementById('page-' + currentPage).classList.remove('active');
    
    // Show the next page
    let next = currentPage + 1;
    document.getElementById('page-' + next).classList.add('active');
}

// Function to handle the video page
function showVideo() {
    // Hide page 7, show page 8
    document.getElementById('page-7').classList.remove('active');
    document.getElementById('page-8').classList.add('active');
    
    // Play the video
    let vid = document.getElementById('sun-video');
    vid.style.display = 'block';
    vid.play();
    
    // Wait 1.5 seconds, then show the text and the next button
    setTimeout(() => {
        document.getElementById('video-text').style.display = 'block';
        document.getElementById('video-next-btn').style.display = 'inline-block';
    }, 1500); 
}