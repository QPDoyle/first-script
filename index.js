
const today = new Date();
const hourNow = today.getHours();
let greeeting = "Hello World"

if (hourNow >= 18) {
    greeeting = "Good Evening!";
} else if (hourNow >= 12) {
    greeeting = "Good Afternoon";
} else if (hourNow >= 0) {
    greeeting = "Good Morning";
} else {
    greeeting = "Welcome!";
}

const handleClick = () => {
    alert(greeeting)
}