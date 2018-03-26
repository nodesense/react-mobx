import React from "react";

import {observer} from "mobx-react";

@observer
export default class CartItem extends React.Component {
    
    render() {
           
            let {item} = this.props;
            let props = this.props;

            console.log("at cart ", item);

            //es5 let item = props.item

            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                         <input name="quantity" 
                            ref={ elem => this.input=elem }
                            />
                          

                          Qty: {item.quantity}

                          </td>
                          
                    <td> 
                        <button onClick={ ()=> props.onUpdate(this.input.value)} > 
                            Update
                        </button>

                    </td>

                    <td> 
                        <button onClick={props.onRemove} > 
                            Delete
                        </button>
                    </td>

                </tr>
            )
    }
}