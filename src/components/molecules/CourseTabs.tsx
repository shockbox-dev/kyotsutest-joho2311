import { useState } from 'react'
import { css } from '@emotion/react'
import { AppBar, Tab, Tabs } from '@mui/material'
import SwipeableViews from 'react-swipeable-views'

import TabPanel from 'src/components/atoms/TabPanel'
import CourseCard from '~/components/molecules/CourseCard'

const allyProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const CourseTabs: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <div css={styles.container}>
      <AppBar position='static' color='transparent' elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'>
          <Tab label='英語' {...allyProps(0)} css={styles.tabmenu} />
          <Tab label='数学' {...allyProps(1)} css={styles.tabmenu} />
          <Tab label='国語' {...allyProps(2)} css={styles.tabmenu} />
          <Tab label='地歴' {...allyProps(3)} css={styles.tabmenu} />
          <Tab label='理科' {...allyProps(4)} css={styles.tabmenu} />
          <Tab label='その他' {...allyProps(5)} css={styles.tabmenu} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <CourseCard
                  src='yasu'
                  name='安河内 哲也'
                  title='基礎から偏差値アップ総合英語(入門編)'
                  info='90分×5コマ'
                  description='大学入試で避けて通れないのが長文。この講座では、英語に苦手意識を持つ君も、総合的に長文が読めるようになることを目標としています。次がまた読みたくなるような、英語が大好きになること間違いなしの楽しい英文を毎回２つ用意して、成績アップに欠かせない音読の仕方についても詳しく教えます。君を英語大好き人間に変える授業を、さっそく受けてみよう！'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='muto'
                  name='武藤 一也'
                  title='大学入学共通テスト リスニング対策'
                  info='90分×5コマ'
                  description='英語の学習が好きであってもリスニングを苦手としている人はたくさんいます。しかし、英語を使ってコミュニケーションをする上で「英語を正しく聴き取る力」は欠かせない能力です。リスニング力を伸ばすにはおさえるべきポイントがあります。この講座では「イラスト描写の聴き取り」、「対話文の聴き取り」、「モノローグの聴き取り」を通してそのコツを伝授します。大学受験だけでなく、一生役に立つリスニング力を目指して、楽しみながら受験してください。'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='miyazaki'
                  name='宮崎 尊'
                  title='東大への総合英語'
                  info='90分×5コマ'
                  description='これから東大受験の準備を始める人のために、実際の東大問題のレベルと、東大がどういう能力を要求しているか、そして、どのような訓練をしたらよいのか、の３点に関して講義します。東大入試では、各種の読解問題、英作文問題、リスニング問題と様々な角度から英語力が試されます。ですから、東大入試は英語を身につけるのにうってつけの材料になります。授業をお楽しみに。'
                />
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <CourseCard
                  src='shida'
                  name='志田 晶'
                  title='大学入学共通テスト対策 数学Ⅰ・A(特別編)'
                  info='90分×3コマ'
                  description='この講座は、「共通テスト対策を始めたいけれど何からしたらいいかわからない、この講座をきっかけにしたい！」そんな皆さんに向けた講座です。この講座で、共通テストで出題される問題を体感し、本番に向けた勉強の方向性をつかみ、今すぐ勉強を始めるきっかけを作りましょう。'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='aoki'
                  name='青木 純二'
                  title='数学の真髄-基本原理追求編-文理共通 特別編'
                  info='90分×5コマ'
                  description='問題の解き方をいくら覚えてもあなたは数学的に賢くなることはできません。賢くなるためには「頭を使う訓練をする」必要があるのです。ところが多くの高校生はその訓練の仕方を知りません。この講座ではその方法を三角・指数・対数関数を題材にして伝授します。数学Ⅱ・Bまでの教科書レベルの知識を前提としています。'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='nagaoka'
                  name='長岡 恭史'
                  title='東大・京大・難関大医学部を目指す高校生のための数学ぐんぐん'
                  info='90分×5コマ'
                  description='"基本が大切"とは誰しもが耳にする言葉ではあるが、"基本とは何か"また"基本は決して易しくない"ということを知る者は意外に少ない。「数学Ⅰ・A／Ⅱ・B」における重要項目の"基本"と"常識"に的を絞り、今後の学習指針の構築を目標としたい。素直な心と困難に怯むことのない精神力を持って臨んでもらいたい。'
                />
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <CourseCard
                  src='hayashi'
                  name='林 修'
                  title='難関大合格への現代文'
                  info='90分×5コマ'
                  description='入試現代文は、本文に正面から向き合ってその内容を理解し、それを出題者＝採点者に「自分は理解しましたよ」というメッセージを送る、ということが求められている科目にすぎません。これからみなさんが受験現代文の勉強を始めるにあたってまずこの講座でそのことを実感してもらいます。講義は、「設問そのものの意味」の理解から始めます。入試現代文の全形式をほぼ網羅しているこの講座は、今後の現代文の勉強の指針となるはずです。'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='tomy'
                  name='富井 健二'
                  title='古典文法＆重要単語ポイントチェック'
                  info='90分×5コマ'
                  description='この講座は、今まで古文の勉強をあまりしてこなかった人や、定期テストはそこそこだが、模試だと古文の点数が安定しないという人向けの講座です。どう勉強すればよいのか、どこでミスをしてしまいがちなのか、どうすれば古文を読解し、得点できるようになるのか、読解のために最重要の古典文法と単語を通して解説していきます。この講座で古文を得意にする手ごたえを掴みましょう！'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='terashi'
                  name='寺師 貴憲'
                  title='基礎から学ぶ漢文(特別編)'
                  info='90分×3コマ'
                  description='漢文は何十かの単語と60程度の句形を覚え、漢文に慣れ親しめば確実に高得点がとれます。しかもなんと漢字で書かれている(!)。送り仮名もだいたいふってあり、難しい漢字にルビや注もある。…にもかかわらず、漢文で点数を落としている人のなんと多いことか！この講座はそんな人に漢文を基礎から解説し、得意にするきっかけを作る講座です。さあ、いっしょにスタートしましょう！'
                />
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <CourseCard
                  src='kanaya'
                  name='金谷 俊一郎'
                  title='スタンダード日本史B(特別編)'
                  info='90分×5コマ'
                  description='「教科書を何度読んでも頭の中で知識が整理できない」- そんな悩みを抱えていませんか？この講座では、あなたの頭の中の日本史の知識を整理整頓して確実に定着させる方法を教えます。金谷先生の「表解板書」を書いて見返すことにより、一気に学習スピードを上げて日本史マスターになることができます。さあ、日本史を存分に楽しむ学習法を一緒に始めましょう！'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='kato'
                  name='加藤 和樹'
                  title='サッカーから始まる世界史 大学入試へキックオフ！'
                  info='90分×5コマ'
                  description='サッカーの誕生を皮切りに、歴史上の異文化の衝突・融合について講義します。人・モノのネットワークの歴史です。世界史初心者も得意な人も大歓迎。基礎から始めて、難関大の入試問題が解けるレベルまで知識を高めます。「世界史を勉強する面白さ」のお土産つき！'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='murase'
                  name='村瀬 哲史'
                  title='⼤学⼊学共通テスト対策 地理（問題演習編）⼊⾨編'
                  info='90分×1コマ'
                  description='例題演習と解説を通じて、正誤問題の選択肢の絞り込み方や、統計図表問題のどこに目をつけてどのような順序で解答を導き出すのか、など「問題の解き方(正しく解く手順)」を徹底的に説明します。共通テストの点数が伸び悩んでいるみなさんはぜひ受験して、地理が単なる暗記科目ではないことを実感してください。'
                />
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <CourseCard
                  src='kamata'
                  name='鎌田 真彰'
                  title='ハイレベル化学(入門編)'
                  info='90分×5コマ'
                  description='本講座では、化学基礎の内容と基本事項を確認しながら、難関大学の入試問題を攻略するために今後化学をどのように学習していけばよいか、ということに軸足を置いて授業を行います。化学現象に対して「なぜ？」という視点から難問解決への糸口を見つけていきます。今後の化学の学習法を固めるきっかけとして活用してください。'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='sonoda'
                  name='苑田 尚之'
                  title='ハイレベル物理(入門編)'
                  info='90分×5コマ'
                  description='本講座は、難関大学を目指す受験生を対象とした授業である。高等学校で学習する物理の内容を整理し直し、物理学の美しい体系を解説するため、入門編として重要分野の単元を抜粋している。"普通"の物理とは、ごく基本的な事柄をあたりまえに扱っていくことであり、物理の学力とは何か、物理の考え方とはどういうものかを少しでも感じていただきたい。'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='iida'
                  name='飯田 高明'
                  title='スタンダード生物(入門編)'
                  info='90分×5コマ'
                  description='知識を羅列するだけの生物から脱却し、生物学の本質や各単元をつなげていく学習によって、体系的に受験生物の学力を身につけます。志望校合格のために必要な豊富な知識、考察力、論述力を育てる第一歩を踏み出しましょう！'
                />
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <CourseCard
                  src='yasu'
                  name='安河内 哲也'
                  title='基礎から偏差値アップ総合英語(入門編)'
                  info='90分×5コマ'
                  description='大学入試で避けて通れないのが長文。この講座では、英語に苦手意識を持つ君も、総合的に長文が読めるようになることを目標としています。次がまた読みたくなるような、英語が大好きになること間違いなしの楽しい英文を毎回２つ用意して、成績アップに欠かせない音読の仕方についても詳しく教えます。君を英語大好き人間に変える授業を、さっそく受けてみよう！'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='muto'
                  name='武藤 一也'
                  title='大学入学共通テスト リスニング対策'
                  info='90分×5コマ'
                  description='英語の学習が好きであってもリスニングを苦手としている人はたくさんいます。しかし、英語を使ってコミュニケーションをする上で「英語を正しく聴き取る力」は欠かせない能力です。リスニング力を伸ばすにはおさえるべきポイントがあります。この講座では「イラスト描写の聴き取り」、「対話文の聴き取り」、「モノローグの聴き取り」を通してそのコツを伝授します。大学受験だけでなく、一生役に立つリスニング力を目指して、楽しみながら受験してください。'
                />
              </li>
              <li css={styles.listItem}>
                <CourseCard
                  src='miyazaki'
                  name='宮崎 尊'
                  title='東大への総合英語'
                  info='90分×5コマ'
                  description='これから東大受験の準備を始める人のために、実際の東大問題のレベルと、東大がどういう能力を要求しているか、そして、どのような訓練をしたらよいのか、の３点に関して講義します。東大入試では、各種の読解問題、英作文問題、リスニング問題と様々な角度から英語力が試されます。ですから、東大入試は英語を身につけるのにうってつけの材料になります。授業をお楽しみに。'
                />
              </li>
            </ul>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}

const styles = {
  container: css`
    width: 100vw;
    padding: 0 0 50px;
    @media (min-width: 960px) {
      width: 100%;
    }
  `,
  tabmenu: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
  `,
  list: css`
    @media (min-width: 960px) {
      display: flex;
      justify-content: space-evenly;
    }
  `,
  listItem: css`
    list-style: none;
    padding-bottom: 10px;
    @media (min-width: 960px) {
      width: 30%;
      padding-right: 10px;
    }
  `,
}

export default CourseTabs
