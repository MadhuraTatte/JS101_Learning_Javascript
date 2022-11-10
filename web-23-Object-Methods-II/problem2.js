// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let objects = {
  data: [],

  add: function(names, quant, pric) {
    let obj = {};
    obj.name = names
    obj.quantity = quant;
    obj.price = pric;
    this.data.push(obj);
  },

  total: function() {
    let sum = 0;
    for (i = 0; i <= this.data.length - 1; i++) {
      let Total = this.data[i].quantity * this.data[i].price;
      sum += Total;

    }
    console.log(sum);
  }

}

objects.add("Rice", 2, 60);
objects.add("Dal", 3, 50);
objects.add("Salt", 1, 20);

objects.total();

