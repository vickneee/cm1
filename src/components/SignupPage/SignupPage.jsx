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
      <div className="sign-in-container">
        <h2 className="text-3xl font-bold mt-4">Sign Up</h2>
        <form>
          <div className="">
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-3 py-2 rounded bg-white border ${
                    emailValid === null
                        ? "border-gray-300"
                        : emailValid
                            ? "border-green-500"
                            : "border-red-500"
                }`}
            />
            {emailValid === false && (
                <p>Invalid email address</p>
            )}
            {emailValid === true && (
                <p>You typed a valid email</p>
            )}
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-1"
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
                className={`w-full px-3 py-2 rounded bg-white border ${
                    passwordStrong === null
                        ? "border-gray-300"
                        : passwordStrong
                            ? "border-green-500"
                            : "border-red-500"
                }`}
            />
            {passwordStrong === false && (
                <p>Your password is too weak</p>
            )}
            {passwordStrong === true && (
                <p >Strong password</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1"
                htmlFor="nationality">
              Nationality
            </label>
            <select
                id="nationality"
                name="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full px-3 py-2 border rounded border-gray-300">
              <option value="fi">Finnish</option>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button
              type="submit"
              className="sign-up-btn w-full mb-4 mt-4 text-white py-2 rounded transition duration-200">
            Sign Up
          </button>
          <hr />
          <p className="text-lg mb-4 mt-4">{greetings[nationality]}</p>
          <p className="text-lg mb-4">
            {yourEmailIs[nationality]} {email}
          </p>
        </form>
      </div>
  );
};

export default SignupPage;
