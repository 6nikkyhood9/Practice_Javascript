let name = prompt("Enter your name");
while (!name || !isNaN(parseFloat(name))) {
    name = prompt("Enter your name");
}
let age = Number(prompt("Enter your age"));
while (isNaN(age)) {
    age = prompt("Enter your age");
}

const welcomeText = `Welcome ${name}`;

const disableText = "You are not allowed to visit this website.";

if (age < 18) {
    alert(disableText);
} else if (age >= 18 && age <= 22) {
    let result = confirm("Are you sure you want to continue?");
    if (result) {
        alert(welcomeText);
    } else {
        alert(disableText);
    }
} else {
    alert(welcomeText);
}

function userInteraction(name, secondName, age){
    name = prompt('Enter your name.');
    while(!name || !isNaN(parseFloat(name))){
        name = prompt('Enter your name');
    }
    age = Number(prompt('Enter your age'));
    while(isNaN(age)){
        age = prompt('Enter your age');
    }
    const = `Welcome ${name}`;
    
    const disableText = 'You are not allowed visit this website.';
    
    if (age < 18) {
        alert(disableText);
    } else if (age >= 18 && age <= 22) {
        let result = confirm("Are you sure you want to continue?");
        if (result) {
            alert(welcomeText);
        } else {
            alert(disableText);
        }
    } else {
        alert(welcomeText);
    }
        
    }
}