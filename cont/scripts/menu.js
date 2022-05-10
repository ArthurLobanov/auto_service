$(document).ready(function () {
  const navBlock = $('header nav')
  const menu = $('header nav ul')
  const menuItem = $('header nav ul li')

  navBlock.click((e) => {
    e.stopPropagation()
    showMenu()
  })

  $(window).click(() => {
    hideMenu()
  })

  menuItem.click((e) => {
    e.stopPropagation()
    hideMenu()
  })

  function showMenu() {
    menu.addClass('active')
  }

  function hideMenu() {
    menu.removeClass('active')
  }
})





