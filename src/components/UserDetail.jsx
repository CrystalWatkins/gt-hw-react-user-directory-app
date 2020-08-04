import React from "react";

function UserDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.name.first} className="img-fluid" src={props.picture.medium} style={{ margin: "0 auto" }} />
      <h3>First: {props.name.first}</h3>
      <h3>Last: {props.name.last}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default UserDetail;
