import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="et-slide" id="tab-design-target">
      <div class="central-content">
        <div class="title-bar"></div>
        <header>Design</header>
        <div class="title-bar"></div><br />
        <h3>We'll organize your ideas using a specification-driven approach</h3>
        <img src="/design.svg" alt="design graphic" height="800px" width="800px" style="width: 20vw; height: auto;"/>
      </div>
    </section>
  );
});
