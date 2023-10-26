import { useState } from 'react'

import { css } from '@emotion/react'
import { Collapse, Typography } from '@mui/material'

import { SchoolList } from '~/components/atoms/SchoolList'

const schools = {
  northYokohama: [
    {
      name: '市ヶ尾校',
      address: '青葉区市ヶ尾町1052-6 LILY ICHIGAO 1F',
      lat: 35.54925118817308,
      lng: 139.54006811373327,
    },
    {
      name: '鴨居校',
      address: '緑区鴨居3-1-6 鴨居岩間ビル4F',
      lat: 35.51007097674025,
      lng: 139.5688571153395,
    },
    {
      name: '菊名校',
      address: '港北区菊名4-3-21 青木ビル2F',
      lat: 35.509824583255636,
      lng: 139.6322987106628,
    },
    {
      name: '北山田駅前校',
      address: '都筑区北山田2-1-3 G・O第2ビル2F',
      lat: 35.560873291862194,
      lng: 139.5918496026229,
    },
    {
      name: '希望が丘校',
      address: '旭区中希望が丘99-3　山庄ビル2F',
      lat: 35.45955872437539,
      lng: 139.5149139965748,
    },
    {
      name: '新横浜駅前校',
      address: '港北区新横浜3-6-1 新横浜SRビル8F',
      lat: 35.508458486034314,
      lng: 139.6183934718795,
    },
    {
      name: 'センター北校',
      address: '都筑区中川中央1-7-1 センタービル6F',
      lat: 35.55275912481448,
      lng: 139.57752622999325,
    },
    {
      name: 'センター南校',
      address: '都筑区茅ヶ崎中央50-17 C・M Port 3F',
      lat: 35.54614497778581,
      lng: 139.57523365916236,
    },
    {
      name: '中山校',
      address: '緑区中山町1-26-3 中山北口ビル3F',
      lat: 35.51518223623912,
      lng: 139.53982579981513,
    },
    {
      name: '二俣川駅南口校',
      address: '旭区二俣川2-41-15 イーリス二俣川2F',
      lat: 35.46027280618516,
      lng: 139.53346360090177,
    },
    {
      name: '三ツ境校',
      address: '旭区笹野台1-1-36 丸中ビル3F',
      lat: 35.4686233746277,
      lng: 139.50365364067565,
    },
    {
      name: '横浜駅きた東口校',
      address: '神奈川区金港町1-4 横浜イーストスクエア5F',
      lat: 35.46739663790453,
      lng: 139.62606654552908,
    },
    {
      name: '横浜駅西口校',
      address: '西区北幸1-1-8 横浜エキニアビル5F',
      lat: 35.46771440946667,
      lng: 139.62161652399408,
    },
  ],
  southYokohama: [
    {
      name: '金沢八景駅前校',
      address: '金沢区瀬戸15-10 萬寿穂ビル宝寿4F',
      lat: 35.330846727175434,
      lng: 139.6204757223418,
    },
    {
      name: '金沢文庫校',
      address: '金沢区釜利谷東2-15-13 K１ビル1F',
      lat: 35.342779920632964,
      lng: 139.61914544167277,
    },
    {
      name: '上大岡校',
      address: '港南区上大岡西1-6-1 ゆめおおおかオフィスタワー14F',
      lat: 35.407322695951244,
      lng: 139.5963074143769,
    },
    {
      name: '港南台214ビル校',
      address: '港南区港南台3-3-1 港南台214ビル4F',
      lat: 35.37498411350855,
      lng: 139.5785224319626,
    },
    {
      name: '杉田校',
      address: '磯子区杉田1-6-6 アズサワビル3F',
      lat: 35.38538279993591,
      lng: 139.61856469751874,
    },
    {
      name: '根岸校',
      address: '磯子区西町10-12 パークセレス根岸2F',
      lat: 35.41577488166619,
      lng: 139.63258734873372,
    },
    {
      name: '戸塚駅西口校',
      address: '戸塚区戸塚町120-1 アイランドコアビル3F',
      lat: 35.39792496718205,
      lng: 139.53171664851934,
    },
    {
      name: '戸塚駅東口校',
      address: '戸塚区戸塚町13 ラピス戸塚3ビル5F',
      lat: 35.40038661366745,
      lng: 139.53488770925367,
    },
    {
      name: '能見台校',
      address: '金沢区能見台東1-7 Kスクエアビル3F',
      lat: 35.35954468124379,
      lng: 139.6284795824582,
    },
    {
      name: '東戸塚校',
      address: '戸塚区品濃町538-1 東戸塚中央ビル4F',
      lat: 35.43100322951028,
      lng: 139.55755526835785,
    },
  ],
  kawasaki: [
    {
      name: '溝の口北校',
      address: '高津区溝口2-14-6 シマヤビル2F',
      lat: 35.60181574825482,
      lng: 139.61177597908605,
    },
    {
      name: '元住吉校',
      address: '中原区木月2-7-28 サリエンテS・Iビル1F',
      lat: 35.56435888879996,
      lng: 139.65537062235046,
    },
  ],
  shonan: [
    {
      name: '大船校',
      address: '鎌倉市大船1-3-9 MS大船ビル1F',
      lat: 35.35021763719411,
      lng: 139.53071367879312,
    },
    {
      name: '大船東校',
      address: '鎌倉市大船1-23-31 浜田ビル4F',
      lat: 35.352805067892206,
      lng: 139.5327500033246,
    },
    {
      name: '鎌倉小町通り校',
      address: '鎌倉市小町2-1-5 櫻井ビル3F',
      lat: 35.32036123202591,
      lng: 139.55123494504699,
    },
    {
      name: '茅ヶ崎校',
      address: '茅ヶ崎市新栄町13-45 陽北ビル2F',
      lat: 35.331948586184915,
      lng: 139.40405970454998,
    },
    {
      name: '辻堂校',
      address: '藤沢市辻堂1-1-8 RIBLDG4F',
      lat: 35.33677712055714,
      lng: 139.44808819227777,
    },
  ],
  yokosuka: [
    {
      name: '追浜校',
      address: '追浜本町1-2-1 ルナタウン追浜1F',
      lat: 35.3168106606392,
      lng: 139.62454241775134,
    },
    // {
    //   name: '北久里浜校',
    //   address: '根岸町2-31-3 エスアンドティー第二ビル4F',
    //   lat: 35.2494488515495,
    //   lng: 139.6861751487184,
    // },
    {
      name: '衣笠校',
      address: '衣笠栄町1-13 シルパティオ3F',
      lat: 35.25697235368489,
      lng: 139.66307911622056,
    },
    {
      name: '久里浜駅前校',
      address: '久里浜4-5-2 久里浜駅前ロンタンビル4F',
      lat: 35.2303965848318,
      lng: 139.70235820946155,
    },
    {
      name: '横須賀中央校',
      address: '若松町2-5-3 矢島ビル3F',
      lat: 35.279245928800066,
      lng: 139.67032192662919,
    },
  ],
  yamato: [
    {
      name: '大和駅南口校',
      address: '中央4-1-2 近藤ビル4F',
      lat: 35.469672250391945,
      lng: 139.46049977683526,
    },
  ],
}

export const Kanagawa: React.FC = () => {
  const [northYokohama, setNorthYokohama] = useState(false)
  const [southYokohama, setSouthYokohama] = useState(false)
  const [kawasaki, setKawasaki] = useState(false)
  const [shonan, setShonan] = useState(false)
  const [yokosuka, setYokosuka] = useState(false)
  const [yamato, setYamato] = useState(false)

  return (
    <>
      <div css={styles.collapseWrapper}>
        <dt
          css={styles.collapse}
          onClick={() => setNorthYokohama(!northYokohama)}
          data-type={northYokohama ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            横浜市北部（青葉区・都筑区・港北区・緑区・神奈川区・西区・旭区）
          </Typography>
        </dt>
        <Collapse
          component='dd'
          in={northYokohama}
          timeout='auto'
          unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.northYokohama.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='神奈川'
                    lat={school.lat}
                    lng={school.lng}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
      <div css={styles.collapseWrapper}>
        <dt
          css={styles.collapse}
          onClick={() => setSouthYokohama(!southYokohama)}
          data-type={southYokohama ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            横浜市南部（戸塚区・磯子区・港南区・金沢区）
          </Typography>
        </dt>
        <Collapse
          component='dd'
          in={southYokohama}
          timeout='auto'
          unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.southYokohama.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='神奈川'
                    lat={school.lat}
                    lng={school.lng}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
      <div css={styles.collapseWrapper}>
        <dt
          css={styles.collapse}
          onClick={() => setKawasaki(!kawasaki)}
          data-type={kawasaki ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            川崎市（中原区・高津区）
          </Typography>
        </dt>
        <Collapse component='dd' in={kawasaki} timeout='auto' unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.kawasaki.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='神奈川'
                    lat={school.lat}
                    lng={school.lng}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
      <div css={styles.collapseWrapper}>
        <dt
          css={styles.collapse}
          onClick={() => setShonan(!shonan)}
          data-type={shonan ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            鎌倉市・藤沢市・茅ヶ崎市
          </Typography>
        </dt>
        <Collapse component='dd' in={shonan} timeout='auto' unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.shonan.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='神奈川'
                    lat={school.lat}
                    lng={school.lng}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
      <div css={styles.collapseWrapper}>
        <dt
          css={styles.collapse}
          onClick={() => setYokosuka(!yokosuka)}
          data-type={yokosuka ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            横須賀市
          </Typography>
        </dt>
        <Collapse component='dd' in={yokosuka} timeout='auto' unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.yokosuka.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='神奈川'
                    lat={school.lat}
                    lng={school.lng}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
      <div css={styles.collapseWrapper}>
        <dt
          css={styles.collapse}
          onClick={() => setYamato(!yamato)}
          data-type={yamato ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            大和市
          </Typography>
        </dt>
        <Collapse component='dd' in={yamato} timeout='auto' unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.yamato.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='神奈川'
                    lat={school.lat}
                    lng={school.lng}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    </>
  )
}

const styles = {
  collapseWrapper: css`
    padding: 0 0 30px;
    & dd {
      margin-inline-start: 10px;
    }
    @media (min-width: 960px) {
      & dd {
        margin-inline-start: 40px;
      }
    }
  `,
  collapse: css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 10px;
    border-bottom: 0.7px solid;
    cursor: pointer;
    &:after {
      content: '\f078';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      right: 10px;
      transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &[data-type='isActive']:after {
      transform: rotate(180deg);
    }
  `,
  collapseLabel: css`
    font-size: 0.7rem;
    font-family: 'fot-tsukuardgothic-std', sans-serif;
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding: 1rem 50px 1rem 0;
    flex-grow: 1;
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
  `,
  collapseContainer: css`
    width: 100%;
    @media (max-width: 960px) {
    }
  `,
  listItem: css`
    list-style: none;
    height: 100px;
    margin-bottom: 20px;
  `,
}
