//bootstrapping 

//bring react into html

import React from "react";
import {render} from "react-dom";

//import {App} from "./app/App";

//app route configuration
import Routes from "./app/Routes";


//import { useStrict } from "mobx";

//enfore action method to adopt Flux architecture
//useStrict(true);


console.log("PRODUCTION ", PRODUCTION);

import cartState from "./app/cart/CartState";
import productState from "./app/product/ProductState";
import authState from "./app/auth/AuthState";

import calculatorState from "./app/components/state/Calculator";
//cartState.loadItems();
 
let store = {
    cart: cartState,
    productState: productState,
    authState: authState,
    calculator: calculatorState
} 


import {Provider} from "mobx-react";

render(<Provider {...store} >
            <Routes />
       </Provider>,
       document.getElementById("root"));
       