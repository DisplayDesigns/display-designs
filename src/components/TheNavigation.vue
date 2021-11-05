<template>
  <header class="nav-container">
    <div class="nav-items">
      <div class="nav-contact-info">
        <span class="contact-info"
          >Call Us>
          <p class="red">0161 653 7381</p></span
        >
        <span class="contact-info"
          >Email>
          <p class="red">signs@displaydesigns.net</p></span
        >
        <div class="social-icons">
          <div class="social-icon">
            <a href="https://twitter.com/displaydesigns" target="_blank">
              <fa class="icon" :icon="['fab', 'twitter']" />
            </a>
          </div>
          <div class="social-icon">
            <a
              href="https://www.facebook.com/displaydesigns.net/"
              target="_blank"
            >
              <fa class="icon" :icon="['fab', 'facebook-f']" />
            </a>
          </div>
          <div class="social-icon">
            <a
              href="https://www.linkedin.com/in/display-designs-75900663/"
              target="_blank"
            >
              <fa class="icon" :icon="['fab', 'linkedin']" />
            </a>
          </div>
          <div class="social-icon">
            <a
              href="https://www.instagram.com/display_designs/"
              target="_blank"
            >
              <fa class="icon" :icon="['fab', 'instagram']" />
            </a>
          </div>
          <div class="social-icon">
            <a href="mailto:signs@displaydesigns.net" target="_blank">
              <fa class="icon" :icon="['fas', 'envelope']" />
            </a>
          </div>
        </div>
      </div>
      <nav id="nav">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo-150.png" alt="display designs" />
          </router-link>
        </div>
        <ul class="nav-links">
          <li class="links">
            <router-link to="/">Home</router-link>
          </li>
          <li class="links">
            <router-link to="/whatWeDo">What We Do</router-link>
          </li>
          <li class="links">
            <router-link to="/whoWeAre">Who We Are</router-link>
          </li>
          <li class="links">
            <router-link to="/getInTouch">Get In Touch</router-link>
          </li>
          <li class="links">
            <router-link to="/companyNews">Company News</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="spacer">&nbsp;</div>
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100%;
  height: 115px;
  background-color: black;
  color: white;

  .nav-items {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;

    .nav-contact-info {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 15px;
      padding-right: 5px;

      .social-icons {
        display: flex;
        flex-direction: row;
        cursor: pointer;

        .social-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 30px;
          border: 1px solid white;
          border-radius: 50%;
          margin-left: 7px;

          a {
            color: inherit;
          }

          &:first-child {
            margin-left: 20px;
          }

          &:hover {
            background-color: white;
            color: black;
          }

          .icon {
            font-size: 1.1rem;
          }
        }
      }

      .contact-info {
        display: flex;
        margin-left: 15px;
        font-size: 0.85rem;
        opacity: 0.9;

        .red {
          color: #ea0202;
          padding-left: 10px;
        }
      }
    }

    #nav {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
      margin: 0 auto;

      .nav-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
      }

      .links {
        padding: 0 15px;

        a {
          text-decoration: none;
          font-weight: bold;
          color: white;
          opacity: 0.7;

          &:hover,
          &:focus {
            opacity: 1;
          }

          &.router-link-exact-active {
            color: #ea0202;
            opacity: 1;
          }
        }
      }
    }
  }
}

.spacer {
  width: 100%;
  height: 115px;
}
</style>