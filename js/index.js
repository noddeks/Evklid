document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work-nav-list__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.work-block').forEach(function (tabContent) {
        tabContent.classList.remove('work-block-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work-block-active')

    })
  })

  $(document).on("click", '.work-nav-list__link', function(){
    $('.work-nav-list__link').removeClass('work-nav-list__link_active');
    $(this).addClass('work-nav-list__link_active');
  });

  window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#menu').classList.toggle('header__nav_active')
    })
  })

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  $(".section-questions__block").accordion({
    active: false,
    collapsible: true,
    heightStyle: "content"
  })

  $(function () {
    $("#accordion").accordion();
  });
})
