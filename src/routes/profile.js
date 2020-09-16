import React from "react";

function Profile() {
  const imgStyle = {
    width: "100%",
    padding: "20px",
  };
  return (
    <>
      <div className="profile__container">
        <img src="./images/profile.jpg" alt="profile" style={imgStyle} />
      </div>
    </>
  );
}

export default Profile;
