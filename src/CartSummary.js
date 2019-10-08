import React from 'react';

class CartSummary extends React.Component {
    render() {
        return (
          <div>
          {
            Object.keys(this.props.selected).map((feature, idx) => {
              const featureHash = feature + '-' + idx;
              const selectedOption = this.props.selected[feature];
              return (
                <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.currency.format(selectedOption.cost)}
                </div>
              </div>
              )
            })
          }
          </div>
       )
    }
}

export default CartSummary;