/*
    1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
*/ 
// Cevap
let i,j;
let arrayNumbers;
let iter = 0;
function isPrime(...numbers) {

    for(i = 0;i < numbers.length; i++) {
        for(j = 2; j < numbers[i]; j++) {
            if(numbers[i] % j === 0) {
                iter++;
            }
        }

        if(iter === 0) {
            console.log("Sayi Asaldir.");
        }
        else {
            console.log("Sayi Asal Degildir.");
        }
        iter = 0;
    }
    
    
}
isPrime(2,5,8,21,13);


/*
    2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
*/ 
// Cevap

function friendNumbers(number1, number2 = 0 ) {
    let i;
    let diving1 = 1;
    let diving2 = 1;
    for(i = 2; i < number1; i++) {
        if(number1 % i === 0 ) {
            
            diving1 += number1 / i;
        }
    }

    for(i = 2; i < number2; i++) {
        if(number2 % i === 0 ) {
            
            diving2 += number2 / i;
        }
    }

    if(diving1 === number2 & diving2 === number1) {
        console.log(number1 + " ile " + number2 + " arkadaş sayilardir.");
    }
    else {
        console.log(number1 + " ile " + number2 + " arkadaş sayi degildir.");        
    }
}
friendNumbers(17296,18416);

/*
    3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
*/
// Cevap

function perfectNumbers() {
    
    let i;
    let j;
    for( i = 1; i <= 1000; i++ ) {
        let diving = 0;

        for(j = 1; j < i; j++) {
            
            if(i % j === 0) {
                diving += j;
            }
        }

        if(i === diving) {
            console.log(i);
        }
    }
}

perfectNumbers();

/*
    4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/
// Cevap

function findPrimaryNumbers() {
    let i;
    let iter = 0;
    for(i = 2; i <= 1000; i++) {

        for(j = 2; j < i; j++) {

            if(i % j === 0) {
                iter++;
            }
        }
        if(iter === 0 ) {
            console.log(i);
        }
        iter = 0;
    }
}
findPrimaryNumbers();

