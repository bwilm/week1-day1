let name = "Brandon Wilmott";
let career = "Software Development";

let jobTitle = "Java Developer";
let description = "This is a resume";
let jobDescription ='developing';

let interest1 = 'Movies';
let interest2 = 'Music';
let interest3 = 'Whiskey';

let history1 = 'Sales Position';
let history2 = 'Lead Carpenter';

console.log ('Name: '+name.toUpperCase());

console.log ('Career Field: '+career);

console.log('Description: '+description);

console.log('My Interest:');
console.log(interest1);
console.log(interest2);
console.log(interest3);

console.log('My Previous Experience:');
console.log(history1);
console.log(history2);



function displaySkill(skill, isCool){
    if(isCool){
        console.log('Check it:' + skill);
    }
    else {
        console.log(skill);
    }
}

function displayPosition(companyName, jobTitle, jobDescription){
    console.log(companyName);
    console.log(jobTitle);
    console.log(jobDescription);
    
        
}
    
displaySkill('snowboarding', true);
displaySkill('carpentry', false);
displayPosition('Enron','developer','developing');

