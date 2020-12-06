<script>
  import Fa from "svelte-fa";

  import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
  <title>Russell Jones | DevOps &amp; Full-Stack Developer</title>
</svelte:head>

<div class="flex flex-wrap justify-center">
  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
    <div class="relative">
      <img
        alt="Cartoon of Russell"
        src="cartoon-russell.jpg"
        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
        style="max-width: 150px;" />
    </div>
  </div>
  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
    <div class="py-6 px-3 mt-32 sm:mt-0">
      <button
        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
        type="button"
        style="transition: all 0.15s ease 0s;">
        Connect
      </button>
    </div>
  </div>
  <div class="w-full lg:w-4/12 px-4 lg:order-1">
    <div class="flex justify-center py-4 lg:pt-4 pt-8">
      <div class="mr-4 p-3 text-center">
        <span
          class="text-xl font-bold block uppercase tracking-wide text-gray-700">22</span><span
          class="text-sm text-gray-500">Friends</span>
      </div>
      <div class="mr-4 p-3 text-center">
        <span
          class="text-xl font-bold block uppercase tracking-wide text-gray-700">10</span><span
          class="text-sm text-gray-500">Photos</span>
      </div>
      <div class="lg:mr-4 p-3 text-center">
        <span
          class="text-xl font-bold block uppercase tracking-wide text-gray-700">89</span><span
          class="text-sm text-gray-500">Comments</span>
      </div>
    </div>
  </div>
</div>
<div class="text-center mt-12">
  <h3 class="text-4xl font-semibold leading-normal text-gray-800 mb-2">
    Full-Stack Developer
  </h3>
  <div
    class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
    <Fa icon={faMapMarkerAlt} class="mr-2 text-lg text-gray-500" />
    Russell Jones
  </div>
</div>
<div class="mt-10 py-10 border-t border-gray-300 text-center">
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <p class="mb-4 text-lg leading-relaxed text-gray-800">
        A "web" developer of considerable range, Russell is a First Nations
        person born and raised in Canada. , First Nation Nick Murphy writes,
        performs and records all of his own music, giving it a warm, intimate
        feel with a solid groove structure. An artist of considerable range.
      </p>
      <a href="#pablo" class="font-normal text-pink-500">Show more</a>
    </div>
  </div>
</div>
