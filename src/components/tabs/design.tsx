import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="et-slide" id="tab-design-target">
      <div class="central-content">
        <header>Design</header>
        <h3>We'll organize your ideas using a specification-driven approach</h3>
      </div>
    </section>
  );
});
