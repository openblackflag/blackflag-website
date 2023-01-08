import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';
import contactStyles from './contact.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  useStylesScoped$(contactStyles);

  return (
    <section class="et-slide" id="tab-contact-target">
      <div class="central-content-container">
      <div class="central-content">
        <div class="title-bar"></div>
        <header>Contact</header>
        <div class="title-bar"></div><br />
        <h3>Using cutting-edge tech, we'll make your vision a reality</h3>
        <br />
        <div class="button" 
          onClick$={ () => {
            window.open("https://calendly.com/blackflag-labs/30min", "_blank")
          }}
        >
          <span class="button__mask"></span>
          <span class="button__text">Book a Free Meeting</span>
          <span class="button__text button__text--bis">Book a Free Meeting</span>
        </div>
        <br /><br />
        <b>| OR |</b><br /><br />
        <div class="contact-container">
          <div>
            <img 
              src="/phone-icon.svg" 
              alt="Click to call" 
              height="25px" 
              width="25px" 
              style="margin: 5px;"
              onClick$={ () => {
                window.open("tel:802-557-1699", "_blank")
              }}
            /><br />
            <img 
              src="/email-icon.svg" 
              alt="Click to email" 
              height="25px" 
              width="25px" 
              style="margin: 5px;"
              onClick$={ () => {
                window.open("mailto:blackflag@blackflag.dev", "_blank")
              }}
            /><br />
            <img 
              src="/linkedin-logo.svg" 
              alt="Click for LinkedIn" 
              height="25px" 
              width="25px" 
              style="margin: 5px;"
              onClick$={ () => {
                window.open("https://www.linkedin.com/in/bradly-ovitt-49185a22b/", "_blank")
              }}
            /><br />
            <img 
              src="/github-logo.svg" 
              alt="Click for GitHub" 
              height="25px" 
              width="25px" 
              style="margin: 5px;"
              onClick$={ () => {
                window.open("https://github.com/openblackflag", "_blank")
              }}
            /><br />
          </div>
          <div style="margin-right: 20px;" class="contact-column">
            <div>Phone</div><br />
            <div>Email</div><br />
            <div>LinkedIn</div><br />
            <div>GitHub</div><br />
          </div>
          <div class="contact-vertical-line">
          </div>
          <div class="contact-column">
            <div>+1 (802) 557-1699</div><br />
            <div>blackflag@blackflag.dev</div><br />
            <div>@blackflaglabs</div><br />
            <div>@openblackflag</div><br />
          </div>
        </div>  
      </div>
      </div>
    </section>
  ); 
});
