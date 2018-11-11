const createDiv = (className, context) => {
    const divName = document.createElement("div");
    divName.classList.add(className);
    context.appendChild(divName)
    return divName; 
}

const createButton = (buttonName, className, context) => {
    const button = document.createElement("input");
    button.type = "button";
    button.value = buttonName;
    button.classList.add(className);
    context.appendChild(button);
    return button;
}

const startAnimation = (func) => {
    rotate = setInterval(func, 25);
}

const stopAnimation = () => {
    clearInterval(rotate);
}
 
window.onload = () => {
    const space = createDiv("space", document.body)
    const circlesSpace = createDiv("circlesSpace", space);
    const largeCircle = createDiv("largeCircle", circlesSpace);
    const smallCircle = createDiv("smallCircle", circlesSpace);
    const buttonsSpace = createDiv("buttonsSpace", space)
    const startButton = createButton( "Start", "Start", buttonsSpace);
    const stopButton = createButton( "Stop", "Stop", buttonsSpace);


    const rotateObj = {
        obj: smallCircle,
        radian: 0,         
        radius: 100,      
        increaseRadian: 0.05,     
        x: 0,
        y: 0,
        center: { x: (100 - 15), y: (100 - 15) }
    }

    const move = () => { 
        rotateObj.radian += rotateObj.increaseRadian
        rotateObj.x = rotateObj.center.x + (rotateObj.radius * Math.sin(rotateObj.radian));
        rotateObj.y = rotateObj.center.y + (rotateObj.radius * Math.cos(rotateObj.radian));
        rotateObj.obj.style.top = rotateObj.y + "px";
        rotateObj.obj.style.left = rotateObj.x + "px";
    }
    
    startButton.addEventListener("click", () => startAnimation(move));
    stopButton.addEventListener("click", stopAnimation);
};
