"use strict";
console.log("When you eliminate the impossible, whatever remains, however improbable, must be the truth.");

/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date.now();
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value.
         For, example, this.manufacturer = "Ford".
 */
function YourFavoriteMake (manufacturer) {
  // Define the manufacturer instance variable
  this.manufacturer = "Chevy";
};
YourFavoriteMake.prototype = new Car();
// Set the prototype to a new Car instance

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function YourFavoriteModel (model, horsepower, engine, mpg) {
    this.model = "Camero zl1";
    this.horsepower = "650hp";
    this.engine = "6.2 liter V8";
    this.mpg = 20;
};
// Set the prototype to appropriate model you created above and set the model name argument
YourFavoriteModel.prototype = new YourFavoriteMake();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = new YourFavoriteModel();
myFirstFavoriteCar.plate_number = "ABC123";
var mySecondFavoriteCar = new YourFavoriteModel();
mySecondFavoriteCar.plate_number = "DEF456";
var myThirdFavoriteCar = new YourFavoriteModel();
myThirdFavoriteCar.plate_number = "GHI789";

console.log("First", myFirstFavoriteCar);
console.log("Second", mySecondFavoriteCar);
console.log("Third", myThirdFavoriteCar);

/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function AnotherModel (model, horsepower, engine, mpg) {
    this.model = "Bolt";
    this.horsepower = "N/A";
    this.engine = "18.4 kWh 300V lithium-ion battery";
    this.mpg = "N/A";
};
AnotherModel.prototype = new YourFavoriteMake();

/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */

 var AnotherFavoriteCar = new AnotherModel();
 AnotherFavoriteCar.plate_number = "JKL321";
 console.log("AnotherFavoriteCar", AnotherFavoriteCar);

/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */
