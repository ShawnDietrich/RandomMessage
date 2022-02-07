//Main javascript file will interact with the HTML file
//All objects should be initlized in the obj.js file
//Import all exported classes and objects
import * as objects from './obj.js';
//import {testObject} from './obj.js';
let objClass = new objects.messageObjects();
objClass.print()

console.log(objects.testObject.name)


