import cloneDeep from 'lodash/cloneDeep'

import { DOCTYPE_GEOJSON } from 'src/constants/const'

export const tripTemplate = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'FeatureCollection',
      features: []
    }
  ]
}

export const modeProps = {
  bicycle: {
    mode: 'BICYCLING',
    distance: 2456,
    duration: 600,
    distances: [0, 201.98652472578271, 201.98549037826737],
    timestamps: [1638890689000, 1638890719000, 1638890749000],
    speeds: [0, 6.73288415752609, 6.732849679275579],
    startDate: '2021-12-07T16:24:49+01:00',
    endDate: '2021-12-07T16:39:16+01:00'
  },
  walking: {
    mode: 'WALKING',
    distance: 563,
    duration: 540,
    distances: [0, 2.3338746642432437, 5.89018714479141],
    timestamps: [1638891571000, 1638891601000, 1638891631000],
    speeds: [0, 0.07779582214144146, 0.196339571493047],
    startDate: '2021-12-07T16:39:31+01:00',
    endDate: '2021-12-07T17:04:07+01:00'
  },
  car: {
    mode: 'CAR',
    distance: 14789,
    duration: 1800,
    distances: [0, 43.094121726730805, 31.5918459191552],
    timestamps: [1638893074000, 1638893104000, 1638893134000],
    speeds: [0, 1.4364707242243602, 1.0530615306385067],
    startDate: '2021-12-07T17:04:34+01:00',
    endDate: '2021-12-07T17:06:26+01:00'
  },
  plane: {
    mode: 'AIR_OR_HSR',
    distance: 504789,
    duration: 1800,
    distances: [0, 3.084870063085477, 376.624960316763],
    timestamps: [1638909778000, 1638909808000, 1638909838000],
    speeds: [0, 0.10282900210284923, 12.5541653438921],
    startDate: '2021-12-07T17:06:26+01:00',
    endDate: '2021-12-07T19:18:05+01:00'
  }
}

export const createTripFromTemplate = (
  tripTemplate,
  { mode, distance, startDate, endDate, duration, speeds }
) => {
  const trip = cloneDeep(tripTemplate)
  trip.features[0].features[0] = {
    properties: {
      sensed_mode: `PredictedModeTypes.${mode}`,
      distance,
      start_fmt_time: startDate,
      end_fmt_time: endDate,
      duration,
      speeds: speeds || [1]
    }
  }
  return trip
}

export const makeBicycleTrip = () =>
  createTripFromTemplate(tripTemplate, modeProps.bicycle)
export const makeBicycleFeature = id => mockFeature(id, modeProps.bicycle)

export const makeWalkingTrip = () =>
  createTripFromTemplate(tripTemplate, modeProps.walking)
export const makeWalkingFeature = id => mockFeature(id, modeProps.walking)

export const makeCarTrip = () =>
  createTripFromTemplate(tripTemplate, modeProps.car)
export const makeCarFeature = id => mockFeature(id, modeProps.car)

export const makePlaneTrip = () => {
  return createTripFromTemplate(tripTemplate, modeProps.plane)
}
export const makePlaneFeature = id => mockFeature(id, modeProps.plane)

export const mockFeature = (id, props) => {
  return {
    id,
    type: 'Feature',
    geometry: {
      coordinates: props
        ? [
            [2.31251, 48.7799432],
            [2.313591181324194, 48.78161416932299],
            [2.314672362648388, 48.783285138645994]
          ]
        : [2.31251, 48.7799432],
      type: props ? 'LineString' : 'Point'
    },
    properties: props
      ? {
          sensed_mode: props.mode ? `PredictedModeTypes.${props.mode}` : '',
          distance: props.distance || '',
          start_fmt_time: props.startDate || '',
          end_fmt_time: props.endDate || '',
          duration: props.duration || '',
          timestamps: props.timestamps || [],
          distances: props.distances || [],
          speeds: props.speeds || [1]
        }
      : {}
  }
}

export const mockFeatureCollection = (id, features) => ({
  id,
  type: 'FeatureCollection',
  properties: {},
  features
})

export const mockSerie = (
  id = 'serieId01',
  features,
  { manual_purpose } = {}
) => ({
  id,
  type: 'FeatureCollection',
  properties: {
    start_place: {
      $oid: 'sectionId01',
      data: { properties: { display_name: 'GR9, Isère' } }
    },
    end_place: {
      $oid: 'sectionId02',
      data: { properties: { display_name: 'Piste de la Combe Noire, Isère' } }
    },
    manual_purpose,
    start_fmt_time: '2021-06-30T14:47:51.081201+02:00',
    end_fmt_time: '2021-06-30T16:37:05.086000+02:00'
  },
  features: features || [
    mockFeature('sectionId01'),
    mockFeature('sectionId02'),
    mockFeatureCollection('sectionId03', [mockFeature('featureId01')])
  ]
})

export const mockTimeserie = (id = 'timeserieId01', series) => {
  return {
    _id: id,
    id,
    _type: DOCTYPE_GEOJSON,
    cozyMetadata: {},
    startDate: '',
    endDate: '',
    source: '',
    series
  }
}
