import {
  makeBicycleTrip,
  makeWalkingTrip,
  mockFeature,
  mockFeatureCollection,
  mockSerie,
  makeCarTrip,
  modeProps
} from 'test/mockTrip'

import {
  computeAndformatCaloriesTrip,
  getSectionsFromTrip,
  getPurpose,
  getSectionsFormatedFromTrip,
  getModesSortedByDistance,
  computeAndFormatCO2Trip,
  getFeatureMode,
  computeFormatedPercentage,
  computeAndFormatCO2TripByMode
} from 'src/lib/trips'
import { BICYCLING_MODE, CAR_MODE } from 'src/constants'

const mockedFeatures = () => [
  mockFeature('featureId01'),
  mockFeature('featureId02'),
  mockFeature('featureId03'),
  mockFeature('featureId04'),
  mockFeatureCollection('featureCollectionId01', [
    mockFeature('featureId05', modeProps.bicycle)
  ]),
  mockFeatureCollection('featureCollectionId02', [
    mockFeature('featureId06', modeProps.walking)
  ]),
  mockFeatureCollection('featureCollectionId03', [
    mockFeature('featureId07', modeProps.car)
  ])
]

describe('getModesSortedByDistance', () => {
  const mockedSerie = mockSerie('serieId01', mockedFeatures())

  it('should return feature collection modes sorted by distance', () => {
    const result = getModesSortedByDistance(mockedSerie)

    expect(result).toHaveLength(3)
    expect(result).toStrictEqual(['CAR', 'BICYCLING', 'WALKING'])
  })
})

describe('computeAndformatCaloriesTrip', () => {
  it('should return formated value', () => {
    const bCalories = computeAndformatCaloriesTrip(makeBicycleTrip())
    expect(bCalories).toBe('104 kcal')

    const wCalories = computeAndformatCaloriesTrip(makeWalkingTrip())
    expect(wCalories).toBe('23 kcal')
  })
})

describe('computeAndFormatCO2Trip', () => {
  it('should return formated value', () => {
    const bCO2 = computeAndFormatCO2Trip(makeBicycleTrip())
    expect(bCO2).toBe('0 kg')

    const cCO2 = computeAndFormatCO2Trip(makeCarTrip())
    expect(cCO2).toBe('2.84 kg')
  })
})

describe('computeAndFormatCO2TripByMode', () => {
  const mockedSerie = mockSerie('serieId01', mockedFeatures())
  it('should return formatted value by car mode', () => {
    const formattedCO2ByCarMode = computeAndFormatCO2TripByMode(
      mockedSerie,
      CAR_MODE
    )
    expect(formattedCO2ByCarMode).toBe('2.84 kg')
  })

  it('should return formatted value by bicycle mode', () => {
    const formattedCO2ByPlaneMode = computeAndFormatCO2TripByMode(
      mockedSerie,
      BICYCLING_MODE
    )
    expect(formattedCO2ByPlaneMode).toBe('0 kg')
  })
})

describe('getPurpose', () => {
  it('should return purpose value', () => {
    const trips = mockSerie('serieId01', mockedFeatures(), {
      manual_purpose: 'PICK_DROP'
    })
    const purpose = getPurpose(trips)

    expect(purpose).toBe('PICK_DROP')
  })
})

describe('getSectionsFromTrip', () => {
  const trips = mockSerie('serieId01', mockedFeatures())

  it.each`
    trips    | property
    ${trips} | ${'averageSpeed'}
    ${trips} | ${'coordinates'}
    ${trips} | ${'distance'}
    ${trips} | ${'distances'}
    ${trips} | ${'duration'}
    ${trips} | ${'endDate'}
    ${trips} | ${'id'}
    ${trips} | ${'mode'}
    ${trips} | ${'speeds'}
    ${trips} | ${'startDate'}
    ${trips} | ${'timestamps'}
  `(`should section must have $property property`, ({ trips, property }) => {
    const sectionsInfo = getSectionsFromTrip(trips)
    expect(sectionsInfo[0]).toHaveProperty(property)
  })

  it('should return correct sections', () => {
    const sectionsInfo = getSectionsFromTrip(trips)
    expect(sectionsInfo).toMatchSnapshot()
  })
})

describe('getSectionsFormatedFromTrip', () => {
  it('should return formated value', () => {
    const bicyleInfos = getSectionsFormatedFromTrip(makeBicycleTrip(), 'en')
    expect(bicyleInfos[0]).toMatchObject({
      distance: '2 km',
      duration: '10 min',
      averageSpeed: '16 km/h'
    })
  })
})

describe('getFeatureMode', () => {
  it('should return the manual mode if present', () => {
    const result = getFeatureMode({
      properties: {
        manual_mode: 'BIKE',
        sensed_mode: 'PredictedModeTypes.CAR'
      }
    })

    expect(result).toBe('BIKE')
  })

  it('should return the sensed mode if no manual mode', () => {
    const result = getFeatureMode({
      properties: {
        manual_mode: undefined,
        sensed_mode: 'PredictedModeTypes.CAR'
      }
    })

    expect(result).toBe('CAR')
  })

  it('should return the default mode if sensed mode is not supported by the application', () => {
    const result = getFeatureMode({
      properties: {
        manual_mode: undefined,
        sensed_mode: 'PredictedModeTypes.UNSUPPORTED_MODE'
      }
    })

    expect(result).toBe('UNKNOWN')
  })

  it('should return the default mode if sensed mode is not a correct value', () => {
    const result = getFeatureMode({
      properties: {
        manual_mode: undefined,
        sensed_mode: 'UNCORRECT_FORMATED_VALUE'
      }
    })

    expect(result).toBe('UNKNOWN')
  })

  it('should return the default mode for undefined manual and sensed mode', () => {
    const result = getFeatureMode({
      properties: { manual_mode: undefined, sensed_mode: undefined }
    })

    expect(result).toBe('UNKNOWN')
  })
})

describe('computeFormatedPercentage', () => {
  it.each`
    value | total  | result
    ${50} | ${100} | ${'50%'}
    ${50} | ${90}  | ${'55.56%'}
    ${50} | ${80}  | ${'62.50%'}
    ${50} | ${0}   | ${'0%'}
    ${0}  | ${0}   | ${'0%'}
    ${0}  | ${100} | ${'0%'}
  `(
    `should return $result with ($value, $total) params`,
    ({ value, total, result }) => {
      expect(computeFormatedPercentage(value, total)).toBe(result)
    }
  )
})
