import React, { useEffect, useState } from 'react';
import { getDeviceInfo } from './UserInput'

function Appp() {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const info = getDeviceInfo();
    setDeviceInfo(info);
  }, []);

  return (
    <div>
      <h1>Device Information</h1>
      {deviceInfo && (
        <div>
          <p>User Agent: {deviceInfo.userAgent}</p>
          {/* You can parse and extract more specific device information from userAgent */}
        </div>
      )}
    </div>
  );
}


export default Appp;



