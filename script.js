function toggleMenu() {
  var menu = document.getElementById("sideMenu");
  var hamburgerIcon = document.querySelector('.menu-icon');
  if (menu.style.width == "250px") {
	menu.style.width = "0";
    hamburgerIcon.style.marginLeft = "0";
    hamburgerIcon.style.transition = "margin-left 0.5s";
  } else {
	menu.style.width = "250px";
    hamburgerIcon.style.marginLeft = "250px";
    hamburgerIcon.style.transition = "margin-left 0.5s";

  }
}