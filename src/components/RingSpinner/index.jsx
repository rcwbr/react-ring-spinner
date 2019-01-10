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
			<svg
				version='1.1'
				style={{
					width: '100%',
					height: '100%',
					backgroundColor: backgroundColor
				}}
				viewBox='0 0 100 100'
			>

				<circle
					cx='50'
					cy='50'
					r={ringRadiusMin}
					stroke={ring1Color}
					opacity={ringsOpacityMax}
					ringsStrokeWidth={ringsStrokeWidth}
					fill='none'
				>
					<animate
						attributeName='r'
						from={ringRadiusMin}
						to={ringRadiusMin}
						dur={duration}
						calcMode='spline'
						values={`${ringRadiusMin}; ${ringRadiusMax}; ${ringRadiusMin};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesOut};
												${keySplinesIn}`}
						repeatCount='indefinite'
					/>
					<animate
						attributeType='CSS'
						attributeName='opacity'
						from={ringsOpacityMax}
						to={ringsOpacityMax}
						dur={duration}
						calcMode='spline'
						values={`${ringsOpacityMax}; ${ringsOpacityMin}; ${ringsOpacityMax};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesOut};
												${keySplinesIn}`}
						begin={opacityAnimationDelay}
						repeatCount='indefinite'
					/>
				</circle>
				<circle
					cx='50'
					cy='50'
					r={ringRadiusMax}
					stroke={ring2Color}
					opacity={ringsOpacityMin}
					ringsStrokeWidth={ringsStrokeWidth}
					fill='none'
				>
					<animate
						attributeName='r'
						from={ringRadiusMax}
						to={ringRadiusMax}
						dur={duration}
						calcMode='spline'
						values={`${ringRadiusMax}; ${ringRadiusMin}; ${ringRadiusMax};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesIn};
												${keySplinesOut}`}
						repeatCount='indefinite'
					/>
					<animate
						attributeType='CSS'
						attributeName='opacity'
						from={ringsOpacityMin}
						to={ringsOpacityMin}
						dur={duration}
						calcMode='spline'
						values={`${ringsOpacityMin}; ${ringsOpacityMax}; ${ringsOpacityMin};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesIn};
												${keySplinesOut}`}
						begin={opacityAnimationDelay}
						repeatCount='indefinite'
					/>
				</circle>
			</svg>
		)
	}
}

export default RingSpinner
