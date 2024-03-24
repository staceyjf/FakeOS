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
  children,
}) {
  const newEl = document.createElementNS("http://www.w3.org/2000/svg", elType);

  if (text) {
    const textNode = document.createTextNode(text);
    newEl.appendChild(textNode);
  }

  if (id) newEl.id = id;
  if (className) newEl.className = className;
  if (dataModalId) newEl.setAttribute("data-modal-id", dataModalId);

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      newEl.setAttribute(key, value);
    }
  }

  if (children) {
    for (const child of children) {
      newEl.appendChild(child);
    }
  }

  parent.appendChild(newEl);

  return newEl;
}
