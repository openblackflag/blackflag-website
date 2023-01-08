import { component$, useStylesScoped$ } from '@builder.io/qwik';
import stylesBrainstorm from './tab.css?inline';

export default component$(() => {
  // useStylesScoped$(styles);
  useStylesScoped$(stylesBrainstorm);

  return (
    <section class="et-slide" id="tab-brainstorm-target">
      <div class="central-content-container">
        <div class="central-content">
          <div class="title-bar"></div>
          <header>Brainstorm</header>
          <div class="title-bar"></div>
          <h3>We'll help you develop your idea into a market-ready solution</h3>
          <img src="/brainstorm.svg" alt="brainstorm graphic" height="800px" width="800px" style="width: 20vw; height: auto;"/>
        </div>
      </div>
      <div class="central-content-container">
        <div class="central-content">
          <div class="title-bar"></div>
          <header>Brainstorm</header>
          <div class="title-bar"></div>
          <h3>We'll help you develop your idea into a market-ready solution</h3>
          <img src="/brainstorm.svg" alt="brainstorm graphic" height="800px" width="800px" style="width: 20vw; height: auto;"/>
        </div>
      </div>
      <div class="central-content-container">
        <div class="central-content">
          <div class="title-bar"></div>
          <header>Brainstorm</header>
          <div class="title-bar"></div>
          <h3>We'll help you develop your idea into a market-ready solution</h3>
          <img src="/brainstorm.svg" alt="brainstorm graphic" height="800px" width="800px" style="width: 20vw; height: auto;"/>
        </div>
      </div>
    </section>
  );
});