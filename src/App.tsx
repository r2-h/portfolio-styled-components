import { Main } from '@/layout/main/main'

import { Header } from './layout'
import { Contacts } from './layout/contacts/contacts'
import { Footer } from './layout/footer/footer'
import { Skills } from './layout/skills/skills'
import { Works } from './layout/works/works'

export const App = () => {
  return (
    <div className={'App'}>
      <Header />
      <Main />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </div>
  )
}
