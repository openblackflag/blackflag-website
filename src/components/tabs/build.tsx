import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="et-slide" id="tab-build-target">
      <div class="central-content">
        <header>Build</header>
        <h3>Using cutting-edge tech, we'll make your vision and reality</h3>
      </div>
    </section>
  );
});
