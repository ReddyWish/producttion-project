import React from 'react'
import { useTranslation } from 'react-i18next'

function MainPage (): JSX.Element {
  const { t } = useTranslation('main')
  return (
    <div>
      {t('Main page')}
    </div>
  )
}

export default MainPage
