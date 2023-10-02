// function toggleMobileMenu(menu) {
//   menu.classList.toggle("open");
// }

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

showMenu("nav-tooggle", "nav-menu");

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
