import { useState } from 'react'

import { GoTopButton } from '@/components/go-top-button/go-top-button'
import { Particle } from '@/components/particle/particle'
import { Contacts } from '@/layout/contacts'
import { Footer } from '@/layout/footer'
import { Main } from '@/layout/main/main'
import { Skills } from '@/layout/skills'
import { Works } from '@/layout/works'
import { darkTheme, lightTheme } from '@/styles'
import { ThemeProvider } from 'styled-components'

import { Header } from './layout'

export const App = () => {
  const [theme, setTheme] = useState('dark')
  const isDarkTheme = theme === 'dark'
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Particle />
      <Header toggleTheme={toggleTheme} />
      <Main />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
      <GoTopButton />
    </ThemeProvider>
  )
}
