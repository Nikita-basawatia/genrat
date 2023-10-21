import React, { useState, useEffect } from "react";

function Auth({ onAccessGrant }) {
  const [code, setCode] = useState("");

  console.log(code, "codeuse1");
  //new2
  const deviceCode = localStorage.getItem("deviceCode");
  //const specificCode = '456'; // Replace with your specific code

  //new2
  /* useEffect(() => {
    if (!deviceCode) {
      // Generate a unique device code based on the user agent
      const userAgent = window.navigator.userAgent;
      const uniqueCode = btoa(userAgent); // Base64 encoding
      localStorage.setItem('deviceCode', uniqueCode);
      setCode(uniqueCode);
    }
   }, [deviceCode]); */

  //new 3
  useEffect(() => {
    if (!deviceCode) {
      // Generate a random 4-digit number
      const randomCode = Math.floor(
        1000 + Math.floor(Math.random() * 4500) * 2
      );

      localStorage.setItem("deviceCode", randomCode);
      //setCode(randomCode.toString());
      // Convert to string
      console.log(code);
      console.log("changed");
      console.log(typeof code);
    }
  }, [deviceCode]);

  const handleCodeSubmit = () => {
    const userCodeNumber = parseInt(code, 10);
    const computedCode = ((userCodeNumber * 2 + 6) / 3).toString();
    console.log("Code:", code, typeof code);
    console.log("userCodeNumber:", userCodeNumber, typeof userCodeNumber);
    console.log("computedCode:", computedCode, typeof computedCode);
    console.log("deviceCode:", deviceCode, typeof deviceCode);
    //setCode((prevCode) => prevCode * 9152);

    // console.log(code, "codeuse- handle on submit");
    //console.log(deviceCode, "devicecod- hndle on submit");
    //if (code === deviceCode)
    if (deviceCode === computedCode) {
      console.log(computedCode);
      // Code is correct, allow access
      alert("Access granted. Welcome to the app!");
      onAccessGrant();

      // You can render your app content here
    } else {
      // Code is incorrect, deny access
      alert("Access denied. Please enter the correct code.");
      // You can show an error message or an access denied page
    }
  };
  const handleClearDeviceCode = () => {
    localStorage.removeItem("deviceCode"); // Remove the device code item from localStorage
    setCode(""); // Clear the code in the component state
  };

  return (
    <div>
      <h1>Enter the specific code to access the app</h1>
      <p>Device Code: {deviceCode}</p>
      <p>set Code: {code}</p>

      <input
        type="text"
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />
      <div className="submitbutton">
        <button className="inputfieldcode" onClick={handleCodeSubmit}>
          Submit Code
        </button>
      </div>
      <button className="do" onClick={handleClearDeviceCode}>
        do not click - Clear Device Code
      </button>
    </div>
  );
}

export default Auth;
//In this example, the user is required to enter a specific code. When the "Submit Code" button is clicked, the entered code is compared to the specific code. If they match, access is granted; otherwise, access is denied. You can replace 'your-specific-code' with your actual specific code.

//This is a simple illustration, and in a real-world scenario, you may want to implement a more secure and robust authentication system, especially if security is a concern. Consider using established authentication libraries and practices for more advanced use cases.
