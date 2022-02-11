function openModal(modalName) {
  let modal = document.getElementById(modalName)

  if (!modal) return

  modal.style.display = 'Block'
}

function closeModal(modalName) {
  let modal = document.getElementById(modalName)

  if (!modal) return

  modal.style.display = 'none'
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('a[href="#top"]').fadeIn()
    } else {
      $('a[href="#top"]').fadeOut()
    }
  })

  $('a[href="#top"]').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800)
    return false
  })
})
