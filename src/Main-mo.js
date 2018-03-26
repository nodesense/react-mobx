//bootstrapping 

//bring react into html

import React from "react";
import {render} from "react-dom";

import productStore from "./app/stores/productStore";
import cartStore from "./app/stores/cartStore";

let stores = {
    product: productStore,
    cart: cartStore
}
import { useStrict } from 'mobx';

useStrict(true);

import {Provider} from "mobx-react";

import {App} from "./app/App";

render(<Provider {...stores}>
         <App />
       </Provider>  ,
       document.getElementById("root"));
       