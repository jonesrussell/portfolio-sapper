<script>
  import AlertSimple from "../components/tails/alert-simple.svelte";
  import ButtonGithub from "../components/tails/button-github.svelte";
  import ContentBrowser from "../components/tails/content-browser.svelte";
  import ContentCard from "../components/tails/content-card.svelte";
  import ContentCourse from "../components/tails/content-course.svelte";
  import CTAGradient from "../components/tails/cta-gradient.svelte";
  import DashboardWidgets from "../components/tails/dashboard-widgets.svelte";
  import FAQList from "../components/tails/faq-list.svelte";
  import FeatureBlocks from "../components/tails/feature-blocks.svelte";
  import FeatureColumns from "../components/tails/feature-columns.svelte";
  import FeatureContentImage from "../components/tails/feature-content-image.svelte";
  import FeatureContentTestimony from "../components/tails/feature-content-testimony.svelte";
  import FeaturedContentTiles from "../components/tails/featured-content-tiles.svelte";
  import FeaturedShowcase from "../components/tails/featured-showcase.svelte";
  import FormContactSimple from "../components/tails/form-contact-simple.svelte";
  import FormLoginSimple from "../components/tails/form-login-simple.svelte";
  import FormRegistrationLong from "../components/tails/form-registration-long.svelte";
  import HeaderSimple from "../components/tails/header-simple.svelte";
  import HeroClean from "../components/tails/hero-clean.svelte";
  import HeroCulture from "../components/tails/hero-culture.svelte";
  import HeroLearn from "../components/tails/hero-learn.svelte";
  import LinkUnderline from "../components/tails/link-underline.svelte";
  import PaginationClean from "../components/tails/pagination-clean.svelte";
  import PricingSelect from "../components/tails/pricing-select.svelte";
  import TestimonialColumns from "../components/tails/testimonial-columns.svelte";
  import TestimonialCTALeft from "../components/tails/testimonial-cta-left.svelte";
  import TestimonialSingle from "../components/tails/testimonial-single.svelte";
  import TooltipTopPurple from "../components/tails/tooltip-top-purple.svelte";
</script>

<svelte:head>
  <title>'Tails' Components | Russell Jones</title>
</svelte:head>

<header class="flex justify-center">
  <h1 class="text-center text-3xl page-title animated delay slideInDown">
    Tails Components
  </h1>
</header>

<div class="">
  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Alert Simple
    </h2>
    <AlertSimple />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Button Github
    </h2>
    <ButtonGithub />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Content Browser
    </h2>
    <ContentBrowser>
      <span slot="media">
        <img
          alt="Placeholder"
          src="https://images.unsplash.com/photo-1504985954001-5737b2af529e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2879&q=80"
          class="w-full h-full object-cover" /></span>
      Perhaps the coolest features since the introduction of Poprocks! We've got
      some rock'n poppin features that will leave you wanting more. We've got a
      jampacked feature set of awesomeness that will blow your pants right off!
    </ContentBrowser>
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Content Card
    </h2>
    <ContentCard />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Content Course
    </h2>
    <ContentCourse />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      CTA Gradient
    </h2>
    <CTAGradient />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Dashboard Widgets
    </h2>
    <DashboardWidgets />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      FAQ List
    </h2>
    <FAQList />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Feature Blocks
    </h2>
    <FeatureBlocks />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Feature Columns
    </h2>
    <FeatureColumns />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Feature Content Image
    </h2>
    <FeatureContentImage />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Feature Content Testimony
    </h2>
    <FeatureContentTestimony />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Featured ContentTiles
    </h2>
    <FeaturedContentTiles />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Featured Showcase
    </h2>
    <FeaturedShowcase />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Form Contact Simple
    </h2>
    <section class="relative py-6 min-w-screen animation-fade animation-delay">
      <div
        class="container h-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow">
        <div class="h-full sm:flex">
          <aside
            class="w-full p-10 rounded-none sm:rounded md:w-1/3 sm:bg-gray-100">
            <h2
              class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
              Contact Us
            </h2>
            <p class="mt-2 mb-5 text-sm text-gray-800">
              You can find our contact info below or you can feel free to leave
              us a quick message in the form.
            </p>
            <div class="flex items-start py-3 pt-5">
              <div class="flex-shrink">
                <svg
                  class="w-8 h-8 mt-1 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div class="flex-grow ml-10 md:ml-5">
                <div class="text-base font-medium mb-">Phone</div>
                <span class="text-gray-500 text-md">+123-456-7890</span>
              </div>
            </div>
            <div class="flex items-start py-3">
              <div class="flex-shrink">
                <svg
                  class="w-8 h-8 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="flex-grow ml-10 md:ml-5">
                <div class="text-base font-medium">Address</div>
                <span class="text-gray-500 text-md">2503 Washington Avenue,
                  Hattiesburg, Mississippi 39402</span>
              </div>
            </div>
            <div class="flex items-start py-3 pb-5">
              <div class="flex-shrink">
                <svg
                  class="w-8 h-8 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <div class="flex-grow ml-10 md:ml-5">
                <div class="mb-2 text-base font-medium">Social</div>
                <div class="flex text-white text-md sm:text-gray-500">
                  <a
                    href="https://svelte.dev"
                    class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://svelte.dev"
                    class="ml-3 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://svelte.dev"
                    class="ml-3 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://svelte.dev"
                    class="ml-3 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">GitHub</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
          <div
            class="flex items-center justify-center w-full p-10 bg-white md:w-2/3">
            <FormContactSimple />
          </div>
        </div>
      </div>
    </section>
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Form Login Simple
    </h2>
    <FormLoginSimple />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Form Registration Long
    </h2>
    <FormRegistrationLong />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Header Simple
    </h2>
    <HeaderSimple />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Hero Clean
    </h2>
    <HeroClean />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Hero Culture
    </h2>
    <HeroCulture />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Hero Learn
    </h2>
    <HeroLearn />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Link Underline
    </h2>
    <LinkUnderline />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Pagination Clean
    </h2>
    <PaginationClean />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Pricing Select
    </h2>
    <PricingSelect />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Testimonial Columns
    </h2>
    <TestimonialColumns />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Testimonial CTA Left
    </h2>
    <TestimonialCTALeft />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Testimonial Single
    </h2>
    <TestimonialSingle />
  </section>

  <section>
    <h2
      class="text-center text-3xl font-normal leading-normal mt-2 mb-2 text-purple-800">
      Tooltip Top Purple
    </h2>
    <TooltipTopPurple />
  </section>
</div>
