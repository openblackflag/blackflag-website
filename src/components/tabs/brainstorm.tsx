import { component$, useStylesScoped$ } from '@builder.io/qwik';
import stylesBrainstorm from './tab.css?inline';

export default component$(() => {
  // useStylesScoped$(styles);
  useStylesScoped$(stylesBrainstorm);

  return (
    <section class="et-slide" id="tab-brainstorm-target">
      <div class="central-content">
        <header>Brainstorm</header>
        <h3>We'll help you develop your idea into a market-ready solution</h3>
      </div>
    </section>
  );
});