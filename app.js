function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

jQuery(document).ready(function ($) {
  $("#v-tabs-tab a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

jQuery(document).on("input", "#font-change", function () {
  jQuery("#result").html(jQuery(this).val() + "px");
  jQuery(".blog-sub-title ").css("font-size", jQuery(this).val() + "px");
});

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-tooggle", "navbarCollapse");

jQuery(document).ready(function () {
  jQuery(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      768: {
        items: 2,
        slideBy: 1,
      },
      1000: {
        items: 2,
        slideBy: 1,
      },
    },
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the elements
//   var navToggle = document.getElementById("nav-tooggle");
//   var navMenu = document.getElementById("nav-menu");

//   // Add click event listener to the toggle button
//   navToggle.addEventListener("click", function () {
//     // Toggle the class to show/hide the dropdown
//     navMenu.classList.toggle("show-dropdown");
//   });

//   // Add click event listener to close the dropdown when a link is clicked
//   var dropdownLinks = document.querySelectorAll(".dropdown__link");
//   dropdownLinks.forEach(function (link) {
//     link.addEventListener("click", function () {
//       // Remove the class to hide the dropdown
//       navMenu.classList.remove("show-dropdown");
//     });
//   });
// });
