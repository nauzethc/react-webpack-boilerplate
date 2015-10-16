import React, { PropTypes } from 'react';
import { ItemList } from './Items.jsx';
import SampleMixin from '../mixins/SampleMixin';
import '../styles/App.css';


const App = React.createClass({

  mixins: [SampleMixin,],

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
        <h1 className="title" onClick={this.onSampleClick}>
          Hello, {this.props.title}!
        </h1>
        <ItemList items={this.props.items} />
      </div>
    );
  },

});

export default App;
