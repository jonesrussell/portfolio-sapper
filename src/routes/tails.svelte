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
    <FormContactSimple />
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
