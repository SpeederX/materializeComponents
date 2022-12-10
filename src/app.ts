function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = Array(['Hello', 'webpack']).join() + "ss";

    return element;
}

function initLoader(){
    document.body.appendChild(component());
}
function initApp(){

}

document.addEventListener("readystatechange", function(){
    if (this.readyState === "interactive") {
        initLoader();
    } else if (this.readyState === "complete") {
        initApp();
    }
});