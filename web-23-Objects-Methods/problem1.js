// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

let details = {
  arr: [],

  add: function(name, phy, chem, bio) {
    let obj = {};
    obj.name = name;
    obj.phy = phy;
    obj.chem = chem;
    obj.bio = bio;
    this.arr.push(obj);
    console.log(this.arr);
  },
  
  low: function() {
    
    let min = Infinity;
    let lowest;
    for (i = 0; i <= this.arr.length - 1; i++) {
      let total = this.arr[i].phy + this.arr[i].chem + this.arr[i].bio;
      if (total < min) {
        min = total;
        lowest = this.arr[i].name;
      }
    }
    console.log(lowest);
  },

  high: function() {
    
    let max = -Infinity;
    let highest;
    for (i = 0; i <= this.arr.length - 1; i++) {
      let total = this.arr[i].phy + this.arr[i].chem + this.arr[i].bio;
      if (total > max) {
        max = total;
        highest = this.arr[i].name;
      }
    }
    console.log(highest);
  }

}




details.add("Rasika", 45, 35, 50);
details.add("Madhura", 35, 72, 40);
details.add("Mrunmayee", 40, 78, 55);

details.low();
details.high();

