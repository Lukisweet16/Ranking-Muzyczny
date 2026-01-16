import { useState } from "react";
import "../styles/Form.css";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const HandleSubmit = async () => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Email,
        Password,
      }),
    });
    const data = await response;
    console.log(data);
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
      </fieldset>
    </div>
  );
};
export default LoginForm;
