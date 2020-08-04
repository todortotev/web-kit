const addParent = (parent?: string) => (node: any) => {
  const parentName = node.menu_name || parent;
  if (node.menus) {
    node.menus.forEach(addParent(parentName));
  }
  if (Array.isArray(node)) {
    node.forEach(addParent(parentName));
  }
  if (parent && node.menu_name !== parentName) {
    node.parent = parentName;
  }
};

const menuToList = (data: any) => {
  const dataCopy = JSON.parse(JSON.stringify(data));
  dataCopy.forEach(addParent());
  return dataCopy;
};

export default menuToList;
