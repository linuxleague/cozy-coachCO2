import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import DropdownMenuButton from 'src/components/SelectDates/DropdownMenuButton'
import {
  computeMonths,
  computeYears,
  makeNewDate,
  isDisableNextPreviousButton
} from 'src/components/SelectDates/helpers'

import Box from 'cozy-ui/transpiled/react/Box'
import Divider from 'cozy-ui/transpiled/react/Divider'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import LeftIcon from 'cozy-ui/transpiled/react/Icons/Left'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'
import Paper from 'cozy-ui/transpiled/react/Paper'
import { makeStyles } from 'cozy-ui/transpiled/react/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'inline-flex',
    width: 264,
    borderRadius: 1000
  },
  leftDropdownButton: {
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    paddingRight: '2.5rem'
  },
  rightDropdownButton: {
    borderTopRightRadius: 1000,
    borderBottomRightRadius: 1000,
    paddingRight: '1.2rem'
  },
  divider: {
    margin: '0.6rem 0'
  },
  iconButton: {
    color: theme.palette.text.icon,
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.background.paper
  }
}))

const SelectDates = ({ className, options, selectedDate, setSelectedDate }) => {
  const classes = useStyles()
  const { lang } = useI18n()

  const { months, monthSelectedIndex, disabledMonthsIndexes } = useMemo(
    () =>
      computeMonths({
        dates: options,
        selectedDate,
        lang
      }),
    [options, selectedDate, lang]
  )

  const { years, yearSelectedIndex, disabledYearsIndexes } = useMemo(
    () => computeYears(options, selectedDate),
    [options, selectedDate]
  )

  const handleDropdownClick = (type, value) => {
    const newDate = makeNewDate({
      oldDate: selectedDate,
      lang,
      value,
      type,
      dates: options
    })

    setSelectedDate(newDate)
  }

  const handleIconButtonClick = n => () => {
    setSelectedDate(date => {
      return new Date(date.setMonth(date.getMonth() + n))
    })
  }

  const isDisabledIconButton = type =>
    isDisableNextPreviousButton({ type, selectedDate, options })

  return (
    <Box display="flex" className={className}>
      <Paper className={classes.paper} elevation={2}>
        <DropdownMenuButton
          data-testid="dropdown-button-year"
          type="year"
          className={classes.leftDropdownButton}
          options={years}
          onclick={handleDropdownClick}
          selectedIndex={yearSelectedIndex}
          disabledIndexes={disabledYearsIndexes}
        />
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <DropdownMenuButton
          data-testid="dropdown-button-month"
          type="month"
          className={classes.rightDropdownButton}
          fullWidth
          spaceBetween
          options={months}
          onclick={handleDropdownClick}
          selectedIndex={monthSelectedIndex}
          disabledIndexes={disabledMonthsIndexes}
        />
      </Paper>
      <Box className="u-ml-half" display="inline-flex">
        <IconButton
          data-testid="previous-button"
          className={classes.iconButton}
          onClick={handleIconButtonClick(-1)}
          disabled={isDisabledIconButton('previous')}
          size="medium"
        >
          <Icon icon={LeftIcon} />
        </IconButton>
        <IconButton
          data-testid="next-button"
          className={cx(classes.iconButton, 'u-ml-half')}
          onClick={handleIconButtonClick(+1)}
          disabled={isDisabledIconButton('next')}
          size="medium"
        >
          <Icon icon={RightIcon} />
        </IconButton>
      </Box>
    </Box>
  )
}

SelectDates.proptypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedDate: PropTypes.number.isRequired,
  setSelectedDate: PropTypes.func.isRequired
}

export default SelectDates
