import { css } from '@emotion/react'

import { SchoolList } from '~/components/atoms/SchoolList'

const schools = [
  {
    name: '越谷駅東口校',
    address: '越谷市弥生町16-1　越谷ツインシティ・BシティB1F',
    lat: 35.88965656136472,
    lng: 139.78606408692306,
  },
  {
    name: '越谷レイクタウン駅前校',
    address: '越谷市レイクタウン8-7-3 スフィア2F',
    lat: 35.876069946533896,
    lng: 139.8213001859701,
  },
  // {
  //   name: '新所沢駅前校',
  //   address: '所沢市松葉町11-1 マルハビル6F',
  //   lat: 35.80733561159353,
  //   lng: 139.45655288616013,
  // },
  // {
  //   name: '獨協大学前校',
  //   address: '草加市栄町2-11-10 松原ツインタワービルアップル館東棟３F',
  //   lat: 35.84366403166412,
  //   lng: 139.8014614395291,
  // },
  // {
  //   name: '西所沢駅前校',
  //   address: '所沢市西所沢1丁目９-18 第二鹿島屋ビル1F',
  //   lat: 35.78866313826896,
  //   lng: 139.45756823354145,
  // },
  {
    name: 'ふじみ野駅前校',
    address: '富士見市ふじみ野西1-18-1 第6マツモトビル2Ｆ',
    lat: 35.859724347898315,
    lng: 139.52117560159755,
  },
  {
    name: '和光市駅前校',
    address: '和光市丸山台1-10-1 MTCビル5F',
    lat: 35.78754598368933,
    lng: 139.61208573988498,
  },
]

export const Saitama: React.FC = () => {
  return (
    <>
      <div css={styles.container}>
        <ul>
          {schools.map(school => (
            <li css={styles.listItem} key={school.name}>
              <SchoolList
                name={school.name}
                address={school.address}
                area='埼玉'
                lat={school.lat}
                lng={school.lng}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const styles = {
  container: css`
    width: 100%;
    @media (min-width: 960px) {
      width: 90%;
      margin: 0 auto;
    }
  `,
  listItem: css`
    list-style: none;
    height: 100px;
    margin-bottom: 20px;
  `,
}
