import SiteHead from "./components/Head";
import "../styles/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <SiteHead>
      <Component {...pageProps} />
    </SiteHead>
  );
}

export default MyApp;
