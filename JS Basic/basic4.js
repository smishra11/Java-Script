const loaded = (id) => {
  const ele = document.getElementById(id);
  const textNode = ele.childNodes[0];
  let text = textNode.data;
  console.log(textNode);

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 500);
};
