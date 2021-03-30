import React from "react";

const PasswordPopUp = ({ hidden, setHidden, setPassword, password }) => {
const handleSubmit = (event) => {
    event.preventDefault();
    if(password === 'WELCOME'){
        setHidden(true);
    }
    else{
        setPassword('');
        alert('Wrong Password!');
    }
}
  return (
    <div
      className="password-pop-up"
      style={hidden ? { display: "none" } : { display: "grid" }}
    >
      {console.log("popup", hidden)}
      <form onSubmit={handleSubmit}>
        <label>Enter password to unlock prices</label>
        <br></br>
        <input type="password" value={password} onChange={(event) => {setPassword(event.target.value);}} />
        <br></br>
        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  );
};

export default PasswordPopUp;
