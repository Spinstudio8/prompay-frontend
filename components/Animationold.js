import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap, { TweenMax, Power3 } from "gsap";
export const TextAnimation = ({ children, time }) => {
  if (time === undefined) time = 0.2;
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "100px",
    threshold: time, // you can change it from 0 - 1 (0 = 0% 1 = 100%) how many percent of the element to show before the function run
  });
  // Animation for fading In
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading Out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      x: -20,
      ease: "power4.out",
    });
  };
  //  checkin to see when the viewport is visible to the user
  //   intersection && intersection.intersectionRatio < 0.2
  //     ? fadeOut(element)
  //     : fadeIn(element);
  intersection && intersection.intersectionRatio < time
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
  return <div ref={sectionRef}>{children}</div>;
};

// export default Animation;\

export const DivAnimation = ({ children, time }) => {
  console.log(time);

  if (time === undefined) time = 0.2;

  let DivRef = useRef(null);
  const intersection = useIntersection(DivRef, {
    root: null,
    rootMargin: "100px",
    threshold: 0.2, // you can change it from 0 - 1 (0 = 0% 1 = 100%) how many percent of the element to show before the function run
  });
  //   useEffect(() => {
  const fadeIn = (element) => {
    TweenMax.to(element, 0.8, {
      opacity: 1,
      y: 0,
      ease: Power3.easeInOut,
    });
  };
  const fadeOut = (element) => {
    TweenMax.to(element, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeInOut,
    });
  };
  //   }, []);

  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut("in")
    : fadeIn("in");
  return <div ref={DivRef}>{children}</div>;
};
