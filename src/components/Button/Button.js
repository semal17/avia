import { useContext } from "react";

import { MyContext } from "../../App";

import "./Button.css";

function Button() {
  const { count, setCount } = useContext(MyContext);
  return (
    <div className="button" type="button" onClick={() => setCount(count + 2)}>
      Показать ещё
    </div>
  );
}

export default Button;
