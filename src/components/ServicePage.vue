<template>
  <div id="service" data-aos="fade-up" >
    <h1 class="title mt-5">SERVICES</h1>
    <p class="text-center p-5 mx-lg-5 px-lg-5 mb-0 pb-0 mx-md-0 px-md-0">
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
    </p>
    <div class="container " data-aos="fade-up">
      <!-- card container 3 in a row -->
      <div class="row">
        <!-- using for loop rendering data -->
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-12 col-md-4 col-lg-4 mt-4"
          data-aos="zoom-in"
        >
        <!-- icon container -->
          <div class="services mb-4">
            <div class="icon">
              <div class="inner-component">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                  :class="service.svgClass"
                >
                  <path
                    stroke="none"
                    stroke-width="0"
                    fill="#f5f5f5"
                    :class="service.svgClass"
                    d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                  ></path>
                </svg>
                <span class="icon-label">
                  <i :class="service.iconClass"></i>
                </span>
              </div>
            </div>
            <!-- text container -->
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Lorem Ipsum',
          description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
          iconClass: 'fa-brands fa-dribbble',
          svgClass: 'icon-bg',
        },
        {
          title: 'Sed Perspiciatis',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
          iconClass: 'fa-solid fa-file',
          svgClass: 'icon-bg1',
        },
        {
          title: 'Magni Dolores',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
          iconClass: 'fa-solid fa-gauge-simple-high',
          svgClass: 'icon-bg2',
        },
        {
          title: 'Nemo Enim',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
          iconClass: 'fa-solid fa-layer-group',
          svgClass: 'icon-bg3',
        },
        {
          title: 'Dele Cardo',
          description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur',
          iconClass: 'fa-solid fa-play',
          svgClass: 'icon-bg4',
        },
        {
          title: 'Divera Don',
          description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
          iconClass: 'fa-solid fa-archway',
          svgClass: 'icon-bg5',
        },
      ],
    };
  },
};
</script>
