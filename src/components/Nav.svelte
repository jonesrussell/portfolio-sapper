<script lang="typescript">
  import Fa from "svelte-fa";
  import {
    faFacebook,
    faGithub,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faAddressBook,
    faBars,
    faFileAlt,
  } from "@fortawesome/free-solid-svg-icons";

  const toggleNavbar = (collapseID: string) => {
    document.getElementById(collapseID)?.classList.toggle("hidden");
    document.getElementById(collapseID)?.classList.toggle("block");
  };

  export let segment: string;
</script>

<nav
  class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a
        class:selected={segment === 'home'}
        class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        href="/">Home</a><button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click={() => {
          toggleNavbar('example-collapse-navbar');
        }}>
        <Fa icon={faBars} class="text-white" />
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none "
      id="example-collapse-navbar">
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center">
          <a
            class:selected={segment === 'projects'}
            class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/projects"><Fa
              icon={faFileAlt}
              class="lg:text-gray-300 text-gray-500 text-lg leading-lg mr-2" />
            Projects</a>
        </li>
        <li class="flex items-center">
          <a
            class:selected={segment === 'tails'}
            class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/tails"><Fa
              icon={faFileAlt}
              class="lg:text-gray-300 text-gray-500 text-lg leading-lg mr-2" />
            Tails</a>
        </li>
      </ul>
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="#fb"><Fa
              icon={faFacebook}
              class="lg:text-gray-300 text-gray-500 text-lg leading-lg" /><span
              class="lg:hidden inline-block ml-2">Share</span></a>
        </li>
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            data-show-count="false"
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"><Fa
              icon={faTwitter}
              class="lg:text-gray-300 text-gray-500 text-lg leading-lg " /><span
              class="lg:hidden inline-block ml-2">Tweet</span></a>
          <!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
        </li>
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://github.com/jonesrussell/portfolio-sapper/"><Fa
              icon={faGithub}
              class="lg:text-gray-300 text-gray-500 text-lg leading-lg " /><span
              class="lg:hidden inline-block ml-2">Star</span></a>
        </li>
        <li class="flex items-center">
          <button
            class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
            type="button"
            style="transition: all 0.15s ease 0s;">
            <Fa icon={faAddressBook} class="inline" />
            <span class="inline">Contact</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
