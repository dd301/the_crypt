// Get Programming with JavaScript
// Chapter 13
// Map code

(function () {
  
    var buildMap = function () {
      
      var Place = theCrypt.Place;
      
      // Create some places
      var kitchen = new Place(
        "The Kitchen",
        "You are in a kitchen. There is a disturbing smell."
      );
      var library = new Place(
        "The Old Library",
        "You are in a library. Dusty books line the walls."
      );
      var garden = new Place(
        "The Kitchen Garden",
        "You are in a small, walled garden."
      );
      var cupboard = new Place(
        "The Kitchen Cupboard",
        "You are in a cupboard. It's surprisingly roomy."
      );
  
      // Add items and exits to places
      kitchen.addItem("a piece of cheese");
      library.addItem("a rusty key");
      cupboard.addItem("a tin of spam");
  
      kitchen.addExit("south", library);
      kitchen.addExit("west", garden);
      kitchen.addExit("east", cupboard);
  
      library.addExit("north", kitchen);
      garden.addExit("east", kitchen);
      cupboard.addExit("west", kitchen);
      
      return kitchen;
      
    };
    
    if (window.theCrypt === undefined) {
      window.theCrypt = {};
    }
    
    theCrypt.buildMap = buildMap;
    
  })();