import { makeBicycleTrip, makeWalkingTrip, makeCarTrip } from 'test/mockTrip'

import { formatCalories, formatCO2 } from './trips'

describe('formatCalories', () => {
  it('should return formated value', () => {
    const bCalories = formatCalories(makeBicycleTrip())
    expect(bCalories).toBe('75 kcal')

    const wCalories = formatCalories(makeWalkingTrip())
    expect(wCalories).toBe('41 kcal')
  })
})

describe('formatCO2', () => {
  it('should return formated value', () => {
    const bCO2 = formatCO2(makeBicycleTrip())
    expect(bCO2).toBe('0 kg')

    const cCO2 = formatCO2(makeCarTrip())
    expect(cCO2).toBe('3 kg')
  })
})
