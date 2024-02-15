export function createDivElementClass(classname, parent) {
  const newElement = document.createElement("div");
  if (classname) newElement.classList.add(classname);
  if (!parent) {
    console.warn(`You created a div element, without setting a parent`);
  } else {
    parent.append(newElement);
  }
  return newElement;
}

export function createDivElementID(idName, parent) {
  const newElement = document.createElement("div");
  if (idName) newElement.id = idName;
  if (!parent) {
    console.warn(`You created a div element, without setting a parent`);
  } else {
    parent.append(newElement);
  }
  return newElement;
}

export function createCustomElementClass(elementType, parent, className) {
  const newElement = document.createElement(elementType);
  if (!parent) {
    console.warn(
      `You created a ${elementType} element, without setting a parent`
    );
  } else {
    parent.append(newElement);
  }
  if (className) newElement.classList.add(className);
  return newElement;
}

export function createCustomElementID(elementType, parent, IDName) {
  const newElement = document.createElement(elementType);
  if (!parent) {
    console.warn(
      `You created a ${elementType} element, without setting a parent`
    );
  } else {
    parent.append(newElement);
  }
  if (IDName) newElement.id = IDName;
  return newElement;
}
