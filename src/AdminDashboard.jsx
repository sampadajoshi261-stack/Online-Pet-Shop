import React from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="profile-img"
          />
          <h4>ROY</h4>
          <p>Admin</p>
        </div>

        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Registration</li>
          <li>Pets</li>
          <li>Orders</li>
          <li>Event</li>
          <li>Subscribers</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="top-navbar">
          <div className="icons">
            <span>🔍</span>
            <span>☰</span>
          </div>
        </div>

        {/* Activity Section */}
        <div className="activity-card">
          <div>
            <h2>Activity Tracker</h2>
            <p>
              Professionally trained and certified dog
              <br />
              and cat stylists are in our service!
            </p>
          </div>

          <img
            src="https://www.shutterstock.com/image-vector/pet-care-logo-design-vector-260nw-2484974689.jpg"
            alt="Dog"
            className="dog-img"
          />
        </div>

        {/* Bottom Grid */}
        <div className="bottom-section">
          {/* Monthly Chart card */}
          <div className="chart-card">
            <h3>Monthly</h3>
            <div className="chart-placeholder">Chart Placeholder</div>
          </div>

          {/* Success Card */}
          <div className="success-card">
            <h3>Congratulations!</h3>

            <div className="circle">
              <h1>94</h1>
              <p>Success</p>
            </div>

            <p>Rate accomplished in this quarter</p>
            <button>Submit</button>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-card">
          <h3>Service Information</h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Pet</th>
                <th>Depart</th>
                <th>Service</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ahmed Zakhi</td>
                <td>Cat</td>
                <td>08:30</td>
                <td>Nail trimming</td>
              </tr>

              <tr>
                <td>John Petar</td>
                <td>Dalmation</td>
                <td>16:55</td>
                <td>Back shave</td>
              </tr>

              <tr>
                <td>Harold Grant</td>
                <td>Pomeranian</td>
                <td>10:55</td>
                <td>Eye cleaning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
