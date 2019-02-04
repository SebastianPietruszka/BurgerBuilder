import React, { Component } from 'react';

import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{ textTransfrorm: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;