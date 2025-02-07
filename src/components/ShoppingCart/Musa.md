Fixing Number Input Handling (quantity)

By default, React treats input values as strings, which can cause issues when working with numbers. If the user deletes the input, quantity could become an empty string or NaN.

Solution: Use parseInt(e.target.value) || 1 to ensure the value is always a valid number:

<input
  type="number"
  placeholder="Quantity"
  min="1"
  value={quantity}
  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
/>
