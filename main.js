var startSalary = 2200;

console.log(`El sueldo actual es de: ${startSalary}`);


if (startSalary > 0 && startSalary <= 1000) {
    var upSalary1 = startSalary*.15;
    startSalary += (startSalary*.15);

    console.log(`El aumento es del 15 %: ${upSalary1} y aumenta a: ${startSalary} `)

}   else if (startSalary >= 1001 && startSalary <= 1200) {
    var upSalary2 = startSalary*.12;
    startSalary += (startSalary*.12);

    console.log(`El aumento es del 12 %: ${upSalary2} y aumenta a: ${startSalary} `)

}   else if (startSalary >= 1201 && startSalary <= 1400) {
    var upSalary3 = startSalary*.10;
    startSalary += (startSalary*.10);

    console.log(`El aumento es del 10 %: ${upSalary3} y aumenta a: ${startSalary} `)

}   else if (startSalary >= 1401 && startSalary <= 1500) {
    var upSalary4 = startSalary*0.8;
    startSalary += (startSalary*0.8);

    console.log(`El aumento es del 8 %: ${upSalary4} y aumenta a: ${startSalary} `)

}   else if(startSalary > 1500) {
    var upSalary5 = startSalary*0.5;
    startSalary += (startSalary*0.5);

    console.log(`El aumento es del 5 %: ${upSalary5} y aumenta a: ${startSalary} `)
}


