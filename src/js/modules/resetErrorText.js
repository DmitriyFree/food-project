function resetErrorText() {
  const nameError = document.querySelector('.form-error #name');
  const phoneError = document.querySelector('.form-error #phone');
  nameError.textContent = '';
  phoneError.textContent = '';
}

export default resetErrorText;