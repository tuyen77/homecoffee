(function ($) {
  "use strict";

  // Danh sách sản phẩm theo danh mục
  const menuItems = [
    {
      category: "Cà phê",
      icon: "assets/images/coffee-icon.svg",
      items: [
        {
          name: "Home phê đen",
          price: "22K",
          image: "assets/images/menu-item-01.jpg",
        },
        {
          name: "Home phê sữa",
          price: "25K",
          image: "assets/images/menu-item-02.jpg",
        },
        {
          name: "Home phê muối",
          price: "28K",
          image: "assets/images/menu-item-03.jpg",
        },
        {
          name: "HOME BẠC XỈU",
          price: "25K",
          image: "assets/images/menu-item-04.jpg",
        },
      ],
    },
    {
      category: "Đá xay",
      icon: "assets/images/daxay.svg",
      items: [
        {
          name: "Matcha đá xay",
          price: "35K",
          image: "assets/images/menu-item-05.jpg",
        },
        {
          name: "Cookie đá xay",
          price: "35K",
          image: "assets/images/menu-item-06.jpg",
        },
        {
          name: "Cacao đá xay",
          price: "35K",
          image: "assets/images/menu-item-07.jpg",
        },
        {
          name: "Cà phê cốt dừa đá xay",
          price: "35K",
          image: "assets/images/menu-item-08.jpg",
        },
        {
          name: "Ca cao cốt dừa đá xay",
          price: "35K",
          image: "assets/images/menu-item-09.jpg",
        },
      ],
    },
    {
      category: "Latte",
      icon: "assets/images/latte.svg",
      items: [
        {
          name: "Matcha latte",
          price: "35K",
          image: "assets/images/menu-item-10.jpg",
        },
        {
          name: "Matcha latte dâu",
          price: "35K",
          image: "assets/images/menu-item-11.jpg",
        },
        {
          name: "Matcha latte sữa oatside",
          price: "35K",
          image: "assets/images/menu-item-12.jpg",
        },
        {
          name: "Cacao latte",
          price: "30K",
          image: "assets/images/menu-item-13.jpg",
        },
        {
          name: "Cà phê latte",
          price: "30K",
          image: "assets/images/menu-item-14.jpg",
        },
      ],
    },
    {
      category: "Trà sữa",
      icon: "assets/images/trasua.svg",
      items: [
        {
          name: "HOME trà sữa",
          price: "30K",
          image: "assets/images/menu-item-15.jpg",
        },
        {
          name: "Trà sữa thái xanh",
          price: "30K",
          image: "assets/images/menu-item-16.jpg",
        },
        {
          name: "Trà sữa thái đỏ",
          price: "30K",
          image: "assets/images/menu-item-17.jpg",
        },
        {
          name: "Trà đào",
          price: "30K",
          image: "assets/images/menu-item-18.jpg",
        },
        {
          name: "Trà mãng cầu",
          price: "30K",
          image: "assets/images/menu-item-19.jpg",
        },
        {
          name: "Trà vải",
          price: "30K",
          image: "assets/images/menu-item-20.jpg",
        },
        {
          name: "Trà dâu",
          price: "30K",
          image: "assets/images/menu-item-21.jpg",
        },
        {
          name: "MILO/ovantine dầm",
          price: "30K",
          image: "assets/images/menu-item-22.jpg",
        },
        {
          name: "HỒNG TRÀ",
          price: "25K",
          image: "assets/images/menu-item-23.jpg",
        },
        {
          name: "Sữa tươi trân châu",
          price: "30K",
          image: "assets/images/menu-item-24.jpg",
        },
      ],
    },
    {
      category: "Sinh tố",
      icon: "assets/images/sinhto.svg",
      items: [
        {
          name: "Sinh tố bơ",
          price: "35K",
          image: "assets/images/menu-item-25.jpg",
        },
        {
          name: "Sinh tố dâu",
          price: "35K",
          image: "assets/images/menu-item-26.jpg",
        },
        {
          name: "Sinh tố dừa",
          price: "30K",
          image: "assets/images/menu-item-27.jpg",
        },
        {
          name: "Sinh tố xoài",
          price: "30K",
          image: "assets/images/menu-item-28.jpg",
        },
        {
          name: "Sinh tố mãng cầu",
          price: "32K",
          image: "assets/images/menu-item-29.jpg",
        },
        {
          name: "Sinh tố sapoche",
          price: "30K",
          image: "assets/images/menu-item-30.jpg",
        },
      ],
    },
    {
      category: "Ép trái cây",
      icon: "assets/images/eptraicay.svg",
      items: [
        {
          name: "Nước ép cà rốt",
          price: "30K",
          image: "assets/images/menu-item-31.jpg",
        },
        {
          name: "Nước ép cam",
          price: "30K",
          image: "assets/images/menu-item-32.jpg",
        },
        {
          name: "Nước ép thơm",
          price: "30K",
          image: "assets/images/menu-item-33.jpg",
        },
        {
          name: "NƯỚC ÉP ỔI",
          price: "30K",
          image: "assets/images/menu-item-34.jpg",
        },
      ],
    },
    {
      category: "Yogurt",
      icon: "assets/images/yogurt.svg",
      items: [
        {
          name: "Sữa chua đá",
          price: "25K",
          image: "assets/images/menu-item-35.jpg",
        },
        {
          name: "Sữa chua dâu",
          price: "30K",
          image: "assets/images/menu-item-36.jpg",
        },
        {
          name: "Sữa chua việt quất",
          price: "30K",
          image: "assets/images/menu-item-37.jpg",
        },
        {
          name: "Sữa chua đào",
          price: "30K",
          image: "assets/images/menu-item-38.jpg",
        },
        {
          name: "Sữa chua chanh dây",
          price: "30K",
          image: "assets/images/menu-item-39.jpg",
        },
      ],
    },
    {
      category: "Trà",
      icon: "assets/images/tra.svg",
      items: [
        {
          name: "TRÀ BẮC",
          price: "30K",
          image: "assets/images/menu-item-40.jpg",
        },
        {
          name: "TRÀ GỪNG NÓNG",
          price: "30K",
          image: "assets/images/menu-item-41.jpg",
        },
        {
          name: "Trà chanh",
          price: "25K",
          image: "assets/images/menu-item-42.jpg",
        },
        {
          name: "Trà chanh mật ong",
          price: "25K",
          image: "assets/images/menu-item-43.jpg",
        },
        {
          name: "Trà tắc",
          price: "25K",
          image: "assets/images/menu-item-44.jpg",
        },
        {
          name: "Trà đường",
          price: "20K",
          image: "assets/images/menu-item-45.jpg",
        },
        {
          name: "Trà thảo mộc",
          price: "35K",
          image: "assets/images/menu-item-46.jpg",
        },
      ],
    },
    {
      category: "Các món khác",
      icon: "assets/images/khac.svg",
      items: [
        {
          name: "Dừa tươi",
          price: "30K",
          image: "assets/images/menu-item-47.jpg",
        },
        {
          name: "Loại nước ngọt",
          price: "20K",
          image: "assets/images/menu-item-48.jpg",
        },
        {
          name: "Bò húc",
          price: "25K",
          image: "assets/images/menu-item-49.jpg",
        },
        {
          name: "Nước suối",
          price: "15K",
          image: "assets/images/menu-item-50.jpg",
        },
        {
          name: "Bánh bao 2 trứng",
          price: "20K",
          image: "assets/images/menu-item-51.jpg",
        },
        {
          name: "Bánh bao 1 trứng",
          price: "15K",
          image: "assets/images/menu-item-52.jpg",
        },
        {
          name: "Bánh bao trứng muối",
          price: "25K",
          image: "assets/images/menu-item-53.jpg",
        },
        {
          name: "Bánh bao khoai môn",
          price: "8K",
          image: "assets/images/menu-item-55.jpg",
        },
        {
          name: "Bánh bao đậu xanh",
          price: "8K",
          image: "assets/images/menu-item-56.jpg",
        },
        {
          name: "kem tươi",
          price: "10K",
          image: "assets/images/menu-item-54.jpg",
        },
      ],
    },
  ];

  // Danh sách các sản phẩm cho carousel
  const carouselItems = [
    {
      name: "Home phê đen",
      price: "22K",
      image: "assets/images/menu-item-01.jpg",
    },
    {
      name: "Home phê sữa",
      price: "25K",
      image: "assets/images/menu-item-02.jpg",
    },
    {
      name: "Home phê muối",
      price: "28K",
      image: "assets/images/menu-item-03.jpg",
    },
    {
      name: "Matcha đá xay",
      price: "35K",
      image: "assets/images/menu-item-05.jpg",
    },
    {
      name: "Dừa tươi",
      price: "30K",
      image: "assets/images/menu-item-47.jpg",
    },
    {
      name: "Cookie đá xay",
      price: "35K",
      image: "assets/images/menu-item-06.jpg",
    },
  ];

  // Hàm để lấy sản phẩm cho carousel
  function getCarouselItems() {
    return carouselItems;
  }

  // Hàm render carousel
  function renderCarousel() {
    const carouselItems = getCarouselItems();
    console.log(carouselItems);
    const carouselContainer = $("#owl-menu-item");

    // Xóa nội dung hiện tại
    carouselContainer.empty();

    // Thêm các mục mới
    carouselItems.forEach((item, index) => {

      const itemHtml = `
				<div class="item">
					<div style="background-image: url(${item.image});" class="card">
						<div class="price">
							<h6>${item.price}</h6>
						</div>
						<div class="info">
							<h1 class="title">${item.name}</h1>
							<p class="description">Thức uống thơm ngon, đậm đà hương vị của Home Coffee.</p>
							<div class="main-text-button">
								<div class="scroll-to-section"><a href="#reservation">Đặt hàng <i class="fa fa-angle-down"></i></a></div>
							</div>
						</div>
					</div>
				</div>
			`;

      carouselContainer.append(itemHtml);
    });

    // Khởi tạo carousel
    carouselContainer.owlCarousel({
      items: 5,
      loop: true,
      dots: true,
      nav: true,
      autoplay: false,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 5,
        },
      },
    });
  }

  // Hàm render tabs
  function renderTabs() {
    // Render tab headers
    const tabHeaderContainer = $(".heading-tabs ul");
    tabHeaderContainer.empty();

    menuItems.forEach((category, index) => {
      const isActive = index === 0 ? "active" : "";
      const tabHeaderHtml = `
				<li class="mb-3"><a href="#tabs-${
          index + 1
        }"><img class="icon-tab" style="width: 3rem; height: 3rem;" src="${
        category.icon
      }" alt="">${category.category}</a></li>
			`;
      tabHeaderContainer.append(tabHeaderHtml);
    });

    // Render tab contents
    const tabContentContainer = $(".tabs-content");
    tabContentContainer.empty();

    menuItems.forEach((category, index) => {
      let allItems = "";

      // Thêm tất cả items vào grid
      category.items.forEach((item) => {
        const itemHtml = `
					<div class="col-lg-12">
						<div class="tab-item">
							<img style="aspect-ratio: 1/1; object-fit: cover;" src="${item.image}" alt="${item.name}" class="img-fluid" loading="lazy">
							<div>
								<h4>${item.name}</h4>
								<p>Thức uống thơm ngon từ Home Coffee.</p>
							</div>
							<div class="price">
								<h6>${item.price}</h6>
							</div>
						</div>
					</div>
				`;

        allItems += itemHtml;
      });

      const tabContentHtml = `
				<article id="tabs-${index + 1}">
					<div class="all-item-menu">
						${allItems}
					</div>
				</article>
			`;

      tabContentContainer.append(tabContentHtml);
    });

    // Khởi tạo tabs
    $("#tabs").tabs();
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(".input-group.date").datepicker({ format: "dd.mm.yyyy" });

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $(".search-icon a").on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function (event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  $("#search-box").submit(function (event) {
    event.preventDefault();
    return false;
  });

  // Window Resize Mobile Menu Fix
  mobileNav();

  // Scroll animation init
  window.sr = new scrollReveal();

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          700
        );
        return false;
      }
    }
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    // Khởi tạo carousel và tabs khi trang đã sẵn sàng
    renderCarousel();
    renderTabs();

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".scroll-to-section a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 79,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Page loading animation
  $(window).on("load", function () {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }

    $("#preloader").animate(
      {
        opacity: "0",
      },
      600,
      function () {
        setTimeout(function () {
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      }
    );
  });

  // Window Resize Mobile Menu Fix
  $(window).on("resize", function () {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
})(window.jQuery);
