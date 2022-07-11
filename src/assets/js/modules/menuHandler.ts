// Get DOM elements

const menuBtn = document.querySelector('.nav__hamburger')! as HTMLButtonElement

const menuLinks = document.querySelectorAll(
  '.nav__link'
)! as NodeListOf<HTMLLIElement>

// Define event handlers

const toggleMenu = (): void => {
  menuBtn.classList.toggle('is-active')
  document.body.classList.toggle('show-menu')
}

const hideMenu = (): void => {
  menuBtn.classList.remove('is-active')
  document.body.classList.remove('show-menu')
}

// Implement handlers creator

function handleMenu(): void {
  menuBtn.addEventListener('click', toggleMenu)
  menuLinks.forEach(link => link.addEventListener('click', hideMenu))
}

// Exports

export default handleMenu
