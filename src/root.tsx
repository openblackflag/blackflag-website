import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Blackflag Laboratories | Flagship Application Development"/>
        <meta property="og:description" content="At Blackflag, buzzwords aren't just sales pitches. Optimizing latency, scalability, and effectiveness is our raison d'être, and in doing so, we utilize next-gen technologies at every level of development."/>
        <meta property="og:url" content="https://www.blackflag.dev"/>
        <meta property="og:site_name" content="Blackflag"/>

        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
