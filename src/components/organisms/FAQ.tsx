import { useEffect } from 'react'
import { css } from '@emotion/react'
import { Box } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SectionTitle } from 'src/components/atoms/SectionTitle'
import QuestionCard from 'src/components/molecules/QuestionCard'

const FAQ: React.FC = () => {
  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='faq'>
      <Box css={styles.container}>
        <Box css={styles.head} className='title_faq'>
          <SectionTitle title='よくあるご質問' subtitle='FAQ' />
        </Box>
        <Box component='ul' css={styles.cardContainer}>
          <li css={styles.listItem} id='qcard2'>
            <QuestionCard
              question='本当に無料ですか？'
              answer={
                <div css={styles.answer}>
                  <p>
                    はい、無料でご招待しています。前後の招待講習の受講も含めて、模試の受験によって料金の支払いが発生することはありません。また、入学を強制することもありません。
                  </p>
                </div>
              }
            />
          </li>
          <li css={styles.listItem} id='qcard3'>
            <QuestionCard
              question='まだ学校で情報の授業を受けてないのでまだ模試を受けるのは早いです。'
              answer={
                <div css={styles.answer}>
                  <p>
                    今回の模試は実力を測るための模試ではなく、新しい共通テストがどのようなものなのかをいち早く知るためのテストです。学校でまだ習っていなくても、点数を取れなくても大丈夫！受けることに意義があります！気楽に受けましょう！
                  </p>
                </div>
              }
            />
          </li>
          <li css={styles.listItem} id='qcard4'>
            <QuestionCard
              question='文系なので共通テストで情報を受ける必要はありません。'
              answer={
                <div css={styles.answer}>
                  文系の方でも、国公立大学の試験では共通テスト「情報Ⅰ」を受験することがほぼ必須です。私立大学を志望している方でも、共通テスト利用入試方式などを活用する際に情報の学習をしていくことで入試を有利に進めることができる可能性があります。これからの社会で必須のスキルを学ぶことができる科目でもあるので、前向きに学習していきましょう。
                </div>
              }
            />
          </li>
          {/* <li css={styles.listItem} id='qcard5'>
            <QuestionCard
              question='部活が忙しくて通い切れるか不安です。'
              answer={
                <div css={styles.answer}>
                  ご安心ください。部活や学校行事が忙しい人こそ東進！学校や部活の予定に合わせて学習スケジュールをカスタマイズすることができます。１日に２コマ・３コマ受験することもできるので、どんなに忙しい人でも両立して学習を進められます！
                </div>
              }
            />
          </li> */}
          <li css={styles.listItem} id='qcard6'>
            <QuestionCard
              question='部活の大会／学校の行事があり、受験できません。'
              answer={
                <div css={styles.answer}>
                  ご安心ください。後日あらためて受験していただく「後日受験」をしていただくことができます。詳しくは、校舎スタッフまでお問い合わせください。
                </div>
              }
            />
          </li>
        </Box>
      </Box>
    </section>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    width: 100vw;
    background-color: white;
  `,
  container: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 1180px;
    margin: 0 auto;
  `,
  head: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 40px 0 0;
  `,
  cardContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 50px 0 0;
    padding-inline-start: 0;
  `,
  listItem: css`
    list-style: none;
    margin-bottom: 50px;
  `,
  answer: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
  `,
  answer_corona: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    & span {
      background: linear-gradient(
        transparent 50%,
        rgba(255, 252, 107, 0.7) 50%
      );
    }
    @media (min-width: 960px) {
      margin-right: 60px;
      font-size: 1.2rem;
    }
  `,
  img_container: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
  `,
  image: css`
    width: 350px;
    margin: 20px auto 0;
    @media (max-width: 960px) {
      width: 100%;
    }
  `,
  caption: css`
    font-size: 0.8rem;
    text-align: center;
  `,
}

const setAnimation = () => {
  gsap.from('.title_faq', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.title_faq',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('#qcard1', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#qcard1',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('#qcard2', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#qcard2',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('#qcard3', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#qcard3',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('#qcard4', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#qcard4',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('#qcard5', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#qcard5',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('#qcard6', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#qcard6',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
}

export default FAQ
