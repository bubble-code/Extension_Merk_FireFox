// Observer checkbox
const target1 = document.querySelector("tbody.ui-datatable-data")
// console.log(target1)
// Creo una instancia del observer
const observer = new MutationObserver((listMutations) => {
  listMutations.forEach((muta) => {
    if (muta.addedNodes.length) {
      console.log('Annadoido,', muta.addedNodes[0])
    }
    if (muta.removedNodes.length) {
      console.log('Removido', muta.removedNodes[0])
    }
    console.log(muta.type)
  })
})
// Configuration del observer
const observerOptions = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: false,
  attributeOldValue: false,
  characterDataOldValue: false
};
// Pasar el observer el nodo y la configuracion
// observer.observe(target1, observerOptions);