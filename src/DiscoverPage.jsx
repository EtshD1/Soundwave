import React from "react";
import images from "./images";
import Styles from "./Styles/discover.module.css";

export default function Discover(props) {
  return (<>
    <main>
      <div className={Styles.Main}>
        <Content />
        <AlbumShowcase />
        <BackgroundAesthetic />
      </div>
    </main>
  </>);
}

function Content(props) {
  return (<>
    <div className={Styles.Container}>
      <h1 className={Styles.Title}>Discover new music experience</h1>
      <Visuals />
      <p className={Styles.Description}>
        Enjoy benefits of listening to the latest albums released
          </p>
    </div>
  </>);
}

function Visuals(props) {
  return (<>
    <div className={Styles.VisualInfo}>
      <div>
        <Icon url={images.Charts} />
        <div>Charts</div>
      </div>
      <div>
        <Icon url={images.Podcasts} />
        <div>Podcasts</div>
      </div>
      <div>
        <Icon url={images.Albums} />
        <div>Albums</div>
      </div>
      <div>
        <Icon url={images.More} />
        <div>More</div>
      </div>
    </div>
  </>);
}

function Icon({ url }) {
  return (
    <div className={Styles.Icons} style={{ backgroundImage: `url(${url})` }}></div>
  );
}

function AlbumShowcase() {
  return (
    <div className={Styles.Albums}>
      <Album url={images.TrenchCover} />
      <Album url={images.DivideCover} />
      <Album url={images.ForestHillDriveCover} />
      <Album url={images.PostTraumaticCover} />
    </div>
  );
}

function Album({ url }) {
  return (<div style={{ backgroundImage: `url(${url})` }}></div>);
}

function BackgroundAesthetic(props) {
  return (<>
    <div className={Styles.circle1}></div>
    <div className={Styles.circle2}></div>
    <div className={Styles.circle3}></div>
  </>);
}