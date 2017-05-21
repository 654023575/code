var wow = new WOW({
    boxClass: 'wow-newpro',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
});
wow.init();
$('.owl-carousel-newpro').owlCarousel({
      loop:true,
      margin:5,
      dots:false,
      lazyLoad:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      smartSpeed:1000,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
// owl备注
//  参数名称	参数类型	     默认值          描述
//   loop	Type: Boolean	Default: false	是否无限循环，会复制第一项和最后一项来制作无限循环的错觉
//   margin	Type: Number	Default: 0	旋转木马项的margin-right值，单位像素
//   dots	Type: Boolean	Default: true	显示圆点导航按钮
//   autoplay	Type: Boolean	Default: false	旋转木马是否自动播放
//   autoplayTimeout	Type: Number	Default: 5000	旋转木马自动播放的时间间隔
//   autoplayHoverPause	Type: Boolean	Default: false	是否在鼠标滑过时停止自动播放
//   smartSpeed	Type: Number	Default: 250	滑动计算

