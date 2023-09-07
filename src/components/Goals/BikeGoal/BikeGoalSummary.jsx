import React from 'react'
import { useNavigate } from 'react-router-dom'
import BikeGoalChart from 'src/components/Goals/BikeGoal/BikeGoalChart'
import BikeGoalSummaryItem from 'src/components/Goals/BikeGoal/BikeGoalSummaryItem'
import BikeGoalSummaryYearlyItem from 'src/components/Goals/BikeGoal/BikeGoalSummaryYearlyItem'
import {
  countDaysOrDaysToReach,
  isGoalCompleted,
  getDaccAverageDays
} from 'src/components/Goals/BikeGoal/helpers'
import { useAccountContext } from 'src/components/Providers/AccountProvider'
import { filterTimeseriesByYear } from 'src/lib/timeseries'
import {
  buildBikeCommuteTimeseriesQueryByAccountId,
  buildSettingsQuery
} from 'src/queries/queries'

import { isQueryLoading, useQueryAll, useQuery } from 'cozy-client'
import Divider from 'cozy-ui/transpiled/react/Divider'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Paper from 'cozy-ui/transpiled/react/Paper'
import Spinner from 'cozy-ui/transpiled/react/Spinner'
import Typography from 'cozy-ui/transpiled/react/Typography'

const style = {
  paper: { gap: '1rem' },
  div: { height: 65 }
}

const BikeGoalSummary = () => {
  const { t } = useI18n()
  const navigate = useNavigate()
  const { account, isAccountLoading } = useAccountContext()

  const settingsQuery = buildSettingsQuery()
  const { data: settings, ...settingsQueryLeft } = useQuery(
    settingsQuery.definition,
    settingsQuery.options
  )
  const isSettingsLoading = isQueryLoading(settingsQueryLeft)

  const timeseriesQuery = buildBikeCommuteTimeseriesQueryByAccountId(
    { accountId: account?._id },
    Boolean(account)
  )
  const { data: timeseries, ...timeseriesQueryLeft } = useQueryAll(
    timeseriesQuery.definition,
    timeseriesQuery.options
  )

  const isLoadingTimeseriesQuery =
    isQueryLoading(timeseriesQueryLeft) || timeseriesQueryLeft.hasMore

  const isLoading =
    isAccountLoading || isLoadingTimeseriesQuery || isSettingsLoading

  if (isLoading) {
    return (
      <Paper
        elevation={2}
        className="u-flex u-flex-items-center u-mh-1-s u-mh-2 u-mb-1 u-flex-items-start"
      >
        <Spinner size="xlarge" className="u-m-1" />
      </Paper>
    )
  }

  const currentYear = new Date().getFullYear().toString()
  const timeseriesByYear = filterTimeseriesByYear(timeseries, currentYear)
  const sendToDACC = !!settings?.[0].bikeGoal?.sendToDACC

  return (
    <>
      <Paper
        elevation={2}
        className="u-flex u-flex-items-start-s u-flex-items-center u-mh-1-s u-mh-2 u-mb-1 u-p-1 u-c-pointer"
        style={style.paper}
        onClick={() => navigate(`/bikegoal/${currentYear}/trips`)}
      >
        <div style={style.div}>
          <BikeGoalChart
            timeseries={timeseriesByYear}
            sendToDACC={sendToDACC}
            size="small"
          />
        </div>
        <div>
          <Typography variant="h6">{t('bikeGoal.title')}</Typography>
          {sendToDACC ? (
            <div className="u-flex">
              <BikeGoalSummaryItem
                days={countDaysOrDaysToReach(timeseriesByYear)}
                label={t('bikeGoal.my_progression')}
                isSuccess={isGoalCompleted(timeseriesByYear)}
              />
              <Divider
                className="u-mh-1"
                style={{ marginTop: 4 }}
                orientation="vertical"
                flexItem
              />
              <BikeGoalSummaryItem
                days={getDaccAverageDays()}
                label={t('bikeGoal.average_progression')}
                color="#BA5AE83D"
              />
            </div>
          ) : (
            <BikeGoalSummaryYearlyItem
              timeseriesByYear={timeseriesByYear}
              variant="caption"
              preLine
            />
          )}
        </div>
      </Paper>
    </>
  )
}

export default BikeGoalSummary
