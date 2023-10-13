// Q8. You are creating a countdown app. Implement a program that uses a while loop to count down from 10 to 1 and prints each number.

let countdown = 0;
while(countdown <= 10){
    if(countdown == 0){
        console.log("Counting From 10 to 0")
    }
    console.log(countdown)
    countdown++
}