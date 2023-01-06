import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Brainstorm from '../components/tabs/brainstorm';
import Design from '../components/tabs/design';
import Build from '../components/tabs/build';
import About from '../components/tabs/about';
import Contact from '../components/tabs/contact';

export default component$(() => {

  return (
    <div>
      <Brainstorm/>
      <Design/>
      <Build/>
      <About/>
      <Contact/>
    </div>
  );
});

// export const stickyNav: StickyNav = new StickyNav();

export const head: DocumentHead = {
  title: 'Blackflag Labs',
  meta: [
    {
      name: 'description',
      content: 'Blackflag Labs Homepage',
    },
  ],
};
