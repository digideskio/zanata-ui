// Calculate Rhythm
function r (value, unit) {
  unit = unit || 'rem'
  return value * 1.5 + unit
}

// Calculate Modular Scale
function calcScale (value, base, ratio, unit) {
  return +(Math.pow(ratio, value) * base).toFixed(3) + unit
}

function ms (value, unit) {
  unit = unit || 'rem'
  return calcScale(value, 1, 1.2, unit)
}

// This will get flattend without parent keys.
// So don't use the same name in separate nested objects
/* eslint-disable max-len */
module.exports = {
  colors: {
    pri: '#19a5da',
    sec: 'hsl(256, 76%, 65%)',
    success: 'hsl(157, 70%, 46%)',
    unsure: 'hsl(60, 85%, 50%)',
    warning: 'hsl(27, 97%, 63%)',
    danger: 'hsl(353, 80%, 59%)',
    dark: 'hsl(212, 18%, 40%)',
    muted: 'hsl(204, 18%, 69%)',
    neutral: 'hsl(195, 32%, 80%)',
    light: 'hsl(213, 44%, 95%)'
  },
  gradients: {
    grdshine: 'linear-gradient(rgba(255,255,255,.4), transparent)'
  },
  borders: {
    bd1: 'solid 1px',
    bd2: 'solid 2px'
  },
  rhythm: {
    re: r(0.125),
    rq: r(0.25),
    rh: r(0.5),
    r3q: r(0.75),
    r1: r(1),
    r1q: r(1.25),
    r1h: r(1.5),
    r2: r(2),
    r4: r(4),
    r8: r(8),
    r16: r(16),
    r32: r(32)
  },
  rhythmem: {
    ee: r(0.125, 'em'),
    eq: r(0.25, 'em'),
    eh: r(0.5, 'em'),
    e3q: r(0.75, 'em'),
    e1: r(1, 'em'),
    e1q: r(1.25, 'em'),
    e1h: r(1.5, 'em'),
    e2: r(2, 'em'),
    e4: r(4, 'em'),
    e8: r(8, 'em'),
    e16: r(16, 'em'),
    e32: r(32, 'em')
  },
  ms: {
    msn2: ms(-2),
    msn1: ms(-1),
    ms0: ms(0),
    ms1: ms(1),
    ms2: ms(2),
    ms3: ms(3),
    ms4: ms(4),
    ms5: ms(5),
    ms6: ms(6),
    ms7: ms(7),
    ms8: ms(8),
    ms9: ms(9),
    ms10: ms(10),
    ms11: ms(11),
    ms12: ms(12)
  },
  borderRadius: {
    rnd: '500px'
  },
  shadows: {
    sh1: '0 1px 4px 0 rgba(0, 0, 0, 0.185)',
    sh2: '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.15)',
    sh3: '0 11px 7px 0 rgba(0, 0, 0, 0.09), 0 13px 25px 0 rgba(0, 0, 0, 0.15)',
    sh4: '0 14px 12px 0 rgba(0, 0, 0, 0.085), 0 20px 40px 0 rgba(0, 0, 0, 0.15)',
    sh5: '0 17px 17px 0 rgba(0, 0, 0, 0.075), 0 27px 55px 0 rgba(0, 0, 0, 0.15)',
    shw: '0 0 15px 5px #fff',
    ish1: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.185)',
    ishbd2: 'inset 0 0 0 2px currentColor'
  },
  flexbox: {
    flx1: '1',
    if: 'inline-flex'
  },
  transitions: {
    eo: 'transform .3s cubic-bezier(0.19, 1, 0.22, 1), opacity .3s cubic-bezier(0.19, 1, 0.22, 1)', // Ease out
    eib: 'transform .3s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)',  // Ease in back
    eob: 'transform .3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity .3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',  // Ease out back
    aeo: 'all .3s cubic-bezier(0.19, 1, 0.22, 1)',
    aeib: 'all .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    aeob: 'all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  animation: {
    anibd: 'bouncedelay'
  },
  defaults: {
    i: 'inherit'
  }
}

/* eslint-enable max-len */
