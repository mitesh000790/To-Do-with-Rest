import React from "react";
import './AddUser.css';
import Reusable from './Reusable';

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value, evt.target.phone.value, evt.target.gender.value, evt.target.nation.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
    evt.target.phone.value= "";
    evt.target.gender.value= "";
    evt.target.nation.value= ""
    // console.log(evt.target.phone.value="")
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div class="container">
          <div class="container__field">
              <label>Full Name</label>
              <Reusable 
                name="name"
                placeholder="Enter Name"
                type="text"
              />
              <label>Email Address</label>
              <Reusable 
                name="email"
                placeholder="Email Address"
                type="email"
              />
              <label>Phone Number</label>
              <Reusable 
                name="phone"
                placeholder="phone number"
                type="tel"
              />
              <label>Gender</label>
              <div class="radio-btn">
                  <label>
                      <input type="radio" name="gender" value="male"/>
                      <span class="selection"></span>
                      <span class="btn-border"></span>
                      Male</label>
                  <label>
                      <input type="radio" name="gender" value="female"/>
                      <span class="selection"></span>
                      <span class="btn-border"></span>
                      Female</label>
              </div>
              <label>Nationality</label>
              <select name="nation" className="select">
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="aus">Australia</option>
              </select>
              <div class="btn">
                  <button onSubmit={handleOnSubmit}>Register Account</button>
              </div>
          </div>
      </div>
    </form>
  );
};
