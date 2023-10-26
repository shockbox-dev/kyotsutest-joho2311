import Script from 'next/script'

export const TWID = process.env.NEXT_PUBLIC_TWITTER_ID || ''

type Props = {
  id: string
}

export const TwitterTag: React.FC<Props> = ({ id }) => {
  return (
    <>
      <Script strategy='afterInteractive' defer>
        {`
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init','${id}');
          twq('track','PageView');
          `}
      </Script>
    </>
  )
}
