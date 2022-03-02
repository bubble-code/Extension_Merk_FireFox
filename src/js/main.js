
// import matrix from './matrix.js'
import { functionFilterByDenomination, functionSearch } from './search.js'
import { addElements } from './addElement.js'
import { activeCopy } from './activeCopy.js'
document.head.innerHTML += `
<style>
tbody.ui-datatable-data tr.ui-widget-content:hover{
background:#a5bccb !important;
color: #000 !important;
}
.bg-primary,
.btn-primary {
  background-color: #370665 !important;
}
html,
#senna_surface1-default{
  background-color:#F5F5F5
}

.ui-datalist-header{
  color: #fff !important;
  border-radius: 10px;
  margin: 3px;
}
#_StartLeiste_WAR_Start_\\:form_banner\\:j_idt45{ 
  background-color: black;
  width: 50%;
  margin: 0 auto;
}
#_StartLeiste_WAR_Start_\\:form_banner\\:banner,
#_StartLeiste_WAR_Start_\\:form_banner\\:j_idt45{
  border: none;
}
.keyCopy{
  border: 2px solid black;
  border-radius: 5px;
  margin: .02rem;
  font-size: 0.9rem;
  padding: .02rem .05rem;
  transition: all 0.07s;
  width: 50px;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 5px black;
  cursor:pointer;
}
.clicked{
  transform: scale(1.1);
  border-color:#ff6c00;
  box-shadow: 0 0 10px #ff6c00;
}
#_Kassenjournal_WAR_Filialmanagement_\\:formFilter\\:filterId\\:filterId_ID_content{
  height: 80px;
}
#boxSearch {  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 0.7fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "titleDenomina titlePlaza titleComprobante"
    "denomination plaza comprobante";
    width: 40%;
    height: 80px;
    position: relative;
    left: 500px;
    top: -75px;
    border: 1px solid red;
    background-color: rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  color: white;
}
.titleSearch{
  text-align: center;
  margin: 4px auto 2px auto;
}
#titleDenomination { 
  grid-area: titleDenomina; 
}
#titlePlaza { 
  grid-area: titlePlaza;  
}
#titleComprobante { 
  grid-area: titleComprobante;
 }
 .inputSearch{
  background-position: 10px 10px;
  width: 80%;
  font-size:0.9rem;
  padding: 12px 20px 12px 10px; 
  top: 85px;
  left: 500px;
  border: 1px solid rgba(0,0,0,0.4);
  color: black;
  margin: 0 auto;
  background-color: rgba(253, 253, 253, 0.61);
  font-family: 'Trebuchet MS', sans-serif;
}
#boxSearch>input{
  height: 35px;
  width: 70%;
}
#myInput { 
  grid-area: denomination;  
}
#searchPlaza { 
  grid-area: plaza;  
}

#searchComprobante { 
  grid-area: comprobante;  
 }

</style>
`
localStorage.setItem('butonCopy', false);
var state = { isCheck: false, copyButon: true }
const toggleIsCheck = (s) => {
  s.isCheck = !s.isCheck
}




export function initial() {
  // console.log("cargado")
  const headerTable = document.querySelector('#_Kassenjournal_WAR_Filialmanagement_\\:formFilter\\:filterId\\:filterId_ID_content')
  // #_Kassenjournal_WAR_Filialmanagement_\:formFilter\:filterId\:filterId_ID_content
  // const headerTable = document.querySelector('#_Kassenjournal_WAR_Filialmanagement_\\:formFilter\\:filterId\\:filterId_ID_content')
  // #_Kassenjournal_WAR_Filialmanagement_\:formFilter\:filterId\:filterId_ID_content
  headerTable.appendChild(addElements({
    Tag: 'div',
    id: 'boxSearch',
    childnode: [
      addElements({ Tag: 'input', id: 'myInput', placeholder: 'Search by denomination...', className: 'inputSearch' }),
      addElements({ Tag: 'input', id: 'searchPlaza', placeholder: 'Search by Plaza...', className: "inputSearch" }),
      addElements({ Tag: 'input', id: 'searchComprobante', placeholder: 'Search by Comprobante...', className: 'inputSearch' }),
      // addElements({ Tag: 'span', id: 'titleDenomination', innerText: 'Search by Denomination', className: 'titleSearch' }),
      // addElements({ Tag: 'span', id: 'titlePlaza', innerText: 'Search by Plaza', className: 'titleSearch' }),
      // addElements({ Tag: 'span', id: 'titleComprobante', innerText: 'Search by Comprobante', className: 'titleSearch' })
    ]
  }))
  // functionSearch('#myInput');
  document.querySelector('#myInput').addEventListener('keyup', (e) => { functionSearch('#myInput', 0) })
  document.querySelector('#searchPlaza').addEventListener('keyup', (e) => { functionSearch('#searchPlaza', 3) })
  document.querySelector('#searchComprobante').addEventListener('keyup', (e) => { functionSearch('#searchComprobante', 1) })
  // denominationHeader();
}




browser.runtime.onMessage.addListener(updateBg);

function updateBg(request, sender, sendResponse) {
  // console.log(request.state)
  switch (request.button) {
    case 'Calculadora':
      console.log("Calculadora");
      if (!state.isCheck) {
        console.log(state.isCheck);
        toggleIsCheck(state)
        addCheck()
        // MutationObserver
        observer.observe(target1, observerOptions);
        break;
      }
      else {
        console.log(state.isCheck);
        toggleIsCheck(state)
        // removeCheck();
        observer.disconnect();
        break;
      }
    case 'Cargas Inteligentes':
      console.log('Cargas Activadas');
      console.log(trTable()[0].cells[1].firstChild.innerText.replace('.', '').replace('€', '').trim())
      break;
    case 'Activar Copy':
      let sts = localStorage.getItem('butonCopy');
      if (sts === 'true') {
        alert("Botones ya instalados")
      } else {
        localStorage.setItem('butonCopy', 'true');
        activeCopy();
      }
      break;
    default:
      console.log('nada');
  }
}
// export default initial;