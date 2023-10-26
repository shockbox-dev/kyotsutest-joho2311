import { useState } from 'react'

import { css } from '@emotion/react'
import { Collapse, Typography } from '@mui/material'

import { SchoolList } from '~/components/atoms/SchoolList'
import { SchoolOutlined } from '@mui/icons-material'

const schools = {
  nagoya: [
    {
      name: '大曽根校',
      address: '名古屋市東区矢田1-1-15 メイフィス大曽根3F',
      lat: 35.192724,
      lng: 136.936919,
    },
    {
      name: '上社校',
      address: '名古屋市名東区上社1-802 上社ターミナルビル2F',
      lat: 35.173593,
      lng: 137.006162,
    },
    {
      name: '黒川駅前校',
      address: '名古屋市北区田幡2-12-14 明治安田生命黒川ビル5F',
      lat: 35.196931,
      lng: 136.910152,
    },

    {
      name: '千種校',
      address: '名古屋市東区筒井3-26-25 第29オーシャンビル8F',
      lat: 35.17392,
      lng: 136.928507,
    },
    {
      name: '茶屋が坂校',
      address: '名古屋市千種区猪高町猪子石猪々道93-2',
      lat: 35.1857559,
      lng: 136.969749,
    },
    {
      name: '名古屋駅太閤口校',
      address: '名古屋市中村区椿町1-16 井門名古屋ビル2F',
      lat: 35.172051,
      lng: 136.879467,
    },
    {
      name: '原校',
      address: '名古屋市天白区原1-203 エスタシオン21 2F',
      lat: 35.126244805358056,
      lng: 136.9958062916726,
    },
    {
      name: '星ヶ丘駅東口校',
      address: '名古屋市千種区星ヶ丘元町15-14 星ヶ丘パークビル1F・5F',
      lat: 35.162373475465365,
      lng: 136.9859201162008,
    },
  ],
  mikawa: [
    {
      name: '愛知日進駅前校',
      address: '日進市栄1-1408 近藤ビル1F',
      lat: 35.11667517483935,
      lng: 137.0481305619904,
    },
    {
      name: '旭前校',
      address: '尾張旭市旭前町5-7-8 アネックスビル2F',
      lat: 35.21360480893375,
      lng: 137.02005044059064,
    },
    {
      name: '安城駅前校',
      address: '安城市御幸本町2-3 丸善ビル1F',
      lat: 34.959413904614465,
      lng: 137.08800963599126,
    },
    {
      name: '犬山駅前校',
      address: '犬山市大字犬山字高見町9-3 新鈴井ビル2F',
      lat: 35.380519,
      lng: 136.944005,
    },
    {
      name: '杁ヶ池公園駅前校',
      address: '長久手市杁ヶ池208',
      lat: 35.17150726853663,
      lng: 137.03822544813949,
    },
    {
      name: '太田川校',
      address: '東海市大田町後田20-1 ソラト太田川1F',
      lat: 35.019567549831294,
      lng: 136.89351835546532,
    },
    {
      name: '刈谷駅南口校',
      address: '刈谷市南桜町1-73 OTAビル5F',
      lat: 34.990866307624444,
      lng: 137.008176841445,
    },
    {
      name: '高蔵寺校',
      address: '春日井市高蔵寺町北4-2-2',
      lat: 35.265878,
      lng: 137.044638,
    },
    {
      name: '半田青山駅前校',
      address: '半田市青山1-12-6　森ビル2 4F',
      lat: 34.878792562180266,
      lng: 136.9169867623894,
    },
  ],
}

export const Aichi: React.FC = () => {
  const [nagoya, setNagoya] = useState(false)
  const [mikawa, setMikawa] = useState(false)

  return (
    <>
      <div css={styles.collapseWrapper}>
        <dt
          css={styles.collapse}
          onClick={() => setNagoya(!nagoya)}
          data-type={nagoya ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            名古屋エリア
          </Typography>
        </dt>
        <Collapse component='dd' in={nagoya} timeout='auto' unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.nagoya.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='愛知'
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
          onClick={() => setMikawa(!mikawa)}
          data-type={mikawa ? 'isActive' : null}>
          <Typography component='p' variant='h6' css={styles.collapseLabel}>
            尾張(名古屋市以外)・西三河エリア
          </Typography>
        </dt>
        <Collapse component='dd' in={mikawa} timeout='auto' unmountOnExit>
          <div css={styles.collapseContainer}>
            <ul>
              {schools.mikawa.map(school => (
                <li css={styles.listItem} key={school.name}>
                  <SchoolList
                    name={school.name}
                    address={school.address}
                    area='愛知'
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
