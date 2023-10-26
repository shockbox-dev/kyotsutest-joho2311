import Script from 'next/script'
import { useRouter } from 'next/router'

export const LNID = process.env.NEXT_PUBLIC_LINE_ID || ''

type Props = {
  id: string
}

export const LINEBaseCode: React.FC<Props> = ({ id }) => {
  const router = useRouter()
  const notHome = router.pathname == '/form'

  return (
    <>
      <Script defer strategy='afterInteractive'>
        {`
          (function(g,d,o){
            g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};
            var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';
            var s=d.createElement('script');s.async=1;
            s.src=o||h+'/n/line_tag/public/release/v1/lt.js';
            var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
              })(window, document);
          _lt('init', {
            customerType: 'lap',
            tagId: '${id}'
          });
          _lt('send', 'pv', ['${id}']);
        `}
        {notHome
          ? `
          _lt('send', 'cv', {
            type: 'Conversion'
          },['${id}']);
        `
          : null}
      </Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
        <img height="1" width="1" style="display:none"
        src="https://tr.line.me/tag.gif?c_t=lap&t_id=${id}&e=pv&noscript=1" />
        `,
        }}
      />
    </>
  )
}
