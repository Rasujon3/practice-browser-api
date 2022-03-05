/* 
    ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। 
    সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। 
    তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
*/
console.log("hi");
const userNumber = prompt("Enter a number");
console.log(userNumber);
const intNumber = parseInt(userNumber);
const add200 = intNumber + 200;
alert(add200);
