import { GoTopButton } from '@/components/go-top-button/go-top-button'
import { Particle } from '@/components/particle/particle'
import { Contacts } from '@/layout/contacts'
import { Footer } from '@/layout/footer'
import { Main } from '@/layout/main/main'
import { Skills } from '@/layout/skills'
import { Works } from '@/layout/works'

import { Header } from './layout'

export const App = () => {
  return (
    <div className={'App'}>
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
      <GoTopButton />
    </div>
  )
}
