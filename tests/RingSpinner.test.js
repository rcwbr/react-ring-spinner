import React from 'react'
import RingSpinner from '../src/components/RingSpinner/index.jsx'
import renderer from 'react-test-renderer'

test('renders with default config', () => {
  const spinner = renderer
    .create(<RingSpinner />)
    .toJSON()
  expect(spinner).toMatchSnapshot()
})

test('renders with explicit default config', () => {
  const spinner = renderer
    .create(<RingSpinner
      backgroundColor={'rgba(0, 0, 0, 0.9)'}
      duration={'1s'}
      keySplinesIn={'0.6 0 0.2 1'}
      keySplinesOut={'0.8 0 0.2 1'}
      opacityAnimationDelay={'0.35s'}
      ring1Color={'white'}
      ring2Color={'white'}
      ringsOpacityMax={0.9}
      ringsOpacityMin={0.3}
      ringsRadiusMax={45}
      ringsRadiusMin={30}
      ringsStrokeWidth={'3px'}
    />)
    .toJSON()
  expect(spinner).toMatchSnapshot()
})

test('default config is unchanged', () => {
  const defaultSpinner = renderer
    .create(<RingSpinner />)
    .toJSON()
  const explicitSpinner = renderer
    .create(<RingSpinner
      backgroundColor={'rgba(0, 0, 0, 0.9)'}
      duration={'1s'}
      keySplinesIn={'0.6 0 0.2 1'}
      keySplinesOut={'0.8 0 0.2 1'}
      opacityAnimationDelay={'0.35s'}
      ring1Color={'white'}
      ring2Color={'white'}
      ringsOpacityMax={0.9}
      ringsOpacityMin={0.3}
      ringsRadiusMax={45}
      ringsRadiusMin={30}
      ringsStrokeWidth={'3px'}
    />)
    .toJSON()
  expect(defaultSpinner).toEqual(explicitSpinner)
})

test('renders with tweaked config values', () => {
  const spinner = renderer
    .create(<RingSpinner
      backgroundColor={'green'}
      duration={'2s'}
      keySplinesIn={'0.4 0.1 0.1 0.9'}
      keySplinesOut={'0.9 0.1 0.3 0.9'}
      opacityAnimationDelay={'0.3s'}
      ring1Color={'red'}
      ring2Color={'rgba(255, 0, 0, 0.9)'}
      ringsOpacityMax={1}
      ringsOpacityMin={0.7}
      ringsRadiusMax={50}
      ringsRadiusMin={40}
      ringsStrokeWidth={'1px'}
    />)
    .toJSON()
  expect(spinner).toMatchSnapshot()
})
