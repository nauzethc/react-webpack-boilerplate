import React, { PropTypes } from 'react';
import '../styles/Items.css';

// Stateless component
export const Item = (props) => {
  return (
    <li>
      <span className="item">{props.name}</span>
    </li>
  );
}

// Stateless component
export const ItemList = (props) => {
  if (props.items.length) {
    return (
      <ul className="item-list">
        { props.items.map((item) => <Item {...item} />) }
      </ul>
    );
  } else {
    return <p className="empty">Empty</p>;
  }
}

export default { Item, ItemList };
