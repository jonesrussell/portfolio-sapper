<script>
  import Line from '../components/Line.svelte';
</script>

<svelte:head>
  <title>Full-Stack Developer | Russell Jones</title>
</svelte:head>

<!-- <header class="flex justify-center">
  <h1 class="text-5xl page-title animated delay slideInDown">Ahnii!</h1>
</header> -->

<section>
  <div class="self-center justify-center col-start-1 row-start-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      class="w-screen my-4 bg current"
      preserveAspectRatio="xMinYMin meet"
    >
      <defs>
        <clipPath id="myCircle">
          <circle fill="#FFFFFF" cy="50%" r="75" cx="50%"></circle>
        </clipPath>
      </defs>
      <Line y="0" stroke="gray" strokeWidth="4" />
      <Line y="7" stroke="gray" strokeWidth="4" />
      <Line y="18" stroke="gray" strokeWidth="4" />

      <Line y="24" stroke="green" strokeWidth="7" />
      <Line y="32" stroke="green" strokeWidth="7" />
      <Line y="40" stroke="green" strokeWidth="7" />
      <Line y="48" stroke="green" strokeWidth="7" />

      <Line y="60" stroke="purple" strokeWidth="5" />
      <Line y="66" stroke="purple" strokeWidth="6" />

      <Line y="80" stroke="gray" strokeWidth="4" />
      <Line y="86" stroke="gray" strokeWidth="4" />
      <Line y="100" stroke="gray" strokeWidth="4" />
      <Line y="106" stroke="gray" strokeWidth="4" />
      <Line y="118" stroke="gray" strokeWidth="4" />
      <Line y="123" stroke="gray" strokeWidth="4" />

      <Line y="132" stroke="green" strokeWidth="7" />
      <Line y="140" stroke="green" strokeWidth="7" />

      <!--<circle cx="50%" cy="50%" r="100"/>-->

      <!-- <g transform="translate(50%, 50%);"> -->
      <g transform="rotate(45 50 50)">
        <image
          x="50%"
          y="50%"
          href="/static/cartoon-russell.jpg"
          width="auto"
          height="100%"
          clip-path="url(#myCircle)"
        ></image>
      </g>
    </svg>
  </div>
  <!--
    transition duration-500 ease-in-out transform
  -->
  <div class="self-center justify-center col-start-1 row-start-1">
    <img
      style="display: none"
      class="w-56 m-auto rounded-full animated zoomIn"
      src="cartoon-russell.jpg"
      alt="Surprisingly accurate looking cartoon avatar of Russell Jones"
    />
  </div>
</section>
