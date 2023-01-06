import {
  component$,
  useStylesScoped$,
  useClientEffect$,
  useContext,
} from "@builder.io/qwik";
import { HeaderContext } from "./header";
import styles from "./tab.css?inline";

interface TabProps {
  title: string;
  id: string;
}

export default component$((props: TabProps) => {
  useStylesScoped$(styles);

  const headerContext = useContext(HeaderContext);

  useClientEffect$(
    () => {
      const element = document.getElementById(props.id);
      if (headerContext.currentId == props.id && element) {
        headerContext.offsetTop = element?.offsetTop ? +71 : 0;
        headerContext.tabWidth = element.clientWidth as number;
        headerContext.offsetLeft = element.offsetLeft as number;
      }
    },
    {
      eagerness: "visible",
    }
  );

  return (
    <a
      preventdefault:click
      id={props.id}
      class="et-hero-tab"
      onClick$={ () => {
        headerContext.currentId = props.id;
        const elementAttr = document.getElementById(props.id + "-target");

        if (elementAttr !== null) {
          const scrollTop = (elementAttr as HTMLElement).offsetTop;
          window.scroll({ top: scrollTop, behavior: "smooth" });
        }
      }}
      window:onResize$={() => {
        const element = document.getElementById(props.id);
        if (headerContext.currentId == props.id && element) {
          headerContext.offsetTop = element?.offsetTop ? +71 : 0;
          headerContext.tabWidth = element.clientWidth as number;
          headerContext.offsetLeft = element.offsetLeft as number;
        }
      }}
      window:onScroll$={() => {
        const slider = document.getElementById(props.id);
        const tab = document.getElementById(props.id + "-target");

        if (
          slider &&
          tab &&
          window.scrollY >
            tab.offsetTop + tab.offsetHeight - 70 - window.innerHeight &&
          window.scrollY < tab.offsetTop + tab.offsetHeight - 70
        ) {
          headerContext.offsetTop = tab.offsetTop + 71;
          headerContext.tabWidth = slider.clientWidth as number;
          headerContext.offsetLeft = slider.offsetLeft;
        }
      }}
      href={"#" + props.id + "-target"}
    >
      {props.title}
    </a>
  );
});
