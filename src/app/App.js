
import React, {Component} from "react"; //from node_modules

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";

import PropTypes from "prop-types";

export class App extends Component {

    constructor() {
        super();

        this.show = true;
    }

    getChildContext() {
        console.log("get context called");

        return {
            appTitle: "React App",
            theme: "white"
        }
    }


    // componentDidMount() {
    //     setTimeout( ()=> {
    //         console.log("app comp mounted");
    //         this.show = !this.show;
    //         //calls render internally
    //         this.forceUpdate();
    //     }, 3000);
    // }

    //returns a view
    // <h1 id="header">React App</h1>
    render() {

        return (
            <div>
                
                {this.show && <Header title="React App"  />}

                {/*  view container
                
                    children passed from route
                 */}

                <div>
                    {this.props.children}
                </div>

                <Footer year={2017}  />
            </div>
        )
       // return React.createElement("h1", {id: "header"},
       //                              "React App 2");
    }
}


App.childContextTypes = {
    appTitle: PropTypes.string,
    theme: PropTypes.string
}

