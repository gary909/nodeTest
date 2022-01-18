//jshint esversion:6

var superheroes = require("superheroes");
var supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
var mySuperVillianName = supervillains.random();

console.log(mySuperheroName + " Vs " + mySuperVillianName);