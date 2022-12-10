import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'material-icons/iconfont/material-icons.css';
import initApp from "./initiators/initApp";
import initLoader from "./initiators/initLoader";

class app {
    constructor(){
        // hook listen
        document.addEventListener("readystatechange", this.appBootstrap);
    }
    appBootstrap(this:Document, ev: Event){
        if (this.readyState === "interactive") {
            initLoader();
        } else if (this.readyState === "complete") {
            initApp();
        }
    }
}

// init app instance
new app()


