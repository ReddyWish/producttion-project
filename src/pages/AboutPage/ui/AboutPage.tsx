import React from 'react'
import { useTranslation } from 'react-i18next'

function AboutPage (): JSX.Element {
  const { t } = useTranslation('about')
  return (
    <div>{t('About page')}</div>
  )
}

export default AboutPage
