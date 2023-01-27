 alert("welcome to fictional small business")
const faqQuestions = document.querySelectorAll('.faq-question h3');

faqQuestions.forEach(question => {
  question.addEventListener('click', e => {
    const answer = e.currentTarget.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
  });
});
