import React, { PropTypes } from 'react'
import Button from '../Button'
import { mergeClasses } from '../../utils/styleUtils'

const classes = {
  base: {
    bdrs: 'Bdrs(r2)',
    bxsh: 'Bxsh(sh1)',
    c: 'C(#fff)',
    fw: 'Fw(600)',
    p: 'Px(e3q) Py(eq)',
    trs: 'Trs(aeo)',
    hover: {
      bxsh: 'Bxsh(sh2):h',
      op: 'Op(.85):h'
    },
    focus: {
      bxsh: 'Bxsh(sh2):f',
      op: 'Op(.85):f'
    },
    active: {
      bxsh: 'Bxsh(sh1):a',
      op: 'Op(1):a'
    },
    disabled: {
      bxsh: 'Bxsh(n):di'
    }
  },
  default: {
    c: 'C(pri)',
    bxsh: 'Bxsh(ishbd2)',
    hover: {
      bgc: 'Bgc(pri):h',
      c: 'C(#fff):h'
    },
    focus: {
      bgc: 'Bgc(pri):f',
      c: 'C(#fff):f'
    },
    active: {
      bgc: 'Bgc(pri):a',
      c: 'C(#fff):a'
    },
    disabled: {
      bxsh: 'Bxsh(ishbd2):di'
    }
  },
  primary: {
    bgc: 'Bgc(pri)'
  },
  success: {
    bgc: 'Bgc(success)'
  },
  unsure: {
    bgc: 'Bgc(unsure)',
    c: 'C(#000.6)'
  },
  warning: {
    bgc: 'Bgc(warning)'
  },
  danger: {
    bgc: 'Bgc(danger)'
  },
  muted: {
    bd: 'Bd(bd1) bdc(#000.01)',
    bgc: 'Bgc(muted)',
    c: 'C(pri)'
  },
  'n1': {
    fz: 'Fz(msn1)'
  },
  '0': {
    fz: 'Fz(ms0)'
  },
  '1': {
    fz: 'Fz(ms1)'
  },
  '2': {
    fz: 'Fz(ms2)'
  }
}

// '-1': 'fzn1 ph1/2 h1',
// '0': 'fz0 h1&1/2 ph3/4',
// '1': 'fz1 h2 ph3/4',
// '2': 'fz2 h2&1/2 ph1'

const ButtonRound = ({
  children,
  disabled,
  theme,
  type = 'default',
  size = '0',
  ...props
}) => {
  const themed = mergeClasses(classes, theme)
  const stateTheme = {
    base: mergeClasses(
      themed.base,
      themed[type],
      themed[size]
    )
  }
  return (
    <Button
      disabled={disabled}
      theme={stateTheme}
      {...props}
    >
      {children}
    </Button>
  )
}

ButtonRound.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  theme: PropTypes.object
}

export default ButtonRound
