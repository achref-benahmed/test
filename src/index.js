import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import App from './components/app';

class Content extends Component {

constructor() {
    super();
this.state= {
    'items': []
  }
}

  componentDidMount () {
    this.getItems();
  }

  getItems(){
    fetch('https://api.fitogram.pro/providers/yogashop/events/public?from=2018-09-26T22%3A39%3A22.480Z')
        .then(results => results.json())
        .then(results => this.setState({'items': results}));
  }
  render (){
    return (

      <div> {this.state.items.map(function(item, index){
        return <div key= {item.id} className="col-md-12">
        <div className= "col-md-6">

        </div>
        <div className= "col-md-6">
         <h2> {item.name}</h2>
         <p> location : {item.location.name} , {item.location.city} </p>

         </div>

          </div>
      })}
      </div>
            );
          }
}



ReactDOM.render(
  <Content />
  , document.querySelector('.container'));
