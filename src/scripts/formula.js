window.addEventListener('load', () => {  
  const inputHp = document.getElementById('hp-input')
  const inputKwt = document.getElementById('kwt-input')
  const resetButton = document.getElementById('reset-form')

  resetButton.addEventListener('click', (e) => {
    e.preventDefault()
    inputHp.value = 0
    inputKwt.value = 0
  })

  inputHp.addEventListener('keyup', () => {
    let result = inputHp.value / 1.36
    inputKwt.value = result.toFixed(2)
  })

  inputKwt.addEventListener('keyup', () => {
    let result = inputKwt.value / 0.74
    inputHp.value = result.toFixed(2)
  })  
})