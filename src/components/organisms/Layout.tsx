import { useRouter } from 'next/router'

import { BGMenuButton } from 'src/components/atoms/BGMenuButton'
import { FixedButton } from 'src/components/atoms/FixedButton'
import Menu from './Menu'
import { PageTop } from 'src/components/atoms/PageTopButton'

type Props = {
  children: React.ReactNode[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      {router.pathname == '/form' || router.pathname == '/thanks' ? null : (
        <header>
          <BGMenuButton />
          <Menu />
          <FixedButton />
        </header>
      )}
      {children}
      <PageTop />
    </>
  )
}

export default Layout
