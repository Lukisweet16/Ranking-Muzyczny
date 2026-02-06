import { useCallback, useState } from "react";

import "../styles/Form.css";

const RegisterForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [City, setCity] = useState("");
  const [ReapetPassword, setReapetPassword] = useState("");
  const [sendMessage, setSendMessage] = useState("");

  const HandleSubmit = async () => {
    try {
      if (!Email || !Password || !ReapetPassword) {
        setSendMessage("uzupełnij wszystkie pola");
        throw new Error("uzupełnij wszystkie pola");
      }
      if (Password !== ReapetPassword) {
        setSendMessage("hasla nie sa takie same");
        throw new Error("hasla nie sa takie same");
      }
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
      setSendMessage(`${err}`);
    } finally {
      setTimeout(() => {
        setSendMessage("");
      }, 2000);
    }
  };
  return (
    <div className="RegisterForm">
      <fieldset>
        <div className="errorRegister">
          <p>{sendMessage}</p>
        </div>
        <h1>Zarejestruj się</h1>

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
        <label htmlFor="passwordRegisterReapet">powtórz haslo</label>
        <input
          type="password"
          name="passwordRegisterReapet"
          id="passwordRegisterReapet"
          value={ReapetPassword}
          onChange={(e) => {
            setReapetPassword(e.target.value);
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
