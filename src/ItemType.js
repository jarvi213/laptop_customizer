import React from 'react';
import Item from './Item';

class ItemType extends React.Component {
    render() {
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              < Item />
            </fieldset>
          );
    }
}

export default ItemType;