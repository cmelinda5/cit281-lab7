/*
    CIT 281 Lab 7
    Name: Melinda Chan
*/

class CustomError extends Error {
    constructor (message) {
        super(message);
        this.name = "CustomError";
    }
 }
 
 function throwGenericError() {
     throw new Error("Generic error");
 }
 
 function throwCustomError() {
     throw new CustomError("Custom error");
 }
 
 try {
     console.log("Force generic error");
     console.log("Generic error try block");
     throw throwGenericError();
 
 } catch(err) {
     console.log("Generic error catch block");
     console.log(`${err.name}: ${err.message}`);
 } finally {
     console.log("Generic error finally block");
 }
 
 try {
     console.log("Force custom error");
     console.log("Custom error try block");
     throw throwCustomError();
 
 } catch(err) {
     console.log("Custom error catch block");
     console.log(`${err.name}: ${err.message}`);
 } finally {
     console.log("Custom error finally block");
 }
