<template>
  <div class="home">
    <div class="home-video-wrapper">
      <video-background
        src="../assets/Display-Designs-for-Web.mp4"
        style="max-height: 70vh; height: 100vh"
      >
      </video-background>
    </div>
    <div class="home-content-wrapper">
      <div class="home-content">
        <h3 class="home-title-subheading">
          Innovative designs in exceptional quality of manufactured
        </h3>
        <h1 class="home-title">Visual Merchandising, POS Displays & Signage</h1>
        <h4 class="home-content-heading">
          So, what can we manufacture for you?
        </h4>
        <p class="home-content-paragraph">
          Well as you approach your outlet, all the main signage including the
          projecting signs and the elaborate wall cladding panels – we can do
          those for you. Your magnificent window display features that are so
          elegantly illuminated for maximum visual impact, all manufactured by
          us.
        </p>
        <p class="home-content-paragraph">
          As you walk through the door the first thing that catches your eye are
          those hanging departmental and brand headers in stunning LED neon
          ‘LumeNeon’ making the whole shopping experience organised and
          inviting.
        </p>
        <p class="home-content-paragraph">
          Your product feature wall is spectacular, our curvy shaped shelves
          ‘Lumeneon Shelf Scheme’ with the striking effect to all the curved
          profiles beautifully and subtly illuminate your current product
          promotions.
        </p>
        <p class="home-content-paragraph">
          An elegant free standing sculptured branded display unit, obviously
          the centre piece designed to catch the consumers eye but keep them
          focused on the purchase. As they glance up, on the back wall a fully
          illuminated counter (and an assistant eagerly waiting to serve) and
          above them visible right across the store are huge “please pay here”
          letters in style you’ve not seen before.
        </p>
        <p class="home-content-paragraph">
          Gaze up and notice the ceiling covered in those interlocking geometric
          shapes casting an incredible amount of light in every direction. To
          your right is a spectacular wall of retro built up words, shapes or
          numbers with a myriad of finishes styles and textures, and so many
          styles and colour of light from tube lighting to cabochon fairground
          bulbs. As you guessed, all these Visual Merchandising, POS displays &
          Signage can be manufactured by our team of in-house craftsmen, but not
          limited to this scenario.
        </p>
        <p class="home-content-paragraph">
          It is as simple as this, Together we have created your concept store –
          You are ready for roll out production – We Can Manufacture It.
        </p>
      </div>
      <div class="home-content-container-what-we-do">
        <div
          v-for="service in whatWeDo"
          :key="service.name"
          class="home-content-what-we-do"
        >
          <div class="image-wrapper">
            <figure>
              <img
                :src="require(`@/assets/${service.image}`)"
                :alt="service.name"
              />
            </figure>
          </div>
          <h4 class="service-name">{{ service.name }}</h4>
          <p class="service-text">{{ service.text }}</p>
          <a class="service-link" href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import data from "../data.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      whatWeDo: data.whatWeDo,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-video-wrapper {
  background-color: black;
}

.home-content-wrapper {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;

  .home-content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .home-title-subheading,
    .home-title {
      margin: 5px auto;
    }

    .home-title-subheading {
      color: #ea0202;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 15px;
    }

    .home-title {
      font-size: 2.2rem;
      margin-bottom: 35px;
      text-align: center;
    }

    .home-content-heading {
      font-weight: bold;
      font-size: 14px;
    }

    .home-content-paragraph {
      font-size: 14px;
      font-weight: 500;
      margin: 8px 0;
    }
  }

  .home-content-container-what-we-do {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 20px auto;
    // padding: 0 20px;

    .home-content-what-we-do {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 15px;

      .image-wrapper {
        img {
          height: auto;
          width: 100%;
          // max-width: 720px;
        }
      }

      .service-name {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 400;
        margin: 10px 0;
      }

      .service-text {
        font-size: 14px;
        margin: 10px 0;
      }

      .service-link {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        color: #ea0202;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
