// -----------------------------------------------------------------------------
//======================== Function search======================================
//==============================================================================
const functionSearch = () => {
  let input, filter, table, tr, td, i, txtVal
  input = document.querySelector('#myInput')
  filter = input.value.toUpperCase()
  table = document.querySelector('.ui-datatable-tablewrapper>table:nth-child(1)')
  tr = table.querySelectorAll('tr');
  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName('td')[0];
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
export default functionSearch;
