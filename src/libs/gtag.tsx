import Script from 'next/script'

export const UA = process.env.NEXT_PUBLIC_GOOGLE_PROPERTY_ID
export const AW = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID
export const MCVid = process.env.NEXT_PUBLIC_GOOGLE_MICROCONVERSION_ID
export const CVid = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_ID

export const Gtag: React.FC = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AW}`}
        strategy='afterInteractive'
      />
      <Script strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());  
          
          gtag('config', '${AW}');
        `}
      </Script>
    </>
  )
}

export const MCV: React.FC = () => {
  return (
    <>
      <Script strategy='afterInteractive'>
        {`
          gtag('event', 'conversion', {
            'send_to': '${UA}/${MCVid}'
          });
        `}
      </Script>
    </>
  )
}

export const CV: React.FC = () => {
  return (
    <>
      <Script strategy='afterInteractive'>
        {`
          gtag('event', 'conversion', {'send_to', '${AW}/${CVid}'});
          `}
      </Script>
    </>
  )
}
