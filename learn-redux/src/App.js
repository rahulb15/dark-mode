import React from "react";
import anime from "animejs/lib/anime.es.js";
import './App.css';

const moonPath =
  "M81 141C81 218.872 101 247 147 282C65.8141 282 0 218.872 0 141C0 63.1279 65.8141 0 147 0C116 29 81 63.1279 81 141Z";

const sunPath =
"M294 141C294 218.872 228.186 282 147 282C65.8141 282 0 218.872 0 141C0 63.1279 65.8141 0 147 0C228.186 0 294 63.1279 294 141Z";

let toggle = false;
const darkMode = () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
    // easing: "easeOutSine"

  });
  timeline
    .add({
      targets: ".sun",
      d: [
        { value: toggle ? sunPath : moonPath }
      ]
    })
    .add({
      targets: "#darkMode",
      rotate: 320
    }, "-= 350")
    .add({
      targets: "section",
      backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
      color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    }, "-= 700")
    .add({
      targets: "h1",
      boxShadow: toggle ? "0 0 1rem 0 rgba(0,0,0,0.2)" : "0 0 1rem 0 rgba(255,255,255,0.2)",
      borderRadius: toggle ? "0.5rem" : "0",
      transition: "box-shadow 0.5s ease",
      backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
      color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    }, "-= 700");


  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
}

function App() {
  return (
    <div className="App">

      <h1
      style={{
        backgroundColor: "rgb(255,255,255)",
        color: "rgb(22,22,22)",
        textAlign: "center",
        fontFamily: "sans-serif",
        padding: "1rem",
        margin: "0",
        borderRadius: "0.5rem",
        boxShadow: "0 0 1rem 0 rgba(0,0,0,0.2)",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
        transition: "all 0.5s ease",
      }}
    
      >Dark Mode</h1>
      <section>
      <svg
      id="darkMode"
        width="294"
        height="282"
        viewBox="0 0 294 282"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={darkMode}
      >
        <path
          className="sun"
          d="M294 141C294 218.872 228.186 282 147 282C65.8141 282 0 218.872 0 141C0 63.1279 65.8141 0 147 0C228.186 0 294 63.1279 294 141Z"
          fill="#F09643"
        />
      </svg>
      </section>
    </div>
  );
}

export default App;
