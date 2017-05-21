var wow = new WOW({
    boxClass: 'wow-brand',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
});
wow.init();

// data-wow-duration:改变动画时间  
// data-wow-delay:延迟在动画开始之前  
// data-wow-offset:距离开始动画(浏览器底部)  
// data-wow-iteration:动画重复的次数 

// 属性/方法	 类型	   默认值	 说明
// boxClass	 字符串	‘wow’	需要执行动画的元素的 class
// animateClass	字符串	‘animated’	animation.css 动画的 class
// offset	整数	0	距离可视区域多少开始执行动画
// mobile	布尔值	true	是否在移动设备上执行动画
// live	布尔值	true	异步加载的内容是否有效

$('.owl-carousel-brand').owlCarousel({
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
