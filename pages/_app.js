import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-59PMHCJ5SJ"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            
           gtag('config', 'G-59PMHCJ5SJ',{ 'optimize_id':'OPT-NWFQK7L' });
           `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
