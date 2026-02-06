import { useCallback, useState } from "react";

import "../styles/Form.css";
import { Link, Navigate } from "react-router-dom";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  
  const HandleSubmit = async () => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },credentials: 'include',
        body: JSON.stringify({
          Email,
          Password,
        }),
      });
      const data = await response.json();

      console.log(data);
      if (!response.ok) {
        throw new Error(data.message || "bład servera");
      } else {
        alert("zalogowano pomyślnie");
      
      Navigate("/")
      }
    } catch (err) {
      setSendMessage(`${err} `);
    } finally {
      setTimeout(() => {
        setSendMessage("");
      }, 2000);
    }
  };
  return (
    <div className="LoginForm">
      <fieldset>
        <h1>Zaloguj się</h1>

        <label htmlFor="emailLogin">E-mail</label>
        <input
          type="email"
          name="emailLogin"
          id="emailLogin"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="passwordLogin">Hasło</label>
        <input
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit" id="submitLogin" onClick={HandleSubmit}>
          Zaloguj się
        </button>
        <div className="errorLogin">
          <p>{sendMessage}</p>
        </div>
        <Link to="/register">nie masz konta ?</Link>
      </fieldset>
    </div>
  );
};
export default LoginForm;
