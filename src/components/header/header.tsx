import {
  component$,
  useStylesScoped$,
  useStore,
  useContextProvider,
  createContext
} from "@builder.io/qwik";
import styles from "./header.css?inline";
import Tab from "./tab";

export const HeaderContext = createContext("header-context");

export default component$(() => {
  useStylesScoped$(styles);

  const store = useStore({
    currentId: null as null | string,
    tabWidth: 0,
    offsetLeft: 0,
    offsetTop: 0,
  });

  useContextProvider(HeaderContext, store);

  return (
    <section
      class="et-hero-tabs"
      style="background-color: #000000;"
      window:onScroll$={() => {
        const heroTab = document.querySelector(".et-hero-tabs") as HTMLElement | null;

        if (heroTab && window.scrollY > (heroTab.offsetTop + heroTab.offsetHeight - 70)) {
          document
              .querySelector(".et-hero-tabs-container")
              ?.classList.add("et-hero-tabs-container--top");
        } else {
          document
              .querySelector(".et-hero-tabs-container")
              ?.classList.remove("et-hero-tabs-container--top");
        }
      }}
    >
      <h1 style="display: none;">Blackflag Labs | IT Contracting & Development</h1>
      <img
        src="/logo.svg"
        alt="Blackflag Logo"
        width="500px"
        height="150px"
        style="width: 80vw; height: auto;"
      />
      <h4 class="subtitle">Flagship Application Development</h4>
      <header class="arrow">↓</header>

      <div class="et-hero-tabs-container">
        <Tab title="Brainstorm" id="tab-brainstorm" />
        <Tab title="Design" id="tab-design" />
        <Tab title="Build" id="tab-build" />
        <Tab title="About" id="tab-about" />
        <Tab title="Contact" id="tab-contact" />
        <span
          class="et-hero-tab-slider"
          style={{ width: store.tabWidth + "px", left: store.offsetLeft + "px" }}
        ></span>
      </div>
    </section>
  );
});
