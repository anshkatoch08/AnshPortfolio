import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Check if landing elements exist
  const landingInfo = document.querySelector(".landing-info h3");
  const landingIntroH2 = document.querySelector(".landing-intro h2");
  const landingIntroH1 = document.querySelector(".landing-intro h1");
  const landingH2Info = document.querySelector(".landing-h2-info");
  let landingText2: SplitText | null = null;
  const TextProps = { type: "chars,lines", linesClass: "split-h2" };

  if (landingInfo && landingIntroH2 && landingIntroH1) {
    var landingText = new SplitText(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
      {
        type: "chars,lines",
        linesClass: "split-line",
      }
    );
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.4,
        filter: "blur(0px)",
        ease: "power2.out",
        y: 0,
        stagger: 0.015,
        delay: 0.3,
      }
    );
  }

  if (landingH2Info) {
    landingText2 = new SplitText(".landing-h2-info", TextProps);
    gsap.fromTo(
      landingText2.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.4,
        filter: "blur(0px)",
        ease: "power2.out",
        y: 0,
        stagger: 0.012,
        delay: 0.3,
      }
    );
  }

  if (document.querySelector(".landing-info-h2")) {
    gsap.fromTo(
      ".landing-info-h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        y: 0,
        delay: 0.8,
      }
    );
  }

  if (document.querySelector(".header") && document.querySelector(".icons-section") && document.querySelector(".nav-fade")) {
    gsap.fromTo(
      [".header", ".icons-section", ".nav-fade"],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.1,
      }
    );
  }

  const landingH2Info1 = document.querySelector(".landing-h2-info-1");
  const landingH21 = document.querySelector(".landing-h2-1");
  const landingH22 = document.querySelector(".landing-h2-2");

  if (landingH2Info1 && landingH21 && landingH22 && landingText2) {
    const landingText3 = new SplitText(".landing-h2-info-1", TextProps);
    const landingText4 = new SplitText(".landing-h2-1", TextProps);
    const landingText5 = new SplitText(".landing-h2-2", TextProps);

    LoopText(landingText2, landingText3);
    LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
