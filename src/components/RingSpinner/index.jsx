import React from 'react'
import PropTypes from 'prop-types'

class RingSpinner extends React.Component {
  render () {
    return (
      <svg
        version='1.1'
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: this.props.backgroundColor
        }}
        viewBox='0 0 100 100'
      >

        <circle
          cx='50'
          cy='50'
          r={this.props.ringsRadiusMin}
          stroke={this.props.ring1Color}
          opacity={this.props.ringsOpacityMax}
          strokeWidth={this.props.ringsStrokeWidth}
          fill='none'
        >
          <animate
            attributeName='r'
            from={this.props.ringsRadiusMin}
            to={this.props.ringsRadiusMin}
            dur={this.props.duration}
            calcMode='spline'
            values={`${this.props.ringsRadiusMin}; ${this.props.ringsRadiusMax}; ${this.props.ringsRadiusMin};`}
            keyTimes='0; 0.5; 1'
            keySplines={`${this.props.keySplinesOut};
                        ${this.props.keySplinesIn}`}
            repeatCount='indefinite'
          />
          <animate
            attributeType='CSS'
            attributeName='opacity'
            from={this.props.ringsOpacityMax}
            to={this.props.ringsOpacityMax}
            dur={this.props.duration}
            calcMode='spline'
            values={`${this.props.ringsOpacityMax}; ${this.props.ringsOpacityMin}; ${this.props.ringsOpacityMax};`}
            keyTimes='0; 0.5; 1'
            keySplines={`${this.props.keySplinesOut};
                      ${this.props.keySplinesIn}`}
            begin={this.props.opacityAnimationDelay}
            repeatCount='indefinite'
          />
        </circle>
        <circle
          cx='50'
          cy='50'
          r={this.props.ringsRadiusMax}
          stroke={this.props.ring2Color}
          opacity={this.props.ringsOpacityMin}
          strokeWidth={this.props.ringsStrokeWidth}
          fill='none'
        >
          <animate
            attributeName='r'
            from={this.props.ringsRadiusMax}
            to={this.props.ringsRadiusMax}
            dur={this.props.duration}
            calcMode='spline'
            values={`${this.props.ringsRadiusMax}; ${this.props.ringsRadiusMin}; ${this.props.ringsRadiusMax};`}
            keyTimes='0; 0.5; 1'
            keySplines={`${this.props.keySplinesIn};
                        ${this.props.keySplinesOut}`}
            repeatCount='indefinite'
          />
          <animate
            attributeType='CSS'
            attributeName='opacity'
            from={this.props.ringsOpacityMin}
            to={this.props.ringsOpacityMin}
            dur={this.props.duration}
            calcMode='spline'
            values={`${this.props.ringsOpacityMin}; ${this.props.ringsOpacityMax}; ${this.props.ringsOpacityMin};`}
            keyTimes='0; 0.5; 1'
            keySplines={`${this.props.keySplinesIn};
                        ${this.props.keySplinesOut}`}
            begin={this.props.opacityAnimationDelay}
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    )
  }
}

RingSpinner.propTypes = {
  backgroundColor: PropTypes.string,
  duration: PropTypes.string,
  keySplinesIn: PropTypes.string,
  keySplinesOut: PropTypes.string,
  opacityAnimationDelay: PropTypes.string,
  ring1Color: PropTypes.string,
  ring2Color: PropTypes.string,
  ringsOpacityMax: PropTypes.number,
  ringsOpacityMin: PropTypes.number,
  ringsRadiusMax: PropTypes.number,
  ringsRadiusMin: PropTypes.number,
  ringsStrokeWidth: PropTypes.string
}

RingSpinner.defaultProps = {
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  duration: '1s',
  keySplinesIn: '0.6 0 0.2 1',
  keySplinesOut: '0.8 0 0.2 1',
  opacityAnimationDelay: '0.35s',
  ring1Color: 'white',
  ring2Color: 'white',
  ringsOpacityMax: 0.9,
  ringsOpacityMin: 0.3,
  ringsRadiusMax: 45,
  ringsRadiusMin: 30,
  ringsStrokeWidth: '3px'
}

export default RingSpinner
