const inventory = {
  laptop: [999.99, 5],
  mouse: [25.00, 15],
  keyboard: [45.50, 0],
  monitor: [150.00, 8]
};

/
  Looks up the details of a product.
 
  Inventory format:
  productName: [unitPrice, quantity]
 /
function lookupItem(inventory, itemName) 
    return `Item "${itemName}" was not found.`;
  }

  const [price, quantity] = inventory[itemName];

  return {
    item: itemName,
    price: price,
    quantity: quantity
  };
}

/
    Updates the quantity of an existing product.

   function restockItem(inventory, itemName, newQuantity) {
  if (!inventory[itemName]) {
    return `Item "${itemName}" was not found.`;
  }

  if (!Number.isInteger(newQuantity) || newQuantity < 0) {
    return "Quantity must be a non-negative whole number.";
  }

  inventory[itemName][1] = newQuantity;

  return inventory;
}


/  Calculates the total value of one product's stock.
 /
function calculateInventoryValue(inventory, itemName) {
  if (!inventory[itemName]) {
    return `Item "${itemName}" was not found.`;
  }  const totalValue = price * quantity;



  const [price, quantity] = inventory[itemName];
  return Number(totalValue.toFixed(2));
}
