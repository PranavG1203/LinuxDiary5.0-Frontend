import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BottomLine } from "./design/Hero";
import chillingPengs from "../assets/main/chillingPengs2.png";
import "./MainScreen.css";

const MainScreen = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const letters = heading.textContent.split("");

    // Clear the heading text
    heading.textContent = "";

    // Wrap each letter in a span
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      heading.appendChild(span);
    });

    // Animate each letter
    gsap.fromTo(
      heading.children,
      {
        opacity: 0,
        y: 50,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
        onComplete: () => {
          // Add a subtle hover effect after the animation
          gsap.to(heading, {
            duration: 0.3,
            scale: 1.05,
            ease: "power1.out",
            yoyo: true,
            repeat: 1,
          });
        },
      }
    );
  }, []);

  return (
    <div
      id="home"
      className="lg:h-screen w-full flex flex-col items-center justify-center bg-transparent space-y-4"
    >
      <div className="pt-28 lg:pt-40 text-center">
        <h1
          ref={headingRef}
          className="font-bold text-6xl mb-10 lg:mb-0 lg:text-8xl lg:leading-[6rem] lg:font-extrabold"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          LINUXDIARY 5.0
        </h1>
      </div>
      <div className="md:w-3/4">
        <img
          src={chillingPengs}
          className="h-72 lg:h-auto mx-auto great"
          alt="Loading penguins..."
        />
      </div>
    </div>
  );
};

export default MainScreen;
