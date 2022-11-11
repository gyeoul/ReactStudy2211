import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  });
  let isEven = true;

  if (time.getTime() % 2 === 0) {
    isEven = true;
  } else {
    isEven = false;
  }

  return (
    <div>
      <h1>자기소개</h1>
      <b>현재시간: {time.toLocaleTimeString()}</b>
      <br />
      지금시간은 {isEven ? "홀" : "짝"}입니다.
      <h2>이름</h2>
      <p>
        박창현[<code>gyeoul</code>]
      </p>
      <h2>학력</h2>
      <ul>
        <li>광영고등학교</li>
        <li>동양미래대학교</li>
      </ul>
      <h2>경력</h2>
      <ul>
        <li>mCloudoc(netid)</li>
      </ul>
    </div>
  );
}

export default App;
