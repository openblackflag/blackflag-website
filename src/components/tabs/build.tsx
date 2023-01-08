import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="et-slide" id="tab-build-target">
      <div class="central-content">
        <div class="title-bar"></div>
        <header>Build</header>
        <div class="title-bar"></div>
        <h3>Using cutting-edge tech, we'll make your vision a reality</h3>
        <img src="/build.svg" alt="build graphic" height="800px" width="800px" style="width: 20vw; height: auto;"/>
      </div>
    </section>
  );
});
