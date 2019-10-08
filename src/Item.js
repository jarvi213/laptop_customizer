import React from 'react';

class Item extends React.Component {
    render(props) {

                return (
                      <div key={itemHash} className="feature__item">
                        <input
                          type="radio"
                          id={itemHash}
                          className="feature__option"
                          name={slugify(feature)}
                          checked={item.name === this.state.selected[feature].name}
                          onChange={e => this.updateFeature(feature, item)}
                        />
                        <label htmlFor={itemHash} className="feature__label">
                          {item.name} ({props.currencyUSD}.format(item.cost))
                        </label>
                      </div>
                    )
                  }
        }

export default Item;