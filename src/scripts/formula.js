document.addEventListener('DOMContentLoaded', () => {  
  const inputHp = document.getElementById('hp-input')
  const inputKwt = document.getElementById('kwt-input')
  const allInputs = document.querySelectorAll('.convert-form__input')
  const resetButton = document.getElementById('reset-form')

  // coefficients
  const cKwt = 1.3596
  const cHp = 0.7355

  // formula
  function calcFunc (aInput, bInput, cf) {
    const result = aInput.value / cf
    bInput.value = result.toFixed(2)    
  }

  // claer inputs func
  function resetFunc () {
    allInputs.forEach((input) => {
      input.value = ''
      input.ariaPlaceholder = '0'
    })
  }

  // remove Null function
  function rmNull(input) {
    if (input.value == 0.00) {
      input.value = ''
    }
  }

  // handlers
  inputKwt.addEventListener('keyup', () => {
    calcFunc(inputKwt, inputHp, cHp)
  })

  inputHp.addEventListener('keyup', () => {
    calcFunc(inputHp, inputKwt, cKwt,)
  })

  // reset handler
  resetButton.addEventListener('click', (e) => {
    e.preventDefault()
    resetFunc()
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault()
      resetFunc() 
    }
  })

  // focus input handlers
  inputKwt.addEventListener('focus', ()=> {
    rmNull(inputKwt)
  })
  
  inputHp.addEventListener('focus', ()=> {
    rmNull(inputHp)
  })
})