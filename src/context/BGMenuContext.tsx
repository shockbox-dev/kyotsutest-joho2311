import React, { useState, useEffect } from 'react'

interface ContextProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}
// make a new context
export const BGMenuContext = React.createContext({} as ContextProps)

// create the provider
export const BGMenuProvider = ({ children }) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  useEffect(() => {
    if (menuOpenState) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpenState])

  return (
    <BGMenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
      }}>
      {children}
    </BGMenuContext.Provider>
  )
}
