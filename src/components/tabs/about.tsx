import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tab.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="et-slide" id="tab-about-target">
      <div class="central-content">
        <div class="title-bar"></div>
        <header>About</header>
        <div class="title-bar"></div>
        <h3 style="line-height: 30px;">
          Blackflag is a software development company based in Vermont.

          <br /><br />

          At Blackflag, buzzwords aren't just sales pitches. Optimizing latency, scalability, and effectiveness is our raison d'être, and in doing so, we utilize next-gen technologies at every level of development.

        </h3>
      </div>
    </section>
  ); 
});
