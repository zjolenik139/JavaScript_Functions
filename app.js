
// Exercise 1 Section
function printOdds(count){
    for ( let i = 1; i <= count; i++){
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}

printOdds(-10);
printOdds(10);


// Exercise 2 Section
function checkAge(name, age){
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${
        16 - age
    } year(s) until you can drive.`;

    if (age < 16){
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);

//exercise 4
function checkQuandrant(x,y){
    if (x > 0 && y > 0){
        return "Quadrant 1";
    } else if ( x < 0 && y > 0){
        return "Quandrant 2";
    } else if (x < 0 && y< 0){
        return "Quadrant 3";
    }  else if (x>0 && y != 0){
        return "Quadrant 4";
    } else if (x == 0 && y != 0){
        return "X axis";
    }else if (x != 0 && y == 0){
        return "Y Axis";
    } else{
        return "Origin";
    }
}

console.log(checkQuandrant( 1, 1));
console.log(checkQuandrant(-1, 1));
console.log(checkQuandrant(-1, -1));
console.log(checkQuandrant(1, -1));
console.log(checkQuandrant(0, -1));
console.log(checkQuandrant(1, 0));
console.log(checkQuandrant(0, 0));


function isValidTriangle{
return a + b > c && a + c > b && b + c > a
}

function checkTriangle( a, b, c){
let isValid = isValidTriangle(a, b, c);
if( isValid){
    if (a == b && b ==c){
        return `Equilateral`;
    } else if ( a == b|| b == c || a == c){
        return `isosceles`;
    } else{
        return `Scalene`;
    }
} else{
    return `Not a valid triangle.`;
}
}

conole.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 1, 2));
console.log(checkTriangle(1, 2, 2));

//exercise 5
function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if(currentAvg > pojectedAvg){
        statusMsg = "EXCEEDING";
    }else if (currentAvg < projectedAvg{
        statusMsg= "UNDER";
    } else {
        statusMsg = "AT";
    }

  console.log(`${day} day(s) used, ${reaminingDays} day(s) remaining
  Average projected use: ${projectedAvg.toFixed(2)} GB/day.),
  continuing this usage, you will end up using ${
    planLimit - (usage + projectedUsage)
  } GB from your data limit.
  To stay below your data plan, use no more than${(
    remainingData / remainingDays
  ).toFixed(2)} GB/day.`);
}


dataUsageFeedback(50, 10, 25);