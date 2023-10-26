import { useContext } from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import {
  Box,
  Link as LinkText,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material'
import { Link as Scroll } from 'react-scroll'

import { BGMenuContext } from '../../context/BGMenuContext'
import { isClosed } from '~/constants/environment'

const Menu = () => {
  const IsProd = process.env.NODE_ENV === 'production'

  const ctx = useContext(BGMenuContext)

  const list = [
    {
      label: 'TOPへ',
      url: 'top',
      icon: 'home',
    },
    {
      label: '「情報」について',
      url: 'info',
      icon: 'archive',
    },
    {
      label: '実施要項',
      url: 'details',
      icon: 'info-circle',
    },
    {
      label: '校舎一覧',
      url: 'school',
      icon: 'school',
    },
    // {
    //   label: '受験の流れ',
    //   url: 'flow',
    //   icon: 'stream',
    // },
    {
      label: 'よくある質問',
      url: 'faq',
      icon: 'envelope-open-text',
    },
  ]

  const handleClick = () => {
    ctx.toggleMenu()
  }

  return (
    <Box
      component='nav'
      aria-expanded={ctx.isMenuOpen}
      css={styles.NavContainer}>
      <List component='ul' css={styles.list_container}>
        {list.map(({ label, url, icon }) => {
          return (
            <ListItem css={styles.listWrapper} key={label}>
              <Scroll to={url} smooth={true} aria-label={label}>
                <div css={styles.innerList} onClick={() => ctx.toggleMenu()}>
                  <ListItemIcon>
                    <i className={`fas fa-${icon}`} css={styles.navIcon} />
                  </ListItemIcon>
                  <Typography css={styles.ListText}>{label}</Typography>
                </div>
              </Scroll>
            </ListItem>
          )
        })}
        {isClosed ? null : (
          <ListItem css={styles.listWrapper}>
            <Link
              href={IsProd ? '/lp/kyotsutest-joho2311/form' : '/form'}
              passHref>
              <div css={styles.innerList} onClick={handleClick}>
                <ListItemIcon>
                  <i className='fas fa-paper-plane' css={styles.navIcon} />
                </ListItemIcon>
                <Typography css={styles.ListText}>お申し込み</Typography>
              </div>
            </Link>
          </ListItem>
        )}
      </List>
    </Box>
  )
}

const styles = {
  NavContainer: css`
    position: fixed;
    z-index: 1200;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    height: 100vh;
    width: 100vw;
    padding-bottom: 10vh;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(39, 153, 144, 0.9);
    transition: all 0.6s ease-in-out;
    &[aria-expanded='true'] {
      opacity: 1;
      visibility: visible;
    }
  `,
  list_container: css`
    padding: 0 0 100px;
  `,
  listWrapper: css`
    list-style: none;
  `,
  link: css`
    text-decoration: none;
  `,
  innerList: css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  ListText: css`
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    font-size: 2rem;
    font-weight: bold;
  `,
  navIcon: css`
    color: #ffffff;
    font-size: 2rem;
  `,
}

export default Menu
