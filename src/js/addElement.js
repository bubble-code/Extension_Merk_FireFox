//====================== Function helper for add new element  ==============
export function addElements(obje){
  const element = document.createElement(obje.Tag);
  for (var prop in obje) {
    if (prop === 'childnode') {
      obje.childnode.forEach(function (ele) { element.appendChild(ele) })
    }
    if (prop === "attributes") {
      obje.attributes.forEach(function (attr) { element.setAttribute(attr.key, attr.value) });
    }
    else element[prop] = obje[prop];
  }
  return element;
}

//==============================================================================