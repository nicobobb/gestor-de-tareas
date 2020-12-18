import { ProvideAuth } from '../lib/auth';
import "tailwindcss/tailwind.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;