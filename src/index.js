import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import App from './components/app';

class Content extends Component {
  componentDidMount () {
    this.getItems();
  }

  getItems(){
    fetch('https://api.fitogram.pro/providers/yogashop/events/public?from=2018-09-26T22%3A39%3A22.480Z')
        .then(results => results.json())
        .then(results => console.log(results));
  }
  render (){
    return null ;
  }
}

ReactDOM.render(
  <Content />
  , document.querySelector('.container'));
