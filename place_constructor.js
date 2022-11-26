// Get Programming with JavaScript
// Listing 13.20
// The Place constructor as a module

(function () {

    var Place = function (title, description) {
      var newLine = spacer.newLine();
      var items = [];
      var exits = {};
    
      var getItemsInfo = function () {
          var itemsString = "Items: " + newLine;
          items.forEach(function (item) {
              itemsString += "   - " + item;
              itemsString += newLine;
          });
          return itemsString;
      };
    
      var getExitsInfo = function () {
          var exitsString = "Exits from " + title;
          exitsString += ":" + newLine;
          
          Object.keys(exits).forEach(function (key) {
              exitsString += "   - " + key;
              exitsString += newLine;
          });
        
          return exitsString;
      };
  
      var getTitleInfo = function () {
          return spacer.box(title, title.length + 4, "=");
      };
  
      var getInfo = function () {
          var infoString = getTitleInfo();
          infoString += description;
          infoString += newLine + newLine;
          infoString += getItemsInfo() + newLine;
          infoString += getExitsInfo();
          infoString += spacer.line(40, "=") + newLine;
          return infoString;
      };
  
      this.showInfo = function () {
          console.log(getInfo());
      };
  
      this.addItem = function (item) {
          items.push(item);
      };
    
      this.addExit = function (direction, exit) {
          exits[direction] = exit;
      };
  
      this.getExit = function (direction) {
          return exits[direction];
      };
    
      this.getLastItem = function () {
          return items.pop();
      };
    };
    
    if (window.theCrypt === undefined) {
      window.theCrypt = {};
    }
    
    theCrypt.Place = Place;  
    
  })();
  