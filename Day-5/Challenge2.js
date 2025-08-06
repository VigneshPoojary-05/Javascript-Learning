let hasSubscription = false;
let subscriptionType = "premium";

if(hasSubscription){
    if(subscriptionType === "premium"){
        console.log("Access to all content");
    } else if(subscriptionType === "standard"){
        console.log("Access to limited contet")
    } else {
        console.log("Unknown subscription type")
    }
} else {
    console.log("Please subscribe to access content!")
}