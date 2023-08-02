import Navbar from "../../Components/Navbar/Navbar";
import style from "./Subscription.module.css";

function Subscription(): JSX.Element {

  type User = {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    subscriptionData: {
      isSubscribed: boolean;
      subscriptionPlan: string;
    };
  };
  const userData: User [] = JSON.parse(localStorage.getItem("users")!) || [];

  const userDetails: User | undefined = userData.find(
    (user: User) => user.subscriptionData.isSubscribed === true
  );

  return (
    <div className={style.container}>
      <Navbar />

      <div className={style.subscriptionTable}>
        <div className={style.weekend}>
          <div>
            <h2>Weekend Pass</h2>
            <h3>INR 200</h3>
            <span>Unlimited Yoga Classes</span> <br />
            <span>Aerobics</span> <br />
            <span>Strength Training</span> <br />
          </div>
          <div style={{color:userDetails?"#008000":"#6a040f",margin:"1rem"}}>
            {userDetails &&
            userDetails.subscriptionData.subscriptionPlan === "Weekend" ? (
              "Subscribed"
            ) : (
              <h2>Not Subscribed</h2>
            )}
          </div>
        </div>

        <div className={style.monthly}>
          <div>
            <h2>Monthly Pass</h2>
            <h3>INR 700</h3>
            <span>Unlimited Yoga Classes</span> <br />
            <span>Aerobics, Boxing</span> <br />
            <span>Strength & CrossFit Training</span> <br />
            <span>Jujitsu Training</span> <br />
          </div>
          <div style={{color:userDetails?"#008000":"#6a040f",margin:"1rem"}}>
            {userDetails &&
            userDetails.subscriptionData.subscriptionPlan === "Yearly" ? (
              "Subscribed"
            ) : (
              <h2>Not Subscribed</h2>
            )}
          </div>
        </div>

        <div className={style.yearly}>
          <div>
            <h2>Yearly Pass</h2>
            <h3>INR 7500</h3>
            <span>Unlimited Yoga Classes</span> <br />
            <span>Aerobics, Jujutsu</span> <br />
            <span>Strength Training & CrossFit Training</span> <br />
            <span>Boxing Training & Taekwando Training</span> <br />
            <span>Karate Training, Bjj & MMa Training</span> <br />
          </div>
          <div  style={{color:userDetails?"#008000":"#6a040f",margin:"1rem"}}>
            {userDetails &&
            userDetails.subscriptionData.subscriptionPlan === "Yearly" ? (
              "Subscribed"
            ) : (
              <h2>Not Subscribed</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
