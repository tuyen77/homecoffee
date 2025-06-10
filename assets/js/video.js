class CustomVideoPlayer {
    constructor() {
        this.video = document.getElementById('customVideo');
        this.container = document.getElementById('videoContainer');
        this.playOverlay = document.getElementById('playOverlay');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        
        this.init();
    }
    
    init() {
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Play/Pause
        this.playOverlay.addEventListener('click', () => this.togglePlay());
        this.video.addEventListener('click', () => this.togglePlay());
        
        // Video events
        this.video.addEventListener('play', () => this.onPlay());
        this.video.addEventListener('pause', () => this.onPause());
        this.video.addEventListener('waiting', () => this.showLoading());
        this.video.addEventListener('canplay', () => this.hideLoading());
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    togglePlay() {
        if (this.video.paused) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }
    
    onPlay() {
        this.container.classList.add('playing');
    }
    
    onPause() {
        this.container.classList.remove('playing');
    }
    
    showLoading() {
        this.loadingSpinner.style.display = 'block';
    }
    
    hideLoading() {
        this.loadingSpinner.style.display = 'none';
    }
    
    handleKeyboard(e) {
        if (e.target.tagName.toLowerCase() === 'input') return;
        
        switch(e.key) {
            case ' ':
                e.preventDefault();
                this.togglePlay();
                break;
        }
    }
}

// Initialize the video player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CustomVideoPlayer();
});