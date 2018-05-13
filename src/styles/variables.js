const colors = {
  blue: '#18549B',
  lightBlue: '#448BD3',
  black: '#000',
  white: '#fff',
  red: '#F8170C',
  tan: '#DBC998',
  grey: '#49496A',
  greyLight: '#80939a',
  green: '#88C425',
  lime: '#D2FB78'
}

const shadows = {
  grey: '0 0 2px rgba(3,3,3,.5)'
}

const borders = {
  grey: '1px solid rgba(3,3,3,.1)',
  white: '1px solid rgba(255,255,255, 1)',
  focus: '1px solid rgba(3,3,3,.6)',
  error: `'border-color:' ${colors.red}`
}

const typography = {
  smallFont: '14px',
  mediumFont: '16px',
  largeFont: '18px',
  fontFamily: 'Calibri, Helvetica, Arial, sans-serif'
}

const padding = {
  inputs: '8px',
  checkbox: '6px',
  selects: '8px',
  button: '8px',
  form: '14px',
  table: {
    padding: '14px',
    th: '8px 10px',
    td: '8px 10px'
  }
}

const margin = {
  inputs: '4px',
  checkbox: '6px'
}

export {
  colors,
  typography,
  borders,
  shadows,
  padding,
  margin
}
