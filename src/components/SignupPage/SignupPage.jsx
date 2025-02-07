import { useState } from "react";
import "./SignupPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");
  const [emailValid, setEmailValid] = useState(null);
  const [passwordStrong, setPasswordStrong] = useState(null);
  
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const validatePassword = (password) => password.length >= 8;
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value === "" ? null : validateEmail(value));
  };
  
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrong(value === "" ? null : validatePassword(value));
  };
  
  const greetings = {
    fi: "Moi",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };
  
  const yourEmailIs = {
    fi: "Sähköpostisi on:",
    en: "Your email is:",
    de: "Deine E-Mail ist:",
    fr: "Votre e-mail est:",
  };
  
  return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <div className="mb-8">
            <label htmlFor="email">
              Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={handleEmailChange}
            />
            {emailValid === false && (
                <p>Invalid email address</p>
            )}
            {emailValid === true && (
                <p>You typed a valid email</p>
            )}
          </div>
          <div>
            <label
                htmlFor="password">
              Password
            </label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            {passwordStrong === false && (
                <p>Your password is too weak</p>
            )}
            {passwordStrong === true && (
                <p >Strong password</p>
            )}
          </div>
          <div>
            <label
                htmlFor="nationality">
              Nationality
            </label>
            <select
                id="nationality"
                name="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}>
              <option value="fi">Finnish</option>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button
              type="submit">
            Sign Up
          </button>
          <hr />
          <p>{greetings[nationality]}</p>
          <p >
            {yourEmailIs[nationality]} {email}
          </p>
        </form>
      </div>
  );
};

export default SignupPage;
