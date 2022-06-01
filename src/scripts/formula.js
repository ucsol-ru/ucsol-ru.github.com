window.addEventListener('load', () => {  
  const inputHp = document.getElementById('hp-input')
  const inputKwt = document.getElementById('kwt-input')
  const resetButton = document.getElementById('reset-form')


  function resetInput() {
    inputHp.value = ''
    inputHp.placeholder = '0'
    inputKwt.value = ''
    inputKwt.placeholder = '0'
  }

  resetButton.addEventListener('click', (e) => {
    e.preventDefault()
    resetInput()
  })

  inputHp.addEventListener('keyup', () => {
    let result = inputHp.value / 1.36
    inputKwt.value = result.toFixed(2)
  })

  inputKwt.addEventListener('keyup', () => {
    let result = inputKwt.value / 0.74
    inputHp.value = result.toFixed(2)
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault()
      resetInput() 
    }
  })
})