import flag from 'cozy-flags'
import { countDays } from 'src/lib/timeseries'

export const getDaysToReach = () => {
  const daysToReach = flag('coachco2.bikegoal.settings')?.daysToReach
  if (!daysToReach) {
    throw new Error('Flag "coachco2.bikegoal.settings" must be used')
  }
  return daysToReach
}

export const getBountyAmont = () => {
  const bountyAmount = flag('coachco2.bikegoal.settings')?.bountyAmount
  if (!bountyAmount) {
    throw new Error('Flag "coachco2.bikegoal.settings" must be used')
  }
  return bountyAmount
}

export const isGoalCompleted = timeseries => {
  return countDays(timeseries) >= getDaysToReach()
}

export const countDaysOrDaysToReach = timeseries => {
  const days = countDays(timeseries)
  const daysToReach = getDaysToReach()

  return days < daysToReach ? days : daysToReach
}

export const makeGoalAchievementPercentage = timeseries => {
  if (!timeseries) return 100
  const daysOrDaysToReach = countDaysOrDaysToReach(timeseries)
  const daysToReach = getDaysToReach()

  return Math.round((daysOrDaysToReach / daysToReach) * 100)
}

export const makeIconSize = size => {
  switch (size) {
    case 'medium':
      return '3rem'
    case 'small':
      return '2.5rem'
    default:
      return '4.5rem'
  }
}
