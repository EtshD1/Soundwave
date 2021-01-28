import React from "react";
import Styles from "./Styles/features.module.css";
import images from "./images";

export default function Features() {
  return (
    <main className={Styles.main}>

      <div className={Styles.feature}>
        <div>
          <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path d="M62.6396 31.8198L30.8198 63.6396V1.96099e-05L62.6396 31.8198Z" fill="white" />
              <path d="M31.6396 31.8198L-0.180195 63.6396V1.96099e-05L31.6396 31.8198Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="63" height="64" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={Styles.title}>Unlimited Skips</div>
        <div className={Styles.subtitle}>Play whatever, whenever</div>
      </div>

      <div className={Styles.feature}>
        <div>
          <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.90787" y="85.2578" width="118" height="8" transform="rotate(-45 1.90787 85.2578)" stroke="white" strokeWidth="2" />
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="5" width="78" height="75">
              <path d="M6 76L77 5H4.5L6 76Z" fill="#C4C4C4" />
              <path d="M81.5 22.5L24 80H81.5V22.5Z" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0)">
              <rect x="7.36328" y="51" width="13" height="28" stroke="white" strokeWidth="2" />
              <rect x="27.3633" y="36" width="13" height="43" stroke="white" strokeWidth="2" />
              <rect x="47.3633" y="21" width="13" height="58" stroke="white" strokeWidth="2" />
              <rect x="67.3633" y="6" width="13" height="73" stroke="white" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className={Styles.title}>Offline Play</div>
        <div className={Styles.subtitle}>Take your music with you wherever you go</div>
      </div>

      <div className={Styles.feature}>
        <div>
          <img src={images.Friends} alt=" " />
        </div>
        <div className={Styles.title}>Listen with you friends</div>
        <div className={Styles.subtitle}>Check out if your friends are playing a new or nostalgic song</div>
      </div>

      <div className={Styles.feature}>
        <div className={Styles.lyrics}>
          I said, ooh, I'm blinded by the lights
          <br />
          No, I can't sleep until I feel your touch
          <br />
          I said, ooh, I'm drowning in the night
        </div>
        <div className={Styles.title}>Lyrics as they are sung</div>
        <div className={Styles.subtitle}>Enjoy every line</div>
      </div>

    </main>
  );
}