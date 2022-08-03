const DateTime = () => {

    // CSS
    const customStyle = {
        color: 'purple',
        fontSize: '15px',
    }

    const dayColor = {
        color: ""
    }

    const myDate = new Date();
    const hours= myDate.getHours();
    // new Date().getHours()
    let greet;

    // && = operands from left to right
    if (hours < 12){
        greet =  "Morning";
        dayColor.color = 'cornflowerblue'
    } else if (hours >= 12 && hours <= 17) {
        greet = "Afternoon";
        dayColor.color = 'darkcyan'
    }
    else if (hours >= 17 && hours <= 24) {
        greet = "Evening";
        dayColor.color = 'darkblue'
    }

    
    return (
        <div>
            <h3 style={dayColor}>Good {greet}!</h3>
            <p style={customStyle}>We hope you would have a nice day learning this programming language.</p>
        </div>
    );
}

export default DateTime




// Source Code: Time Based Greeting With React - https://dev.to/adrianvalenz/time-based-greeting-with-react-and-bridgetown-4b42


// ReactNative Colors: https://reactnative.dev/docs/colors