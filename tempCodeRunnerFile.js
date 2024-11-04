const prompt = require("prompt-sync")({signint:true});

function categorizeAge(age) {
    if (age < 0) {
        console.log("Invalid age. Please enter a positive number.");
    } else {
        if (age < 5) {
            console.log("You are a Toddler.");
        } else {
            if (age <= 12) {
                console.log("You are a Child.");
            } else {
                if (age <= 19) {
                    console.log("You are a Teenager.");
                } else {
                    if (age <= 35) {
                        console.log("You are a Young Adult.");
                    } else {
                        if (age <= 60) {
                            console.log("You are Middle Aged.");
                        } else {
                            console.log("You are a Senior.");
                        }
                    }
                }
            }
        }
    }
}


const userAge = prompt("Please enter your age: ");
categorizeAge(parseInt(userAge));
