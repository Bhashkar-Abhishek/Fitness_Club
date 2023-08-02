import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Navbar.module.css";
import Button from "@mui/material/Button";
import { Drawer} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() : JSX.Element {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const logedIn = localStorage.getItem("isLogedIn");

  function handleLogOut(): void {
    localStorage.removeItem("isLogedIn");
    navigate("/login");
  }

  function handleClick(): void {
    setOpen(!open);
  }

  return (
    <div className={style.container}>
      <div className={style.mobile}>
        {open ? (
          <div className={style.menu}>
            <Drawer open={open} onClose={handleClick}>
              <div className={style.mobileLinks}
              style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
                alignItems:"center",
                width:"120px",
                paddingTop:"1rem"
              }}
                >
                  <Link to="/" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px" }}>
                    Home
                  </Link>
                  <Link to="/aboutUs" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px" }}>
                    About
                  </Link>
                  <Link to="/program" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px" }}>
                    Program
                  </Link>
                  <Link to="/training" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px" }}>
                    Training
                  </Link>
                  <Link to="/pricing" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px" }}>
                    Pricing
                  </Link>
                  <Link to="/subscription" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px" }}>
                    Subscription
                  </Link>

                  {logedIn ? (
          <Button variant="outlined" onClick={handleLogOut}>
            Log Out
          </Button>
        ) : (
          <div className={style.mobileLogin}>
            <Link to="/login" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px"}}>
              Login
            </Link>
            <Link to="/registration" style={{ textDecoration: "none",color:"color: #0000EE",fontSize:"20px"}}>
              Register
            </Link>
          </div>
        )}

                </div>
            </Drawer>
          </div>
        ) : (
          <MenuIcon onClick={handleClick} sx={{color:"whitesmoke"}} />
        )}
      </div>

      <div className={style.logo}>
        <Link to="/" style={{ textDecoration: "none",color:"wheat" }}>
          {" "}
          <h1>GYM</h1>
        </Link>
      </div>

      <div className={style.links}>
        <Link to="/" style={{ textDecoration: "none",color:"wheat" }}>
          Home
        </Link>
        <Link to="/aboutUs" style={{ textDecoration: "none",color:"wheat" }}>
          About
        </Link>
        <Link to="/program" style={{ textDecoration: "none",color:"wheat" }}>
          Program
        </Link>
        <Link to="/training" style={{ textDecoration: "none",color:"wheat" }}>
          Training
        </Link>
        <Link to="/pricing" style={{ textDecoration: "none",color:"wheat" }}>
          Pricing
        </Link>
        <Link to="/subscription" style={{ textDecoration: "none",color:"wheat" }}>
          Subscription
        </Link>
      </div>

      <div className={style.login}>
        {logedIn ? (
          <Button variant="outlined" onClick={handleLogOut}>
            Log Out
          </Button>
        ) : (
          <div className={style.login}>
            <Button variant="outlined" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Link to="/registration" style={{ textDecoration: "none",color:"wheat" }}>
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
