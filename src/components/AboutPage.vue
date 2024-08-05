<template>
  <div id="about">
    <!-- about section-->
    <div class="about-session" data-aos="fade-up">
      <h1 class="title mt-5">ABOUT</h1>
      <p class="text-center p-5 mx-lg-5 px-lg-5 mb-0 pb-lg-0 mx-md-0 px-md-0">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <!-- about container -->
      <div class="d-md-flex justify-content-center mt-lg-3 gap-3 pt-0 row">
        <!-- profile bio-data -->
        <div class="col-lg-4 col-md-6 col-12 px-4 pr-lg-0 ml-lg-0">
          <img src="@/assets/Images/about.jpg" alt="" class="about-img img-fluid">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 p-4 content">
          <h2 class="font-head">Illustrator & UI/UX Designer</h2>
          <p class="font-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="d-flex justify-content-between">
            <div class="col-lg-6 bio" v-for="(info, index) in personalInfo" :key="index">
              <ul>
                <li v-for="(item, idx) in info" :key="idx">
                  <h6><strong>{{ item.label }}:</strong> {{ item.value }}</h6>
                </li>
              </ul>
            </div>
          </div>
          <p class="mx-5 ml-lg-0">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
    </div>
    <!-- skill section -->
    <div class="skill-session" data-aos="fade-up">
      <h1 class="title mt-5 pt-5">SKILLS</h1>
      <p class="text-center pt-5 mx-lg-5 px-lg-5 mb-0 pb-0 mx-md-0 px-md-0">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <!-- progress-status -->
      <div class="progress-container d-lg-flex px-5 mx-lg-5">
        <div class="col-lg-6 mx-lg-2 col-12 p-lg-3" v-for="(skillGroup, index) in skillGroups" :key="index">
          <div v-for="(skill, idx) in skillGroup" :key="idx">
            <div class="d-flex mt-3 pb-0 justify-content-between">
              <p class="skill">{{ skill.name }} </p> <p class="val">{{ skill.value }}%</p>
            </div>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="{ width: skill.value + '%' }" :aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- facts section -->
    <div class="facts-session" data-aos="fade-up">
      <h1 class="title mt-5">FACTS</h1>
      <p class="text-center p-5 mx-lg-5 px-lg-5 mb-0 pb-0 mx-md-0 px-md-0">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <div class="count-container d-lg-flex mt-3 justify-content-around text-center">
        <div v-for="(fact, index) in facts" :key="index" class="fact-item">
          <span class="purecounter count" :data-purecounter-start="0" :data-purecounter-end="fact.value" data-purecounter-duration="2">0</span><br />
          <span class="count-name">{{ fact.label }}</span>
        </div>
      </div>
    </div>
    <!-- testimonial section -->
    <div class="testimonial-session" data-aos="fade-up">
      <h1 class="title mt-5">TESTIMONIALS</h1>
      <p class="text-center p-5 mx-lg-5 px-lg-5 mb-0 pb-0 mx-md-0 px-md-0">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <!-- testimonial container imported from component -->
      <testimonial/>
    </div>
  </div>
</template>

<script>
import testimonial from './TestimonialPage.vue';
import PureCounter from '@srexi/purecounterjs';

export default {
  name: 'AboutPage',
  components: {
    testimonial
  },
  data() {
    return {
      //personal information array
      personalInfo: [
        [
          { label: 'Birthday', value: '1 May 1995' },
          { label: 'Website', value: 'www.example.com' },
          { label: 'Phone', value: '+123 456 7890' },
          { label: 'City', value: 'New York, USA' }
        ],
        [
          { label: 'Age', value: '30' },
          { label: 'Degree', value: 'Master' },
          { label: 'Email', value: 'email@example.com' },
          { label: 'Freelance', value: 'Available' }
        ]
      ],
      skillGroups: [
        [
          { name: 'HTML', value: 100 },
          { name: 'CSS', value: 90 },
          { name: 'JAVASCRIPT', value: 75 }
        ],
        [
          { name: 'PHP', value: 80 },
          { name: 'WORDPRESS/CMS', value: 90 },
          { name: 'PHOTOSHOP', value: 55 }
        ]
      ],
      facts: [
        { label: 'Clients', value: 252 },
        { label: 'Projects', value: 521 },
        { label: 'Hours of Support', value: 1463 },
        { label: 'Hard Workers', value: 15 }
      ]
    };
  },
  mounted() {
    // initialize purecounter

    new PureCounter();
  }
};
</script>

