import React, { Component } from 'react';
import CustomizationScreen from './CustomizationScreen';
import CartScreen from './CartScreen';

class OptionScreen extends React.Component {
    render(props) {
        // This object will allow us to
        // easily convert numbers into US dollar values
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }); 
        return (
            <main>
                <CustomizationScreen 
                    currency = {USCurrencyFormat}
                    updateFeature = {this.props.onUpdateFeature}
                    features={this.props.features}
                    selected={this.props.selected}
                />
                <CartScreen 
                    currency = {USCurrencyFormat}
                    updateFeature = {this.props.onUpdateFeature}
                    selected={this.props.selected}
                />
            </main>
        )
    }
}

export default OptionScreen;