import React from 'react'
import cx from 'classnames'
import { isRequiredForA11y } from 'react-prop-types'
import { capitalize } from 'lodash'

export default class Tooltip extends React.Component {
  static propTypes = {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: isRequiredForA11y(
      React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ])
    ),
    /**
     * The direction the tooltip is positioned towards
     */
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * The `left` position value for the tooltip
     */
    positionLeft: React.PropTypes.number,
    /**
     * The `top` position value for the tooltip
     */
    positionTop: React.PropTypes.number,
    /**
     * The `left` position value for the tooltip arrow
     */
    arrowOffsetLeft: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    /**
     * The `top` position value for the tooltip arrow
     */
    arrowOffsetTop: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    /**
     * The title of the tooltip
     */
    title: React.PropTypes.string,
    /**
     * Should this use the dark version of this component
     */
    inverse: React.PropTypes.bool,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.node
  }
  static defaultProps = {
    placement: 'top'
  }
  render () {
    const {
      placement,
      title,
      inverse,
      positionLeft,
      positionTop,
      arrowOffsetLeft,
      arrowOffsetTop,
      className,
      style,
      children,
      ...props
    } = this.props
    const arrowSize = 6
    let placementInverse = () => {
      switch (placement) {
        case 'top': return 'bottom'
        case 'bottom': return 'top'
        case 'left': return 'right'
        case 'right': return 'left'
        default: return
      }
    }()
    let extraTooltipStyle = () => {
      switch (placement) {
        case 'top': return { marginTop: -arrowSize }
        case 'bottom': return { marginTop: arrowSize }
        case 'left': return { marginLeft: -arrowSize }
        case 'right': return { marginLeft: arrowSize }
      }
    }()
    const tooltipClasses = cx(
      className,
      'ffsans posa z4 fzn1',
      placement
    )
    const tooltipStyle = {
      left: positionLeft,
      top: positionTop,
      maxWidth: '16rem',
      ...extraTooltipStyle,
      ...style
    }
    const tooltipInnerClasses = cx(
      'bdrs1/4 bd p1/4 bxsh3',
      {
        'csec bgcwhite bdcsec10': !inverse,
        'cwhite bgcblack80a bdctrans': inverse
      }
    )
    const tooltipArrowClasses = cx(
      'posa db w0 h0 bdss bdctrans z1'
    )
    const tooltipArrowStyle = {
      [placementInverse]: -arrowSize,
      borderWidth: arrowSize,
      [(placement === 'left' || placement === 'right') ? 'marginTop' : 'marginLeft']: -(arrowSize + 1),
      ['border' + capitalize(placementInverse) + 'Width']: 0,
      ['border' + capitalize(placement) + 'Color']: inverse ? 'transparent' : 'rgb(210,226,231)'
    }
    const tooltipArrowInnerStyle = {
      borderWidth: arrowSize,
      [placementInverse]: inverse ? 0 : 1,
      [(placement === 'left' || placement === 'right') ? 'bottom' : 'marginLeft']: -arrowSize,
      ['border' + capitalize(placementInverse) + 'Width']: 0,
      ['border' + capitalize(placement) + 'Color']: inverse ? 'rgba(0,0,0,.8)' : '#fff'
    }
    const tooltipTitleClasses = cx(
      'ttu fzn2',
      {
        'csec70': !inverse,
        'cwhite70a': inverse
      }
    )
    const tooltipTitle = title ? (<h2 className={tooltipTitleClasses}>{title}</h2>) : undefined

    return (
      <div
        role='tooltip'
        {...props}
        className={tooltipClasses}
        style={tooltipStyle}
      >
        <div
          className={tooltipArrowClasses}
          style={{left: arrowOffsetLeft, top: arrowOffsetTop, ...tooltipArrowStyle}}
        >
          <div className={tooltipArrowClasses} style={tooltipArrowInnerStyle}/>
        </div>

        <div className={tooltipInnerClasses}>
          {tooltipTitle}
          {children}
        </div>
      </div>
    )
  }
}