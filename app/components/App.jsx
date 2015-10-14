import React, { PropTypes } from 'react';
import Item from './Item.jsx';
import '../styles/App.css';


const App = React.createClass({

  propTypes: {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
  },

  render() {
    return (
      <div className="app">
        <h1 className="title">Hello, {this.props.title}!</h1>
        { this.renderItems() }
      </div>
    );
  },

  renderItems() {
    if (this.props.items.length) {
      return (
        <ul className="items">
          { this.props.items.map(({ key, name }) => <li key={key}><Item name={name} /></li>) }
        </ul>
      );
    } else {
      return <p className="empty">No items</p>;
    }
  }

});

export default App;
