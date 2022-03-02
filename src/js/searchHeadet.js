// ======================= Header Table for Selection ==========================
// const arrayFilterDefaul = functionFilterByDenomination('.ui-datatable-tablewrapper>table:nth-child(1)',0).forEach(ele => console.log(ele));
// const arrayFilterPlaze = functionFilterByDenomination('.ui-datatable-tablewrapper>table:nth-child(1)', 3).forEach(ele => console.log(ele));
// console.log(arrayFilterPlaze);
const option = (text) => {
  return addElements({ Tag: 'option', attributes: [{ key: 'data-count', value: 2 }, { key: 'value', value: 'Alfa' }], innerText: text })
}
const selectiomDenomination = () => {
  return addElements({ Tag: 'select', name: 'make', childnode: [option("dsdsd")] })
}
const denominationHeader = () => {
  const denomi = document.querySelector('#_Kassenjournal_WAR_Filialmanagement_\\:formBuchungliste\\:buchungen\\:listeBuchungen\\:columnBezeichnung')
  denomi.innerHTML = '';
  denomi.appendChild(addElements({ Tag: 'form', id: 'denominationHeaderCheck', childnode: [selectiomDenomination()] }))
}

//==============================================================================
//==============================================================================