import React from 'react';
import CartSummary from './CartSummary'

class CartScreen extends React.Component {
    render(props) {
        console.log('cart screen', this.props.selected)
        const total = Object.keys(this.props.selected).reduce((acc, curr) => acc + this.props.selected[curr].cost,0);

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                < CartSummary
                    currency={this.props.currency}
                    selected={this.props.selected} 
                    />
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                   {this.props.currency.format(total)}
                </div>
                </div>
          </section>
        )
    }
}

export default CartScreen;
