<script lang="ts">
  $: email = '';
  $: message = '';

  let buttonDisabled: boolean = false;

  const contactSubmit = async () => {
    buttonDisabled = true;

    // /src/routes/process/contact.js
    const url = '/process/contact';

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => {
        r.json().then((result) => {
          console.log('result', result);
        });
      })
      .catch((err) => {
        // POST error: do something...
        console.log('POST error', err.message);
      });
  };
</script>

{#if !buttonDisabled}
  <form class="w-full" on:submit|preventDefault={contactSubmit} method="POST">
    <div class="pb-3">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold
        mb-2"
        for="your-email"
      >
        Your Email Address
      </label>
      <input
        class="w-full px-5 py-3 border border-gray-400 rounded-lg outline-none focus:ring"
        bind:value={email}
        type="email"
        placeholder="Email Address"
        name="email"
        id="your-email"
        required
      />
    </div>
    <div class="py-3">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold
        mb-2"
        for="your-message"
      >
        Your message
      </label>
      <textarea
        bind:value={message}
        rows="4"
        class="w-full h-40 px-5 py-3 border border-gray-400 rounded-lg outline-none focus:ring"
        name="message"
        id="your-message"
        placeholder="Type here..."
        required
      />
    </div>
    <div class="pt-3">
      <button
        class="flex px-6 py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring focus:border-indigo-300"
        type="submit"
        disabled={buttonDisabled}
      >
        <svg
          class="self-center h-4 fill-current brz-icon-svg brz-css-mexoi brz-css-rstqv"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          xml:space="preserve"
          data-type="glyph"
          data-name="email-83"
        >
          <g fill="currentColor">
            <path
              data-color="color-2"
              fill="currentColor"
              d="M23,2H1C0.4,2,0,2.4,0,3v3c0,0.4,0.2,0.7,0.5,0.9l11,6C11.7,13,11.8,13,12,13s0.3,0,0.5-0.1 l11-6C23.8,6.7,24,6.4,24,6V3C24,2.4,23.6,2,23,2z"
            />
            <path
              fill="currentColor"
              d="M13.4,14.6C13,14.9,12.5,15,12,15s-1-0.1-1.4-0.4L0,8.9V21c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V8.9 L13.4,14.6z"
            />
          </g>
        </svg>
        <span class="self-center float-left ml-3 text-base font-medium"
          >Send Message</span
        >
      </button>
    </div>
  </form>
{:else}
  <div class="message">
    <p>Thank you for contacting me.</p>
  </div>
{/if}
