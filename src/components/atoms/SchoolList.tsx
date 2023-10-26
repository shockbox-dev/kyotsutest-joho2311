import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { Typography, Modal, Button } from '@mui/material'
import GoogleMapReact from 'google-map-react'

import { SchoolButton } from '~/components/atoms/SchoolButton'

type Props = {
  name: string
  address: string
  area: string
  lat: number
  lng: number
}

export const SchoolList: React.FC<Props> = ({
  name,
  address,
  area,
  lat,
  lng,
}) => {
  const [open, setOpen] = useState(false)

  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  }

  const contentString = `
    <div>
      <h2>東進衛星予備校 ${name}</h2>
    </div>
  `

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [open])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleApiLoaded = ({ map, maps }) => {
    const marker = new maps.Marker({
      map,
      position: {
        lat,
        lng,
      },
    })

    const infowindow = new maps.InfoWindow({
      content: contentString,
    })

    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    })
  }

  return (
    <>
      <div css={styles.container}>
        <div css={styles.info}>
          <div css={styles.text}>
            <Typography component='h2' css={styles.name}>
              {name}
            </Typography>
            <Typography component='h3' css={styles.address}>
              {address}
            </Typography>
          </div>
          <div css={styles.map}>
            <Button onClick={handleOpen} css={styles.mapButton}>
              校舎地図を見る
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='校舎位置情報'
              aria-describedby='校舎の位置情報をGoogle map上に表示します。'>
              <div css={styles.modalContainer}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                  }}
                  defaultCenter={defaultLatLng}
                  defaultZoom={17}
                  center={{ lat, lng }}
                  onGoogleApiLoaded={handleApiLoaded}
                  yesIWantToUseGoogleMapApiInternals
                />
              </div>
            </Modal>
          </div>
        </div>
        <div css={styles.btnContainer}>
          <SchoolButton area={area} school={name} color='orange' />
        </div>
      </div>
    </>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    @media (min-width: 960px) {
      flex-flow: row;
      align-items: center;
    }
  `,
  info: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    @media (min-width: 960px) {
      width: 60%;
    }
  `,
  text: css``,
  map: css`
    @media (min-width: 960px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
    }
  `,
  btnContainer: css`
    width: 95%;
    height: 45px;
    @media (min-width: 960px) {
      width: 40%;
      height: 60%;
    }
  `,
  name: css`
    padding: 0;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    @media (min-width: 960px) {
      font-size: 1.7rem;
    }
  `,
  address: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 0.7rem;
    @media (min-width: 960px) {
      font-size: 1rem;
    }
  `,
  mapButton: css`
    height: 40px;
    width: 100px;
    margin-right: 20px;
    background-color: #e8f0f2;
    border: 1px solid black;
    border-radius: 5px;
    transition: all 0.6s ease-in-out;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    &:hover {
      background-color: #4fafc0;
      color: white;
    }
    @media (min-width: 960px) {
      width: 150px;
      height: 50px;
      margin-right: 50px;
    }
  `,
  modalContainer: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 500px;
    background-color: white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    padding: 10px;
    @media (min-width: 960px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1000px;
      height: 750px;
    }
  `,
}
