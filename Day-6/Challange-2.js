let userRoll = "bhbh";

switch(userRoll){
    case "admin" :
        console.log("Full Access")
        break
    case "editor" :
        console.log("Editor Access")
        break
    case "viewer" :
        console.log("Read-Only")
        break
    default : console.log("Invalid Roll")
}