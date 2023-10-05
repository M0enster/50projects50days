const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq) => {
  const btn = faq.querySelector('.faq-toggle')
  btn.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
})
