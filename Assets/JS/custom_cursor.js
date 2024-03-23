const cursorDot = document.querySelector(".cursor_dot");
const cursorOutline = document.querySelector(".cursor_outline");
window.addEventListener("mousemove",(e)=>{
    const axiesX = e.clientX;
    const axiesY = e.clientY;
    cursorDot.style.left = `${axiesX}px`;
    cursorDot.style.top = `${axiesY}px`;

    // cursorOutline.style.left = `${axiesX}px`;
    // cursorOutline.style.top = `${axiesY}px`;
    cursorOutline.animate({
        left: `${axiesX}px`,
        top: `${axiesY}px`,
    }, { duration:300,fill:"forwards"});
});