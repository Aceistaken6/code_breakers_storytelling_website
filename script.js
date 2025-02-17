document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const bgMusic = document.getElementById("bg-music");
    const restartButton = document.getElementById("restart");

    function checkFade() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade();

    bgMusic.volume = 0.2;
    bgMusic.play();

    restartButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
