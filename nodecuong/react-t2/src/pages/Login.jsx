import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     const res = await axios.post(`https://reqres.in/api/login`, {
  //       email: email,
  //       password: password,
  //     });
  //     console.log(res.data);
  //     localStorage.setItem("access_token", res.data.token);
  //     if (localStorage.getItem("access_token")) {
  //       navigate("/");
  //     } else {
  //       console.log("ban can dang nhap");
  //     }
  //   } catch (error) {
  //     console.log("Error", error.message);
  //     setError(error.response ? error.response.data.error : "Login failed");
  //   }
  // };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form  className="text-center mt-16">
        <div className="mb-6">
          <label className="mr-3" htmlFor="">
            Email
          </label>
          <input value={email} onChange={handleEmailChange} type="email" />
        </div>
        <div>
          <label className="mr-2" htmlFor="">
            Password
          </label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 px-2 py-1 mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
