import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import user from '../../Images/user.png';
import 'font-awesome/css/font-awesome.min.css';



export default class RecentActivity extends Component{
  constructor(props){
      super(props);
      this.state = {
              dueDate: '23 July 2020',
              time: '11:55 am'
      }
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
    <Card.Group>
      <Card>
        <Card.Content>
          <div className = "container-fluid">
              <div id = "cordMainRow" className = "row shadow bg-white rounded">
                <div className = "col-lg-12">
                    <h6 id = "recentActivity">Recent Activity</h6>
                    <hr />
                    <ul id = "activityList">
                        <li><i style = {{color: 'skyblue'}} className = "fa fa-circle-o"></i> &emsp; Standup Meeting Completed <p id = "activityTime">{this.state.time}</p></li>

                        <li><i style = {{color: 'skyblue'}} className = "fa fa-circle-o"></i> &emsp; New Task Created <p id = "activityTime">{this.state.time}</p></li>

                        <li><i style = {{color: 'skyblue'}} className = "fa fa-circle-o"></i> &emsp; India Commented on the assigned tasks <p id = "activityTime">{this.state.time}</p></li>

                        <li><i style = {{color: 'skyblue'}} className = "fa fa-circle-o"></i> &emsp; Assign work to teams <p id = "activityTime">{this.state.time}</p></li>
                    </ul>
                </div>
              </div>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
      </div>
    );
}
};
