<script>
    import { register } from 'swiper/element/bundle';
  
    register();
  
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress)
    };
    const onSlideChange = (e) => {
      console.log('slide changed')
    }
</script> 
  
<swiper-container slides-per-view={3} space-between={spaceBetween} centered-slides={true} 
pagination={{
    hideOnClick: true,
}}
breakpoints={{
    768: {
    slidesPerView: 3,
    },
}}

on:swiperprogress={onProgress}
on:swiperslidechange={onSlideChange}
>
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
</swiper-container>
  
<style>
    .slide{
        height: 400px;
        width: 400px;
        background-color: blue;
    }
</style>