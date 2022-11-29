import $ from "jquery";

$(window).scroll(function () {
  // for navigation gsyicky
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
    $(".App-header").addClass("gsticky");
  } else {
    $(".App-header.gsticky").removeClass("gsticky");
  }

  var addClassOnScroll = function () {
    var windowTop = $(window).scrollTop();
    $("section[id]").each(function (index, elem) {
      var offsetTop = $(elem).offset().top;
      var outerHeight = $(this).outerHeight(true);

      if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
        var elemId = $(elem).attr("id");
        $(".navbar ul li a.active").removeClass("active");
        $(".navbar ul li a[href='#" + elemId + "']").addClass("active");
      }
    });
  };

  $(function () {
    $(window).on("scroll", function () {
      addClassOnScroll();
    });
  });
});
