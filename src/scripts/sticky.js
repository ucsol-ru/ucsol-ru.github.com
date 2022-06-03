document.addEventListener('DOMContentLoaded', () => {
  const name = 'Anton'
  const header = document.querySelector('.header')  
    
  console.log(`My name is ${name}.Now, I am become Death, the destroyer of worlds.`)

  function stickHeader(){
    if (window.pageYOffset >= 1) {
      header.classList.add('header-sticky')
    } else {
      header.classList.remove('header-sticky')
    }
  }
  window.addEventListener('scroll', stickHeader)
})




















