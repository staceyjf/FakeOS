// text default to an empty string
// options object accepts { id: "x" or className: 'y'}

export const createElement = ({ elType, text = "", parent, id, className }) => {
  const newEl = document.createElement(elType);

  if (text) {
    const textNode = document.createTextNode(text);
    newEl.appendChild(textNode);
  }

  if (id) newEl.id = id;
  if (className) newEl.className = className;

  parent.appendChild(newEl);
};
