import { css, Theme } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'
import { Loop } from '@mui/icons-material'

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade, Navigation]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      effect='slide'
      navigation
      css={styles.slide}>
      <SwiperSlide>
        <div css={styles.image}>
          <picture>
            <source type='image/webp' srcSet='image/lesson_01.webp' />
            <source type='image/jpg' srcSet='image/lesson_01.jpg' />
            <img
              src='image/lesson_01.jpg'
              alt='MSGnetwork東進衛星予備校'
              css={styles.image}
            />
          </picture>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div css={styles.image}>
          <picture>
            <source type='image/webp' srcSet='image/lesson_02.webp' />
            <source type='image/jpg' srcSet='image/lesson_02.jpg' />
            <img
              src='image/lesson_02.jpg'
              alt='MSGnetwork東進衛星予備校'
              css={styles.image}
            />
          </picture>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div css={styles.image}>
          <picture>
            <source type='image/webp' srcSet='image/lesson_03.webp' />
            <source type='image/jpg' srcSet='image/lesson_03.jpg' />
            <img
              src='image/lesson_03.jpg'
              alt='MSGnetwork東進衛星予備校'
              css={styles.image}
            />
          </picture>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div css={styles.image}>
          <picture>
            <source type='image/webp' srcSet='image/lesson_04.webp' />
            <source type='image/jpg' srcSet='image/lesson_04.jpg' />
            <img
              src='image/lesson_04.jpg'
              alt='MSGnetwork東進衛星予備校'
              css={styles.image}
            />
          </picture>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div css={styles.image}>
          <picture>
            <source type='image/webp' srcSet='image/lesson_05.webp' />
            <source type='image/jpg' srcSet='image/lesson_05.jpg' />
            <img
              src='image/lesson_05.jpg'
              alt='MSGnetwork東進衛星予備校'
              css={styles.image}
            />
          </picture>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

const styles = {
  slide: (theme: Theme) => css`
    width: 100%;
    height: 100%;
    .swiper-pagination span {
      background-color: #0d9bbd;
      width: 8px;
      border-radius: 4px;
    }
    & .swiper-button-next:after {
      content: '\f138';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 50px;
      border-radius: 50%;
      color: #0d9bbd;
      margin-right: 25%;
      margin-bottom: 50%;
      transition: all 0.4s ease;
    }
    & .swiper-button-next:hover:after {
      color: #238d9b;
    }
    & .swiper-button-prev:after {
      content: '\f137';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 50px;
      color: #0d9bbd;
      margin-left: 25%;
      margin-bottom: 50%;
      transition: all 0.4s ease;
    }
    & .swiper-button-prev:hover:after {
      color: #238d9b;
    }
  `,
  image: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
}

export default Carousel
