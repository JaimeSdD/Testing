import React from "react";

const User = ({ name, image }) => {
  return (
    <div data-testid="user-card" class="user-container">
      <img src={image} alt={name} data-testid="user-card-image" />
      <h3 data-testid="user-card-name">{name}</h3>
    </div>
  );
};

export default User;
