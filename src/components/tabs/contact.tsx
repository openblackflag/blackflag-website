import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';
import buttonStyles from './button.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  useStylesScoped$(buttonStyles);

  return (
    <section class="et-slide" id="tab-contact-target">
      <div class="central-content">
        <header>Contact</header>
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
      </div>
    </section>
  ); 
});
