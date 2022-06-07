document.addEventListener('DOMContentLoaded', ()=> {
  const accordionBtn = document.querySelector('.modal-formula__accordion-button')
  const form = document.querySelector('.convert-form')

  accordionBtn.addEventListener('click', ()=> {
    accordionBtn.classList.toggle('active')
    form.classList.toggle('visible')
  })

})