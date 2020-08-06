import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import user from '../../Images/user.png';
import 'font-awesome/css/font-awesome.min.css';
import data from '../../Components/Data/users.json';



export default class Cards extends Component{
  constructor(props){
      super(props);
      this.state = {
             userDetails: data
      }
      console.log(this.state.userDetails);
  }
    

onChange = (e) => {
  this.setState({ [e.target.id]: e.target.value });
}

onSubmit = (e) => {
  e.preventDeafult();
};

render() {

    return(
      <div>
         {this.state.userDetails.map((a, index) => (
            <div key={index} style={{ height: "200px" }}>
      <Card.Group>
      <Card>
        <Card.Content>
          <div className = "container-fluid">
              <div id = "cordMainRow" className = "row shadow bg-white rounded">
                <div className = "col-lg-2">
                  <p id = "assignedTo">Assigned To</p>
                  <img id = "cardImage" src ={user}  alt = "" />
                  <p id = "userName">{a.name}</p>
                  <p id = "designation">{a.position}</p>
                </div>
  
                <div className = "offset-md-1 col-lg-3">
                  <h6 id = "cardTitle">Daily Scrum Meeting</h6>
                  <p id = "dueBy">Due by : <span id = "dueDate">{a.dueBy}</span></p>
                  <br />
                  <p id = "dueBy">Meeting : <span id = "dueDate">{a.meeting}</span></p>
                </div>
  
                <div className = "col-lg-1">
                  <button id = "high" type = "button">High</button>
                </div>
                <div id = "rightColumn" className = "col-lg-4">
                  <button id = "status" type = "button">Active</button>
                  <div id = "CardIcons" className = "row">
                    <div className = "col-sm-2">
                      <span><i className = "fa fa-trash" style = {{fontSize: '18px', color: 'skyblue'}}></i></span>
                    </div>
                    <div className = "col-sm-2">
                      <span><i className = "fa fa-edit" style = {{fontSize: '18px', color: 'skyblue'}}></i></span>
                    </div>
                    <div className = "col-sm-2">
                      <span><i className = "fa fa-bell" style = {{fontSize: '18px', color: 'skyblue'}}></i></span>
                    </div>
                    <div className = "col-sm-6">
                      <button id = "viewDetails" type = "button">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
    </div>
  ))}
  </div>
  );
}
};
