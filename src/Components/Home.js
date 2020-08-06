import React, {Component} from 'react';
import { render } from '@testing-library/react';
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import Cards from '../Components/Cards/Cards';
import RecentActivity from '../Components/Cards/RecentActivity';




export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
                month: '23 July 2020'
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
        <div className = "container-fluid">
            <div className = "row">
                <div id = "sideMenu" className = "col-lg-2 shadow p-3 mb-5 bg-white rounded">
                    <button className ="Newtask"><FontAwesomeIcon icon={faPlus}/>&nbsp;New Task</button>
                    <br />
                    <Link to = "/meetings" ><i className="fa fa-meetup" ></i> Meetings</Link>
                    <br />
                    <br />
                    <Link to = "/Tasks" ><i className = "fa fa-tasks"></i> Tasks</Link>
                    <br />
                    <br />
                    <Link to = "/Teams" ><i className = "fa fa-users"></i> Teams</Link>
                    <br />
                    <br />
                    <Link to = "/Help" ><i className = "fa fa-question-circle"></i> Help</Link>
                    <br />
                    <br />
                    <Link to = "/Settings" ><i className = "fa fa-cog"></i> Settings</Link>
                </div>
                    <div className = "col-lg-10">
                            <div className = "row">
                                <div className = "col-sm-5">
                                    <button className = "upcommingTask shadow  bg-white rounded">Upcomming Tasks</button>
                                    <button className = "completed shadow  bg-white rounded">Completed</button>
                                </div>
                                <div className = "offset-sm-4 col-sm-3">
                                <span id = "search"><i className = "fa fa-search"></i></span>
                                <input className = "search shadow  bg-white rounded" placeholder = "Search ..." type = "search"  /> 
                                </div>
                            </div>

                            <div id = "date" className = "row">
                                <div className = "col-sm-2">
                                    <div className = "row">
                                        <div className = "col-xs-5">
                                        <i class="fa fa-calendar" style = {{fontSize: '34px'}}></i>
                                        </div>
                                        <div id = "taskdate" className = "offset-xs-1 col-xs-6">
                                            <p id = "month" style = {{color: 'red', fontSize: '10px'}}>{this.state.month}</p>
                                            <p id = "todaytask" style = {{fontSize: '14px', fontWeight: '500'}}>Today's Tasks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = "row">
                                <div className = "col-sm-8">
                                    <Cards />
                                </div>
                                <div className = "col-sm-4">
                                    <RecentActivity />
                                </div>
                            </div>
                    </div>
            </div>
        </div>
      );
  }
};