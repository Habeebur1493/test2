import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
  useGSAP,
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
);


useGSAP.registerPlugin(Flip);
useGSAP.registerPlugin(ScrollTrigger);
useGSAP.registerPlugin(Observer);
useGSAP.registerPlugin(ScrollToPlugin);
useGSAP.registerPlugin(Draggable);
useGSAP.registerPlugin(MotionPathPlugin);
useGSAP.registerPlugin(EaselPlugin);
useGSAP.registerPlugin(PixiPlugin);
useGSAP.registerPlugin(TextPlugin);
useGSAP.registerPlugin(RoughEase);
useGSAP.registerPlugin(ExpoScaleEase);
useGSAP.registerPlugin(SlowMo);
useGSAP.registerPlugin(CustomEase);

export default gsap;

useGSAP(() => {
  gsap.to("h1", {
    duration: 1,
    top: "0%",
    ease: "power2.inOut",
  });
}

);
