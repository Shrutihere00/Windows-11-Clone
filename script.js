const taskbar = document.getElementsByClassName('taskbar')[0]
const startmenu = document.querySelector(".startMenu");
taskbar.addEventListener("click", () => {
  console.log("clicked");
  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-655px";
  } else {
    startmenu.style.bottom = "50px";
  }
});
