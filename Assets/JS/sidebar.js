const openSidebar = document.querySelector(".menu-icon");
const closeSidebar = document.querySelector(".sidebar-close-logo");
const sidebar = document.querySelector(".side-bar");
/*
openSidebar.addEventListener("click",() => {
    if(closeSidebar.className === "sidebar"){
        closeSidebar.classList.remove("sidebar");
    }
    else{
        openSidebar.classList.add("sidebar");
    }

})
*/
openSidebar.addEventListener("click",()=>{
    sidebar.style.display = "flex";
});
closeSidebar.addEventListener("click",()=>{
    sidebar.style.display = "none";
});