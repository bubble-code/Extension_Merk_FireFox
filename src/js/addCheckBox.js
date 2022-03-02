// Crear checkbox para las cargas iniciales automaticas
export function checkk(id) {
  const ccheck = document.createElement('input')
  ccheck.type = 'checkbox'
  ccheck.value = "vv";
  ccheck.id = id;
  ccheck.onclick = function (e) {
    let ress = e.target.parentNode.previousSibling.innerText;
    e.target.nextSibling.nextSibling.firstChild.focus();
    e.target.nextSibling.nextSibling.firstChild.value = ress;
    // console.log(ress)
  }
  return ccheck;
}
const trTable = () => document.querySelectorAll("tbody.ui-datatable-data tr.ui-widget-content");


const addCheck = async () => {
  const ttr = trTable()
  for (let inn in ttr) {
    // console.log(inn)
    await ttr[inn].cells[5].insertBefore(checkk(inn), ttr[inn].cells[5].firstChild)
  }
}
const removeCheck = () => {
  const ttr = trTable()
  for (let inn in ttr) {
    ttr[inn].cells[5].firstChild.remove()
  }
}