// Get Programming with JavaScript
// Listing 13.19
// The Player constructor as a module

(function () {  
  
    var Player = function (name, health) {
      var newLine = spacer.newLine();
      var items = [];
      var place = null;
  
      var getNameInfo = function () {
          return name;
      };
  
      var getHealthInfo = function () {
          return "(" + health + ")";
      };
  
      var getItemsInfo = function () {
          var itemsString = "Items:" + newLine;
         
          items.forEach(function (item, i) {
              itemsString += "   - " + item + newLine;
          });
  
          return itemsString;
      };
    
      var getTitleInfo = function () {
          return getNameInfo() + " " + getHealthInfo();
      };
  
      var getInfo = function () {
          var info = spacer.box(getTitleInfo(), 40, "*");
          info += "  " + getItemsInfo();
          info += spacer.line(40, "*");
          info += newLine;
  
          return info;
      }; 
  
      this.addItem = function (item) {
          items.push(item);
      };
    
      this.setPlace = function (destination) {
          place = destination;
      };
      
      this.getPlace = function () {
          return place;
      };
  
      this.showInfo = function (character) {
          console.log(getInfo(character));
      };
    };
    
    if (window.theCrypt === undefined) {
      window.theCrypt = {};
    }
    
    theCrypt.Player = Player;
    
  })();
  
