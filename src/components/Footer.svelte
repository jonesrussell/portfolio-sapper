<script>
  import Fa from 'svelte-fa';
  import {
    faGithub,
    faLinkedin,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';

  export let year: number;
</script>

<footer class="relative bg-gray-300 pt-8 pb-6">
  <div
    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style="height: 80px; transform: translateZ(0px);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      />
    </svg>
  </div>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl font-semibold">Get in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-gray-700">
          Find me on any of these platforms.
        </h5>
        <div class="mt-6">
          <a href="https://linkedin.com/in/jonesrussell" rel="external"
            ><button
              aria-label="Linked In"
              class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <Fa icon={faLinkedin} class="flex" /></button
            ></a
          >
          <a href="https://twitter.com/jonesrussell" rel="external"
            ><button
              aria-label="Twitter"
              class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <Fa icon={faTwitter} class="flex" /></button
            ></a
          >
          <a href="https://github.com/jonesrussell" rel="external"
            ><button
              aria-label="Github"
              class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <Fa icon={faGithub} class="flex" />
            </button></a
          >
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span
              class="block uppercase text-gray-800 text-sm font-semibold mb-2"
              >My Links</span
            >
            <ul class="list-unstyled">
              <li>
                <a class="link" href="/contact">Contact Russell</a>
              </li>
              <li>
                <a class="link" href="https://blog.jonesrussell42.xyz">Blog</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span
              class="block uppercase text-gray-800 text-sm font-semibold mb-2"
              >Other</span
            >
            <ul class="list-unstyled">
              <li>
                <a class="link" href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/"
                  rel="external"
                  title="Fully Coded UI Tools to create web and mobile apps"
                  class="link">Creative Tim</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-400" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-gray-800 font-semibold py-1">
          &copy;
          {year}
          Russell Jones
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .link {
    @apply text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm;
  }
</style>
