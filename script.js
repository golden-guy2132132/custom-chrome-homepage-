// Search function
function searchGoogle() {
    let query = document.getElementById("search").value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// Clock function
function updateClock() {
    let now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Wallpaper upload function
document.getElementById("wallpaperInput").addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem("wallpaper", e.target.result);
            document.getElementById("background").style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
});

// Load saved wallpaper
window.onload = function () {
    let savedWallpaper = localStorage.getItem("wallpaper");
    if (savedWallpaper) {
        document.getElementById("background").style.backgroundImage = `url(${savedWallpaper})`;
    }
};
