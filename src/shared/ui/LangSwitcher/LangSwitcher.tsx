import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import React from 'react'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  return (
    <Button
      className={classNames(cls.LangSwitcher)}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >{t('Language')}</Button>
  )
}
