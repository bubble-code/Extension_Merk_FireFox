
// Crear boton para copiar los datos de efectivo total de salon
export function retButt() {
  const button = document.createElement('div')
  // button.type = 'button';
  button.classList.add('keyCopy');
  button.innerText = 'C';
  button.addEventListener('click', function (e) {
    let result = Math.abs(Number.parseFloat(e.target.previousSibling.innerText.replace('.', '').replace('€', '').replace(',','.').trim())).toString().replace('.',',');
    navigator.clipboard.writeText(result)
    this.classList.add("clicked")
  })
  return button;
}