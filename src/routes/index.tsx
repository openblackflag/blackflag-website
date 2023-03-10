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
      <div style="background-color: white; width: 100%; height: 50px;"></div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Blackflag Labs',
  meta: [
    {
      name: 'description',
      content: 'Blackflag Labs is an innovative IT contracting company designing web solutions with cutting-edge latency and scalability.',
    },
  ],
};
