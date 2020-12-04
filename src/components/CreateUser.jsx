import React, {useState} from "react";


function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    const { value } = event.target;
    setEmail(value);
  }

  function handlePassword(event) {
    const { value } = event.target;
    setPassword(value);
  }


  function handleSubmit(event) {
    console.log(email, password);
    event.preventDefault();
    window.location = "/";
  }


  return (
    <div className="small-box">
      <div className="title-box">
        <h1 style={styles.title} className="sub-title" >Create a new account</h1>
      </div>

        <form >
          <div className="login-box">
          <input
            className="item user-input"
            onChange={handleEmail}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
          />
          <input
            className="item user-input newItem"
            onChange={handlePassword}
            type="password"
            name="password"
            placeholder="Create a password"
            value={password}
          />
          </div>
          <div className="">
            <button onClick={handleSubmit}
            style={styles.button} type="submit" name="newUser" className="submit">Submit</button>
          </div>
        </form>
  </div>
  )
}

const styles = {
  title: {
    background: "linear-gradient(180deg, #222831 60%, #50a3a2 65%)",
    borderBottom: "solid 1px transparent",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
    margin: "10%"
  },
  button: {
    backgroundColor: "#50a3a2"
  }
}


export default CreateUser;
