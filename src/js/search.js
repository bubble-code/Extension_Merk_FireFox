// -----------------------------------------------------------------------------
//======================== Function search======================================
//==============================================================================
export function functionSearch(id,col){
  let input, filter, table, tr, td, i, txtVal
  input = document.querySelector(id)//'#myInput'
  filter = input.value.toUpperCase()
  table = document.querySelector('.ui-datatable-tablewrapper>table:nth-child(1)')
  tr = table.querySelectorAll('tr');
  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName('td')[col];
    if (td) {
      txtVal = td.textContent || td.innerText
      if (txtVal.toUpperCase().includes(filter)) {
        tr[i].style.display = ''
      }
      else {
        tr[i].style.display = 'none'
      }
    }

  }
}
//================= Buscar Filtros Preestablecidos segun denominacion ==========================
export function functionFilterByDenomination(node,column){
  let table, tr, txtVal;
  const mySet = new Set();
  table = document.querySelector(node)
  tr = table.querySelectorAll('tr');
  for (let curr of tr) {
    const temp = curr.getElementsByTagName('td')[column]
    if (temp) {
      txtVal = temp.textContent
      mySet.add(txtVal)
    }
  }
  return mySet;
}
//temp.innerHTML  ||

//==============================================================================