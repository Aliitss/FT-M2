import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUserPosts } from '../../actions'

export class UserPosts extends React.Component {

  /*componentDidMount(){
    const userid = this.props.match.params.id
}*/

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario</h4>
        
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    userPosts: state.userPosts
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserPosts: () => dispatch(getAllUserPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);