/* 
    ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
*/
const userReaction = confirm("Do you want to see your location?");
console.log(userReaction);
if (userReaction) {
  console.log("yes");
  console.log("তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও", window.location.href);
  document.getElementById("location").innerText = window.location.href;
}
