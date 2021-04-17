import React, { useState } from "react";
import Reusable from './Reusable'
import './AddUser.css'

export const User = ({ name, email, phone, gender, nation, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value, evt.target.phone.value, evt.target.gender.value, evt.target.nation.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <div className="container">
            <div className="container__field">
              <input placeholder="Name" class="input-field" name="name" defaultValue={name} />
              <input placeholder="Email" class="input-field" name="email" defaultValue={email} />
              <input placeholder="Phone" class="input-field" name="phone" defaultValue={phone} />
              <div class="radio-btn">
                  <label>
                      <input type="radio" name="gender" value="male" checked={gender}/>
                      <span class="selection"></span>
                      <span class="btn-border"></span>
                      Male</label>
                  <label>
                      <input type="radio" name="gender" value="female" checked={gender}/>
                      <span class="selection"></span>
                      <span class="btn-border"></span>
                      Female</label>
              </div>
              <select name="nation" className="select">
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="aus">Australia</option>
              </select>
              <div class="btn">
                  <button onSubmit={handleOnEditSubmit}>Register Account</button>
              </div>
            </div>
          </div>
          
        </form>
      ) : (
        <div className="User">
          <table>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{gender}</td>
                    <td>{nation}</td>
                    <td><button className="button edit" onClick={handleEdit}>Edit</button>
                        <button className="button delete" onClick={handleDelete}>Delete</button></td>
                </tr>
            </table>
        </div>
      )}
    </div>
  );
};
