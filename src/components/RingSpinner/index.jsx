import React from 'react'

class RingSpinner extends React.Component {
	render () {
		const backgroundColor = this.props.backgroundColor ?
			this.props.backgroundColor
			: 'rgba(0, 0, 0, 0.9)'
		const duration = this.props.duration ?
			this.props.duration
			: '1s'
		const keySplinesIn = this.props.keySplinesIn ?
			this.props.keySplinesIn
			: '0.6 0 0.2 1'
		const keySplinesOut = this.props.keySplinesOut ?
			this.props.keySplinesOut
			: '0.8 0 0.2 1'
		const opacityAnimationDelay = this.props.opacityAnimationDelay ?
			this.props.opacityAnimationDelay
			: '0.35s'
		const ring1Color = this.props.ring1Color ?
			this.props.ring1Color
			: 'white'
		const ring2Color = this.props.ring2Color ?
			this.props.ring2Color
			: 'white'
		const ringsOpacityMax = this.props.ringsOpacityMax ?
			this.props.ringsOpacityMax
			: 0.9
		const ringsOpacityMin = this.props.ringsOpacityMin ?
			this.props.ringsOpacityMin
			: 0.3
		const ringRadiusMax = this.props.ringRadiusMax ?
			this.props.ringRadiusMax
			: 45
		const ringRadiusMin = this.props.ringRadiusMin ?
			this.props.ringRadiusMin
			: 30
		const ringsStrokeWidth = this.props.ringsStrokeWidth ?
			this.props.ringsStrokeWidth
			: '3px'

		return (
			<div>Test</div>
		)
	}
}

export default RingSpinner
