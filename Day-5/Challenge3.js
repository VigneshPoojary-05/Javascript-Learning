let color = "white";

let theme = prompt("Choose your theme color (light, dark, blue, red)")
if(theme==="light"){
    color = "white";
} else if (theme === "dark"){
    color="black"
} else if (theme === "blue"){
    color="darkblue"
} else if (theme === "red"){
    color="red"
} else {
    console.log("Invalid color")
}
console.log(`Your selected theme is ${theme} and color is ${color}`)