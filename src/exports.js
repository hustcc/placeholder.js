!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory(root);
  else
    root.placeholder = factory(root);
}(typeof window !== 'undefined' ? window : this, function () {

  <%=contents%>

  return { 
    getData: placeholder,
    getCanvas: placeholderCanvas,
    render: render
  };
});
