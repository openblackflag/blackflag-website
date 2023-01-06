import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="et-slide" id="tab-about-target">
      <div class="central-content">
        <header>About</header>
        <h3>We'll help you develop your idea into a market-ready solution</h3>
      </div>
    </section>
  ); 
});
