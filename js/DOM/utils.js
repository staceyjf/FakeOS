// text default to an empty string
// options object accepts { id: "x" or className: 'y'}

export function createElement({
  elType,
  text = "",
  parent,
  id,
  className,
  dataModalId,
  attributes,
}) {
  let newEl;

  if (elType === "svg" || elType === "rect") {
    newEl = document.createElementNS("http://www.w3.org/2000/svg", elType);
    if (className) newEl.classList.add(className); // SVG elements use classList.add
  } else {
    newEl = document.createElement(elType);
    if (className) newEl.className = className;
  }

  if (text) {
    const textNode = document.createTextNode(text);
    newEl.appendChild(textNode);
  }

  if (id) newEl.id = id;
  if (dataModalId) newEl.setAttribute("data-modal-id", dataModalId);

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      newEl.setAttribute(key, value);
    }
  }

  parent.appendChild(newEl);

  return newEl;
}
