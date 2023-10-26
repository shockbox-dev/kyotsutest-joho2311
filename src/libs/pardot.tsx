import Script from 'next/script'

export const Pardot: React.FC = () => {
  return (
    <>
      <Script strategy='afterInteractive'>
        {`
          piAId = '1014242';
          piCId = '';
          piHostname = 'em.t-msg.co.jp';
          
          (function() {
            function async_load(){
              var s = document.createElement('script'); s.type = 'text/javascript';
              s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + piHostname + '/pd.js';
              var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
            }
            if(window.attachEvent) { window.attachEvent('onload', async_load); }
            else { window.addEventListener('load', async_load, false); }
          })();
        `}
      </Script>
    </>
  )
}
