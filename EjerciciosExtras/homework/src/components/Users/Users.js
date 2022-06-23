import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: ""
    };
  }


  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    users: state.users //aca se trae el state de los usuarios (users)
  };
};

export const mapDispatchToProps = (dispatch) => {
    return {
      getAllUsers: () => dispatch(getAllUsers()) //aca se llama al action creator que se encarga de traer los usuarios (getAllUsers)
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(Users)

