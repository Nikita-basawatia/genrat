import React, { useState } from "react";

function UserInput({ setTotalValue, setWagerate, setLeft }) {
  const [amount, setAmount] = useState("");
  //const [left2, setLeft2] = useState("");
  const [wage, setWage] = useState("");
  const [isAmountSubmitted, setIsAmountSubmitted] = useState(false); // Track amount submission
  const [isWageSubmitted, setIsWageSubmitted] = useState(false);
  const [taspersondyrate, setTaspersondyrate] = useState("");
  let tr = " enter a correct value";
  let tw = 1;
  let errorMessage = "enter valid wage i.e - 204 or 195 or 221";

  function caltr(wage) {
    if (wage === "204") {
      tr = 141.5;
    } else if (wage === "195") {
      tr = 15.88;
    } else if (wage === "221") {
      tr = 155.5;
    } else {
      errorMessage = "enter valid wage i.e - 204 or 195 or 221";
    }
    console.log(tr);
    console.log(wage, typeof wage);

    return tr;
  }
  function caltw(wage) {
    if (wage === "204") {
      tr = 141.5;
    } else if (wage === "195") {
      tr = 15.88;
    } else if (wage === "221") {
      tr = 155.5;
    } else {
      errorMessage = "enter valid wage i.e - 204 or 195 or 221";
    }
    tw = (wage / tr).toFixed(2);

    console.log(tr);
    console.log(wage, typeof wage);

    return tw;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user input, and if valid, update the total value in the parent component.
    if (amount && !isNaN(amount)) {
      const parsedTotal = parseFloat(amount);

      if (parsedTotal < 2500) {
        alert(
          "Total value should be at least 2500. Please enter a correct value."
        );
      } else {
        setTotalValue(parsedTotal);
        console.log({ amount });
        setIsAmountSubmitted(true);
      }
    }
  };

  const handleSubmit2 = (e2) => {
    e2.preventDefault();

    if (wage && !isNaN(wage)) {
      const parsedTotalwage = parseFloat(wage);

      setWagerate(parsedTotalwage);
      console.log({ wage });
      setIsWageSubmitted(true);
    }
  };

  let persondy = ""; // Initialize as empty

  if (isAmountSubmitted && isWageSubmitted) {
    persondy = Math.round(amount / wage);
    console.log("pppp");
    setLeft(amount - Math.round(2 * (Math.round(persondy / 50) * wage)));
    // setLeft(left2);
  }

  // Initialize as empty

  return (
    <>
      <div className="form-container">
        <h5>ENTER MUSTOR ROLL AMOUNT</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">enter amount</button>
        </form>
      </div>

      <div className="form-container">
        <h5>ENTER WAGE RATE:</h5>
        <form onSubmit={handleSubmit2}>
          <input
            type="number"
            value={wage}
            onChange={(e1) => setWage(e1.target.value)}
          />
          <button type="submit">enter wage rate</button>
        </form>
      </div>

      {isAmountSubmitted && isWageSubmitted && persondy !== "" && (
        <>
          <div>
            <h5>
              No of person day: <span>{persondy}</span>
            </h5>
          </div>

          <div>
            <h5>
              No of mate: <span>{Math.round(persondy / 50)}</span>
            </h5>
          </div>
          <div>
            <h5>
              No of drinking water: <span>{Math.round(persondy / 50)}</span>
            </h5>
          </div>
          <div>
            <h5>
              amount of drinking water:{" "}
              <span>{Math.round(persondy / 50) * wage}</span>
            </h5>
          </div>
          <div>
            <h5>
              amount of mate:<span>{Math.round(persondy / 50) * wage}</span>
            </h5>
          </div>
          <div>
            <h5>
              amount of drinking water + mate:
              <span>{Math.round(2 * (Math.round(persondy / 50) * wage))}</span>
            </h5>
            <h5>
              left amount:
              <span style={{ color: "blue" }}>
                {amount - Math.round(2 * (Math.round(persondy / 50) * wage))}
              </span>
            </h5>

            <h5 style={{ color: "BROWN" }}>
              TASK RATE:
              <span style={{ color: "red " }}>{caltr(wage)}</span>
            </h5>
            <h5 style={{ color: "BROWN" }}>
              Rate of work :<span style={{ color: "red " }}>{caltw(wage)}</span>
            </h5>
          </div>
        </>
      )}
    </>
  );
}

// deviceInfo.js
export function getDeviceInfo() {
  const userAgent = window.navigator.userAgent;
  return {
    userAgent,
  };
}

export default UserInput;
