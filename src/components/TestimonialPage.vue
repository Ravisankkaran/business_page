<template>
  <div id="testimonial">
    <div class="testimonials-container" data-aos="fade-up">
      <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="swiper-slide">
            <div class="testimonial-item d-flex flex-column text-center">
              <img :src="testimonial.img" class="testimonial-img" :alt="'Testimonial ' + (index + 1)">
              <h3>{{ testimonial.name }}</h3>
              <h4>{{ testimonial.title }}</h4>
              <p class="w-75">
                <i class="fa-solid fa-quote-left"></i>
                {{ testimonial.quote }}
                <i class="fa-solid fa-quote-right"></i>
              </p>
            </div>
          </div>
        </div>
        <!-- Pagination bullets -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  data() {
    return {
      testimonials: [
        {
          img: require('../assets/Images/testimonials-1.jpg'),
          name: 'Saul Goodman',
          title: 'Ceo & Founder',
          quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        },
        {
          img: require('../assets/Images/testimonials-2.jpg'),
          name: 'Sara Wilsson',
          title: 'Designer',
          quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
        },
        {
          img: require('../assets/Images/testimonials-3.jpg'),
          name: 'Jena Karlis',
          title: 'Store Owner',
          quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
        },
        {
          img: require('../assets/Images/testimonials-4.jpg'),
          name: 'Matt Brandon',
          title: 'Freelancer',
          quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
        },
        {
          img: require('../assets/Images/testimonials-5.jpg'),
          name: 'John Larson',
          title: 'Entrepreneur',
          quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
        },
      ],
    };
  },
  mounted() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="swiper-pagination-bullet ${className}"></span>`;
        },
      },
      autoplay: {
        delay: 3000,
      },
      loop: true,
    });
  },
};
</script>

