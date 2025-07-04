class CustomVideoPlayer {
    constructor() {
        this.videos = document.getElementsByClassName('customVideo');
        this.containers = document.getElementsByClassName('video-container');
        this.playOverlays = document.getElementsByClassName('play-overlay');
        this.loadingSpinners = document.getElementsByClassName('loading-spinner');
        
        this.init();
    }
    
    init() {
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Thêm event listener cho từng video
        for (let i = 0; i < this.videos.length; i++) {
            const video = this.videos[i];
            const container = this.containers[i];
            const playOverlay = this.playOverlays[i];
            const loadingSpinner = this.loadingSpinners[i];
            
            // Play/Pause
            playOverlay.addEventListener('click', () => this.togglePlay(video, container));
            video.addEventListener('click', () => this.togglePlay(video, container));
            
            // Video events
            video.addEventListener('play', () => this.onPlay(container));
            video.addEventListener('pause', () => this.onPause(container));
            video.addEventListener('waiting', () => this.showLoading(loadingSpinner));
            video.addEventListener('canplay', () => this.hideLoading(loadingSpinner));
        }
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    togglePlay(video, container) {
        if (video.paused) {
            // Dừng tất cả các video khác trước khi phát video hiện tại
            for (let i = 0; i < this.videos.length; i++) {
                if (this.videos[i] !== video && !this.videos[i].paused) {
                    this.videos[i].pause();
                }
            }
            video.play();
        } else {
            video.pause();
        }
    }
    
    onPlay(container) {
        container.classList.add('playing');
    }
    
    onPause(container) {
        container.classList.remove('playing');
    }
    
    showLoading(loadingSpinner) {
        loadingSpinner.style.display = 'block';
    }
    
    hideLoading(loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }
    
    handleKeyboard(e) {
        if (e.target.tagName.toLowerCase() === 'input') return;
        
        switch(e.key) {
            case ' ':
                e.preventDefault();
                // Chỉ phát/dừng video đầu tiên khi nhấn phím space
                if (this.videos.length > 0) {
                    const video = this.videos[0];
                    const container = this.containers[0];
                    this.togglePlay(video, container);
                }
                break;
        }
    }
}

// Initialize the video player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CustomVideoPlayer();
});