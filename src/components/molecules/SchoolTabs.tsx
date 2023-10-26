import { useState } from 'react'
import { css } from '@emotion/react'
import { AppBar, Tab, Tabs } from '@mui/material'
import SwipeableViews from 'react-swipeable-views'

import TabPanel from 'src/components/atoms/TabPanel'
import { Kanagawa } from '~/components/molecules/Kanagawa'
import { Aichi } from '~/components/molecules/Aichi'
import { Saitama } from '~/components/molecules/Saitama'
import { Gifu } from '~/components/molecules/Gifu'

const allyProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const SchoolTabs: React.FC = () => {
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
          <Tab label='神奈川県' {...allyProps(0)} css={styles.tabmenu} />
          <Tab label='愛知県' {...allyProps(1)} css={styles.tabmenu} />
          <Tab label='埼玉県' {...allyProps(2)} css={styles.tabmenu} />
          <Tab label='岐阜県' {...allyProps(3)} css={styles.tabmenu} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <Kanagawa />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Aichi />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Saitama />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Gifu />
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

export default SchoolTabs
