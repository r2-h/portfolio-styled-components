import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import i18n from '@/i18n'
import styled from 'styled-components'

type LangSwitcherProps = {}
export const LangSwitcher: FC<LangSwitcherProps> = ({}) => {
  const { t } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <SwitcherBtn onClick={toggle}>{t('RU')}</SwitcherBtn>
}
const SwitcherBtn = styled.button`
  cursor: pointer;
  z-index: 123;
  position: relative;
  width: 40px;
  height: 40px;
  margin-top: 6px;
  padding: 7px;
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${props => props.theme.colors.textSecondary};
  &:hover {
    background-color: ${props => props.theme.colors.hover.navigation};
  }
`
