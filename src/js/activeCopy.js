
import { retButt } from "./creacionBotton.js"

export function activeCopy() {
  const tr = document.querySelectorAll("tbody.ui-datatable-data tr.ui-widget-content")
  const barTitle = document.querySelector('#_Detailbericht_WAR_Filialmanagement_\\:formVerlauf\\:j_idt11>ul:nth-child(1)>li:nth-child(3)')
 if (!!barTitle && barTitle.innerText.includes("Detalles movimiento de caja")) {
    for (let i = 0; i < tr.length; i++) {
      tr[i].cells[2].appendChild(retButt())
    }
  } else {
    for (let i = 0; i < tr.length; i++) {
      tr[i].cells[1].appendChild(retButt())
    }
  }
}