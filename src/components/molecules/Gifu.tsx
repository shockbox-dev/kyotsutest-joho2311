import { css } from '@emotion/react'

import { SchoolList } from '~/components/atoms/SchoolList'

const schools = [
  {
    name: '岐阜忠節校',
    address: '岐阜市島栄町1-33 シャトーシャルマン3F',
    lat: 35.432628,
    lng: 136.745804,
  },
  {
    name: 'JR岐阜駅前校',
    address: '岐阜市吉野町6-31 岐阜スカイウィング37 2F',
    lat: 35.41131076620221,
    lng: 136.7548331688292,
  },
]

export const Gifu: React.FC = () => {
  return (
    <>
      <div css={styles.container}>
        <ul>
          {schools.map(school => (
            <li css={styles.listItem} key={school.name}>
              <SchoolList
                name={school.name}
                address={school.address}
                area='岐阜'
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
