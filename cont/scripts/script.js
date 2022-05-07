$(document).ready(function () {
  $('#examples-carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    touchMove: true,
  })

  let showPopupBtn = $('.show-popup')
  let formPopup = $('#form-popup')
  let form = formPopup.find('form')
  let inputs = form.find('input')
  let phoneInput = $('#phoneInput')

  phoneInput.inputmask('+38(099)-999-99-99')

  showPopupBtn.click(showPopup)
  formPopup.click(hidePopup)
  form.click((event) => {
    event.stopPropagation()
  })


  function showPopup() {
    formPopup.addClass('visible')
    phoneInput.focus()
  }

  function hidePopup() {
    formPopup.removeClass('visible')
    formPopup.one('transitionend', () => {
      inputs.val('')
    })
  }

  let mail = 'lobanovartur@gmail.com, autoideakiev@gmail.com'
  form.submit(function (event) {
    event.preventDefault()
    let to = '&to=' + mail
    let form_data = $(this).serialize() + to
    console.log(form_data)
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: form_data,
      success: function () {
        hidePopup()
      },
    })
  })
})





