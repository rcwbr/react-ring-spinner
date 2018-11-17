import React from 'react'

class RingSpinner extends React.Component {
	render () {
		const color1 = this.props.color1 ?
			this.props.color1
		 	: 'white'
		const color2 = this.props.color2 ?
			this.props.color2
		 	: 'white'
		const backgroundColor = this.props.backgroundColor ?
			this.props.backgroundColor
			: 'rgba(0, 0, 0, 0.9)'
		const strokeWidth = this.props.strokeWidth ?
		 	this.props.strokeWidth
			: 3
		const opacity1 = this.props.opacity1 ?
		 	this.props.opacity1
			: 0.9
		const opacity2 = this.props.opacity2 ?
		 	this.props.opacity2
			: 0.3
		const duration = this.props.duration ?
		 	this.props.duration
			: '1s'
		const opacityStartAdjust = this.props.opacityStartAdjust ?
		 	this.props.opacityStartAdjust
			: '0.35s'
		const circleRadius1 = this.props.circleRadius1 ?
		 	this.props.circleRadius1
			: 30
		const circleRadius2 = this.props.circleRadius2 ?
		 	this.props.circleRadius2
			: 45
		const keySplinesOut = this.props.keySplinesOut ?
			this.props.keySplinesOut
			: '0.8 0 0.2 1'
		const keySplinesIn = this.props.keySplinesIn ?
			this.props.keySplinesIn
			: '0.6 0 0.2 1'

		const spinnerID = Math.floor(Math.random() * 1000)
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
					r={circleRadius1}
					stroke={color1}
					opacity={opacity1}
					strokeWidth={strokeWidth}
					fill='none'
				>
					<animate
						attributeName='r'
						from={circleRadius1}
						to={circleRadius1}
						dur={duration}
						calcMode='spline'
						values={`${circleRadius1}; ${circleRadius2}; ${circleRadius1};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesOut};
												${keySplinesIn}`}
						repeatCount='indefinite'
					/>
					<animate
						attributeType='CSS'
						attributeName='opacity'
						from={opacity1}
						to={opacity1}
						dur={duration}
						calcMode='spline'
						values={`${opacity1}; ${opacity2}; ${opacity1};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesOut};
												${keySplinesIn}`}
						begin={opacityStartAdjust}
						repeatCount='indefinite'
					/>
				</circle>
				<circle
					cx='50'
					cy='50'
					r={circleRadius2}
					stroke={color2}
					opacity={opacity2}
					strokeWidth={strokeWidth}
					fill='none'
				>
					<animate
						attributeName='r'
						from={circleRadius2}
						to={circleRadius2}
						dur={duration}
						calcMode='spline'
						values={`${circleRadius2}; ${circleRadius1}; ${circleRadius2};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesIn};
												${keySplinesOut}`}
						repeatCount='indefinite'
					/>
					<animate
						attributeType='CSS'
						attributeName='opacity'
						from={opacity2}
						to={opacity2}
						dur={duration}
						calcMode='spline'
						values={`${opacity2}; ${opacity1}; ${opacity2};`}
						keyTimes='0; 0.5; 1'
						keySplines={`${keySplinesIn};
												${keySplinesOut}`}
						begin={opacityStartAdjust}
						repeatCount='indefinite'
					/>
				</circle>
			</svg>
		)
	}
}

export default RingSpinner
