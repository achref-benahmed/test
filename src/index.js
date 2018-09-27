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

        var start =new Date(item.startDateTime ) ;

        return (

          <div key= {item.id} className="col-md-12 element">

                  <div className= "col-md-4">
                      <img src={item.eventGroup.imageUrl} default className="pic" />
                  </div>


        <div className= "col-md-5">
            <h2> {item.name}</h2>
            <p><i className="material-icons">&#xe0c8;</i> Location : {item.location.name} , {item.location.city} </p>

            <div> Description :
                <span dangerouslySetInnerHTML={{__html: item.descriptions[0].text }} />
            </div>

         </div>


         <div className="col-md-3 cont">

            <p>
                  <i className="material-icons">&#xe855;</i>
                  StartTime : {new Intl.DateTimeFormat('DE', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(start)}

            </p>
            <i className="material-icons">&#xe7fb;</i>
            Booked seats : {item.seatsBooked}/{item.seats}

            <button className="select"> Select Event </button>

          </div>


        </div>


          );
        })}

      </div>
            );
        }
}



ReactDOM.render(
  <Content />
  , document.querySelector('.container'));
