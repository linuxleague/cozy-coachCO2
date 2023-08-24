import React from 'react'
import { useNavigate } from 'react-router-dom'

import { hasQueryBeenLoaded, isQueryLoading, useQuery } from 'cozy-client'
import { Dialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import Button from 'cozy-ui/transpiled/react/Buttons'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Spinner from 'cozy-ui/transpiled/react/Spinner'

import CertificateGenerationContent from 'src/components/Goals/BikeGoal/Certificate/CertificateGenerationContent'
import { buildLastFileCreatedByCCO2Query } from 'src/queries/queries'

import backgroundImage from 'src/assets/images/background.png'

const CertificateGeneration = () => {
  const navigate = useNavigate()
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()

  const lastFileCreatedByCCO2Query = buildLastFileCreatedByCCO2Query()
  const { data: certificates, ...lastFileCreatedByCCO2QueryLeft } = useQuery(
    lastFileCreatedByCCO2Query.definition,
    lastFileCreatedByCCO2Query.options
  )

  const isLoading =
    isQueryLoading(lastFileCreatedByCCO2QueryLeft) &&
    !hasQueryBeenLoaded(lastFileCreatedByCCO2QueryLeft)

  console.info(' ')
  console.info('isLoading :', isLoading)
  console.info('certificates :', certificates)
  console.info('certificate :', certificates?.[0])
  console.info(' ')

  return (
    <Dialog
      open
      background={`var(--paperBackgroundColor) repeat-x url(${backgroundImage})`}
      content={
        isLoading ? (
          <Spinner
            size="xxlarge"
            className="u-flex u-flex-justify-center u-mt-1"
          />
        ) : (
          <CertificateGenerationContent certificate={certificates[0]} />
        )
      }
      {...(isMobile
        ? { onBack: () => navigate('..') }
        : { onClose: () => navigate('..') })}
      actions={
        <Button
          label={t('bikeGoal.certificateGeneration.actions.understood')}
          onClick={() => navigate('..')}
        />
      }
      actionsLayout="column"
    />
  )
}

export default CertificateGeneration
