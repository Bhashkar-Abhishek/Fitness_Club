import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./Pricing.module.css";
import { Button } from "@mui/material";

function Pricing() : JSX.Element {
  const logedIn = localStorage.getItem("isLogedIn")
  const navigate= useNavigate()

    interface User {
      FirstName: string;
      LastName: string;
      Email: string;
      Password: string;
      subscriptionData: {
        isSubscribed: boolean;
        subscriptionPlan: string;
      };
    };  

    const userData: User[] = JSON.parse(localStorage.getItem("users")!) || []


  function handleSubsriptionW(): void{
    const userDetails = userData.find((user:User)=>user.subscriptionData.isSubscribed === false && user.subscriptionData.subscriptionPlan === "")
    if(userDetails){
      const confirm=window.confirm("Do you want to subscribe to our Weekend plan")
      if(confirm){
        userDetails.subscriptionData.isSubscribed=true
        userDetails.subscriptionData.subscriptionPlan= "Weekend"
        localStorage.setItem("users",JSON.stringify(userData))
        alert("Congratulations you have subscribed to our Weekend plan")
      }
    }
    else{
      alert("you have already subscribed")
    }
  }
  function handleSubsriptionM(): void {
    const userDetails = userData.find((user:User)=>user.subscriptionData.isSubscribed === false && user.subscriptionData.subscriptionPlan === "")
    if(userDetails){
      const confirm=window.confirm("Do you want to subscribe to our Monthly plan")
      if(confirm){
        userDetails.subscriptionData.isSubscribed=true
        userDetails.subscriptionData.subscriptionPlan= "Monthly"
        localStorage.setItem("users",JSON.stringify(userData))
        alert("Congratulations you have subscribed to our Monthly plan")
      }
    }
    else{
      alert("you have already subscribed")
    }
  }
  function handleSubsriptionY(): void {
    const userDetails = userData.find((user:User)=>user.subscriptionData.isSubscribed === false && user.subscriptionData.subscriptionPlan === "")
    if(userDetails){
      const confirm=window.confirm("Do you want to subscribe to our Yearly plan")
      if(confirm){
        userDetails.subscriptionData.isSubscribed=true
        userDetails.subscriptionData.subscriptionPlan= "Yearly"
        localStorage.setItem("users",JSON.stringify(userData))
        alert("Congratulations you have subscribed to our Yearly plan")
      }
    }
    else{
      alert("you have already subscribed")
    }
  }

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.headerContent}>
        <h1>
          <span>Special Offers</span> Get It Now For Your Health
        </h1>
        <p>
          Time and health are two precious assets that we don't recognize and
          appreciate until they have been depleted
        </p>
      </div>
      <div className={style.pricingTable}>
      <div className={style.weekend}>
                        <h2>Weekend Pass</h2>
                        <h3>INR 200</h3>
                        <span>Unlimited Yoga Classes</span> <br />
                        <span>Aerobics</span> <br />
                        <span>Strength Training</span> <br />
                        {logedIn ? <Button onClick={handleSubsriptionW} variant="contained">SELECT PLAN</Button> : <Button variant="contained" onClick={() => navigate('/login')}>SELECT PLAN</Button>}
                    </div>

                    <div className={style.monthly}>
                        <h2>Monthly Pass</h2>
                        <h3>INR 700</h3>
                        <span>Unlimited Yoga Classes</span>  <br />
                        <span>Aerobics, Boxing</span>  <br />
                        <span>Strength & CrossFit Training</span>  <br />
                        <span>Jujitsu Training</span>  <br />
                        {logedIn ? <Button variant="contained" onClick={handleSubsriptionM}>SELECT PLAN</Button> : <Button variant="contained" onClick={() => navigate('/login')}>SELECT PLAN</Button>}
                    </div>

                    <div className={style.yearly}>
                        <h2>Yearly Pass</h2>
                        <h3>INR 7500</h3>
                        <span>Unlimited Yoga Classes</span>  <br />
                        <span>Aerobics, Jujutsu</span>  <br />
                        <span>Strength Training & CrossFit Training</span>  <br />
                        <span>Boxing Training & Taekwando Training</span>  <br />
                        <span>Karate Training, Bjj & MMa Training</span>  <br />
                        {logedIn ? <Button variant="contained" onClick={handleSubsriptionY}>SELECT PLAN</Button> : <Button variant="contained" onClick={() => navigate('/login')}>SELECT PLAN</Button>}
                    </div>
      </div>
    </div>
  );
}

export default Pricing;
