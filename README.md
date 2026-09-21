Input
The store’s inventory dataset containing:
Product names
Price per item
Quantity currently in stock
A product name supplied by the user
A new stock quantity when restocking is required
Process
Search the inventory dataset for the requested product.
Retrieve the product’s price and quantity.
Update the quantity for a selected product when new stock arrives.
Calculate inventory value by multiplying the product price by its quantity in stock.
Handle products that do not exist in the inventory dataset.
Output
Product details for a requested item
The complete updated inventory dataset after restocking
The total inventory value for a requested product
An appropriate message if the product cannot be found
IPO Statements for Individual Functions
Function 1: Item Lookup
Input
The inventory dataset
The name of the product to search for
Process
Search the inventory dataset using the supplied product name.
Check whether the product exists.
If it exists, retrieve its price and quantity.
If it does not exist, indicate that the product could not be found.
Output
The product’s name
The product’s price
The product’s quantity in stock
Or an item-not-found message
Example
For the product mouse, the output would include:

Price: 25.00
Quantity: 15
Function 2: Inventory Restocking
Input
The inventory dataset
The name of the product being restocked
The new quantity to assign to that product
Process
Search for the specified product.
Confirm that the product exists.
Replace its existing quantity with the new quantity.
Keep the product’s price unchanged.
Return the complete inventory dataset with the updated quantity.
Output
The updated inventory dataset
Or an item-not-found message if the product does not exist
Example
For the product keyboard, the original quantity is 0. After updating it to 20, the inventory will contain:

Keyboard price: 45.50
Keyboard quantity: 20
All other products remain unchanged
Function 3: Inventory Valuation
Input
The inventory dataset
The name of the product whose stock value must be calculated
Process
Search for the specified product.
Retrieve its price per item.
Retrieve its quantity in stock.
Multiply the price by the quantity.
Confirm that the product exists before performing the calculation.
Output
The total financial value of the product currently in stock
Or an item-not-found message
Example
For the product monitor:

Price per monitor: 150.00
Quantity in stock: 8
Total inventory value: 1,200.00
Part 2: Implementation Description
Requirement 1: Item Lookup
The lookup feature should accept a product name, such as mouse, and search the inventory dataset. When the product is found, it should return the product’s price and current quantity.

For example, looking up mouse should produce:

Product: Mouse
Price: 25.00
Quantity: 15
If the product name is not present, the system should report that the item does not exist.

Requirement 2: Inventory Restocking
The restocking feature should accept a product name and a new quantity. It should locate the product and update only its quantity.

For example, updating the keyboard quantity to 20 changes the keyboard stock from:

Original quantity: 0
to:

Updated quantity: 20
The function should then return the complete updated inventory dataset while leaving the prices and other product quantities unchanged.

Requirement 3: Inventory Valuation
The valuation feature should accept a product name and calculate the total value of its available stock.

The calculation is:

Total inventory value = price per item × quantity in stock

For the monitor product:

150.00 × 8 = 1,200.00

Therefore, the total value of the monitors currently in stock is 1,200.00.



