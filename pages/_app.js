import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1YS00D1GXD"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            
            gtag('config', 'G-1YS00D1GXD',{ 'optimize_id':'OPT-524RCFP' });
           `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
