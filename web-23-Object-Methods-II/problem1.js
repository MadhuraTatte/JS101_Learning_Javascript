// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle
let rectangle = {
  
  parameters:function(len, wid) {
     obj = {};
    obj.length = len;
    obj.width = wid;
    
  },

  area:function(){
    let area=obj.length * obj.width;
    console.log(area);
  },

  perimeter: function(){
    let perimeter=2*(obj.length + obj.width);
    console.log(perimeter);
  }
  
}

rectangle.parameters(30,25);
rectangle.area();
rectangle.perimeter();


