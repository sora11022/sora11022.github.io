// import './Header.css'
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [local, setLocal] = useState(localStorage.getItem('access_token'));

  const handleLogout = () => {
    localStorage.clear();
    setLocal(localStorage.getItem('access_token'))
  };

  // useEffect(() => {
  //   if (!local) {
  //     navigate("/login");
  //   }
  // },[local])

  return (
    <div className={styles.text}>
      Header
      <button onClick={handleLogout}>Dang xuat</button>
    </div>
  );
};

export default Header;
