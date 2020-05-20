import React, { useState } from "react"

export default function ToggleSwitch(props) {
  const [toggle, setToggle] = useState("dark");

  const handleClick = () => {
    (toggle === "dark") ? setToggle("light") : setToggle("dark");
  }
  
  return (
    <div className={`toggle toggle-${toggle}`} onClick={handleClick}>
      <div className={`toggle-circle ${toggle}`}></div>
    </div>
  )
}
