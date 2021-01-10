import { useState } from "react";
import SiteHead from "./components/Head";
import "../styles/styles.css";

export default function mateo({ Component, pageProps }) {
  const [isSignedIn, setIsSignedIn] = useState(null);
  if (isSignedIn == true) {
    return (
      <SiteHead>
        <Component {...pageProps} />
      </SiteHead>
    );
  }
  if (isSignedIn == false) {
    return <LogInScreen />;
  } else {
    setIsSignedIn(false);
  }
}

function LogInScreen() {
  return <></>;
}
