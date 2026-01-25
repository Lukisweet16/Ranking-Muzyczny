import { useCallback, useState } from "react";

import "../styles/Form.css";

const RegisterForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const HandleRegisterData = async (res) => {
    localStorage.setItem("token", res.token);
    localStorage.setItem("userId", res.userId);
    localStorage.setItem("userEmail", res.userEmail);
  };
  const HandleSubmit = async () => {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
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
        window.location.href = "http://localhost:3000/login";
        alert("zarejstrowano sie pomyslnie");
      }
    } catch (err) {
      setSendMessage(`${err} - cos poszlo nie tak`);
    } finally {
      setTimeout(() => {
        setSendMessage("");
      }, 2000);
    }
  };
  return (
    <div className="RegisterForm">
      <div className="errorRegister">
        <p>{sendMessage}</p>
      </div>
      <fieldset>
        <h1>Zaloguj się</h1>

        <label htmlFor="emailRegister">E-mail</label>
        <input
          type="email"
          name="emailRegister"
          id="emailRegister"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="passwordRegister">Hasło</label>
        <input
          type="password"
          name="passwordRegister"
          id="passwordRegister"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit" id="submitRegister" onClick={HandleSubmit}>
          Zarejestruj się
        </button>
      </fieldset>
    </div>
  );
};
export default RegisterForm;
