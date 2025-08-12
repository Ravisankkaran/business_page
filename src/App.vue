<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- nav bar title -->
      <a class="navbar-brand" href="#">KELLY</a>
      <!-- mobile view toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- nav-bar container -->
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/service">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <!-- social media links -->
          <!-- <li class="nav-item social-links">
            <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
            <a class="nav-link" href="#"><i class="fab fa-facebook"></i></a>
            <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
            <a class="nav-link" href="#"><i class="fab fa-linkedin"></i></a>
          </li> -->
        </ul>
      </div>
    </nav>
    <!-- rout view  -->
    <router-view />
    <!-- footer -->
    <copyright />
  </div>
</template>

<script>
import copyright from "./components/CopyrightPage.vue";
export default {
  name: "App",
  components: {
    copyright,
  },
};
</script>
