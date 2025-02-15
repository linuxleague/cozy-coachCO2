import MockDate from 'mockdate'

import {
  buildTimeseriesQueryByDateAndAccountId,
  buildOneYearOldTimeseriesWithAggregationByAccountId,
  builTimeserieQueryByAccountIdAndStartPlaceAndEndPlaceAndStartDateAndDistance,
  buildBikeCommuteTimeseriesQueryByAccountId
} from './queries'

describe('buildTimeseriesQueryByDateAndAccountId', () => {
  it('should return an enabled well formated query', () => {
    const date = new Date('2022-02-01T00:00:00.000Z')

    const query = buildTimeseriesQueryByDateAndAccountId(date, 'accountId')

    expect(query).toMatchObject({
      definition: {
        selector: {
          startDate: {
            $gte: '2022-02-01T00:00:00.000Z',
            $lte: '2022-02-28T23:59:59.999Z'
          }
        }
      },
      options: {
        as: 'io.cozy.timeseries.geojson/sourceAccount/accountId/date/2022-1/limitedBy/1000',
        enabled: true
      }
    })
  })

  it('should return a disabled well formated query if no account id', () => {
    const date = new Date('2022-02-01T00:00:00.000Z')

    const query = buildTimeseriesQueryByDateAndAccountId(date, undefined)

    expect(query).toMatchObject({
      definition: {
        selector: {
          startDate: {
            $gte: '2022-02-01T00:00:00.000Z',
            $lte: '2022-02-28T23:59:59.999Z'
          }
        }
      },
      options: {
        as: 'io.cozy.timeseries.geojson/sourceAccount/undefined/date/2022-1/limitedBy/1000',
        enabled: false
      }
    })
  })

  it('should return a disabled well formated query if no date', () => {
    const query = buildTimeseriesQueryByDateAndAccountId(undefined, 'accountId')

    expect(query).toMatchObject({
      options: {
        as: 'io.cozy.timeseries.geojson/sourceAccount/accountId/date/noDate/limitedBy/1000',
        enabled: false
      }
    })
  })

  it('should return a disabled well formated query if no date and account id', () => {
    const query = buildTimeseriesQueryByDateAndAccountId(undefined, undefined)

    expect(query).toMatchObject({
      options: {
        as: 'io.cozy.timeseries.geojson/sourceAccount/undefined/date/noDate/limitedBy/1000',
        enabled: false
      }
    })
  })
})

describe('buildOneYearOldTimeseriesWithAggregationByAccountId', () => {
  beforeEach(() => {
    MockDate.set('2020-01-01')
  })

  afterEach(() => {
    MockDate.reset()
  })

  it('should return a well formated query', () => {
    const query =
      buildOneYearOldTimeseriesWithAggregationByAccountId('accountId')

    expect(query).toMatchObject({
      definition: {
        selector: {
          startDate: {
            $gte: '2019-01-01T00:00:00.000Z'
          }
        }
      },
      options: {
        as: 'io.cozy.timeseries.geojson/sourceAccount/accountId/withAggregation/fromDate/2019-0'
      }
    })
  })
})

describe('builTimeserieQueryByAccountIdAndStartPlaceAndEndPlaceAndStartDateAndDistance', () => {
  it('should correctly set distance bounds', () => {
    const query =
      builTimeserieQueryByAccountIdAndStartPlaceAndEndPlaceAndStartDateAndDistance(
        {
          distance: 500
        }
      )
    expect(query).toMatchObject({
      definition: {
        selector: {
          'aggregation.totalDistance': {
            $gte: 450,
            $lte: 550
          }
        }
      }
    })
  })
})

describe('buildBikeCommuteTimeseriesQueryByAccountId', () => {
  it('should use a well formated selector', () => {
    const query = buildBikeCommuteTimeseriesQueryByAccountId(
      { accountId: 'accountId' },
      false
    )

    expect(query).toMatchObject({
      definition: {
        selector: {
          'aggregation.modes': {
            $elemMatch: {
              $eq: 'BICYCLING'
            }
          },
          'aggregation.purpose': 'COMMUTE',
          'cozyMetadata.sourceAccount': 'accountId',
          startDate: { $gt: null }
        }
      }
    })
  })
})
