import React, { Component } from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import Cards from "../Components/Cards/Cards";
import RecentActivity from "../Components/Cards/RecentActivity";
import data from "../Components/Data/users.json";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: data
    };
  }

  render() {
    const handleSearchChange = e => {
      const searchInput = e.target.value;
      const allUsers = this.state.userDetails;

      const filteredUsers = allUsers.filter(user => {
        return user.name.toLowerCase().includes(searchInput.toLowerCase()) || user.position.toLowerCase().includes(searchInput.toLowerCase());
      });

      searchInput
        ? this.setState({ userDetails: filteredUsers })
        : this.setState({ userDetails: data });
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div
            id="sideMenu"
            className="col-lg-2 shadow p-3 mb-5 bg-white rounded"
          >
            <button className="Newtask">
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;New Task
            </button>
            <br />
            <Link to="/meetings">
              <i className="fa fa-meetup"></i> Meetings
            </Link>
            <br />
            <br />
            <Link to="/Tasks">
              <i className="fa fa-tasks"></i> Tasks
            </Link>
            <br />
            <br />
            <Link to="/Teams">
              <i className="fa fa-users"></i> Teams
            </Link>
            <br />
            <br />
            <Link to="/Help">
              <i className="fa fa-question-circle"></i> Help
            </Link>
            <br />
            <br />
            <Link to="/Settings">
              <i className="fa fa-cog"></i> Settings
            </Link>
          </div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-sm-5">
                <button className="upcommingTask shadow  bg-white rounded">
                  Upcoming Tasks
                </button>
                <button className="completed shadow  bg-white rounded">
                  Completed
                </button>
              </div>
              <div className="offset-sm-4 col-sm-3">
                <span id="search">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  className="search shadow  bg-white rounded"
                  placeholder="Search ..."
                  type="search"
                  onChange={e => handleSearchChange(e)}
                />
              </div>
            </div>

            <div id="date" className="row">
              <div className="col-sm-2">
                <div className="row">
                  <div className="col-xs-5">
                    <i class="fa fa-calendar" style={{ fontSize: "34px" }}></i>
                  </div>
                  <div id="taskdate" className="offset-xs-1 col-xs-6">
                    <p id="month" style={{ color: "red", fontSize: "10px" }}>
                      {this.state.month}
                    </p>
                    <p
                      id="todaytask"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Today's Tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-8">
                {this.state.userDetails.map((a, index) => (
                  <Cards a={a} index={index} />
                ))}
              </div>
              <div className="col-sm-4">
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
