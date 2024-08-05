<template>
    <div id="contact"  data-aos="fade-up" >
      <!-- contact page -->
        <h1 class="title mt-5">CONTACT</h1>
      <p class="text-center p-lg-5 p-3 mx-lg-5 px-lg-5 mb-0 pb-0 mx-md-0 px-md-0">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <div class="map p-lg-5 pt-lg-0 p-sm-3 pt-4 mx-5">
        <!-- embedded google map -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5589577736605!2d80.12137207454609!3d12.936043915657914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fe800379355%3A0x5ddae88dd623ef0e!2sMedyaan%20Healthcare%20Private%20Limited!5e0!3m2!1sen!2sin!4v1721364372195!5m2!1sen!2sin" width="100%" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="contact-container pt-2 d-lg-flex  p-lg-5 pt-lg-0 mx-5">
        <div class="col-lg-4 col-12">
            <div class="d-flex">
            <div class="location d-flex"><i class="fa-solid fa-location-dot"></i></div>
            <h2 class="mx-1">Location:</h2>
        </div>
        <p class="mx-5">A108 Adam Street, New York, NY 535022</p>
        <div class="d-flex">
            <div class="location"><i class="fa-regular fa-envelope"></i></div>
            <h2 class="mx-1">Email:</h2>
            </div>
            <p class="mx-5">info@example.com</p>
            <div class="d-flex">
            <div class="location"><i class="fa-solid fa-mobile-screen-button"></i></div>
            <h2 class="mx-1">Call:</h2>
            </div>
            <p class="mx-5">+1 5589 55488 55s</p>
            
        </div>
        <div class="col-lg-8 col-12">
            <form >
              <!-- forms to collect response -->
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" >
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" >
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" >
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" ></textarea>
              </div>
            
              <div class="text-center mt-3 "><button type="submit" class="submit-btn">Send Message</button></div>
            </form>
        </div>

      </div>
    </div>
</template>
<script>
export default {
  name: 'ContatPage',
};
</script>