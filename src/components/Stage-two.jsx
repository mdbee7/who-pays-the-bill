import { useContext } from "react";
import { MyContext } from "../context";

const Stage2 = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="result_wrapper">
        <h3>The Looser is:</h3>
        <h2 className="result-name">{context.result}</h2>
      </div>
      <button className="action_button" onClick={context.resetGame}>
        START OVER
      </button>
      <button className="action_button btn_2" onClick={context.getLoser}>
        GET NEW LOSER
      </button>
    </>
  );
};
export default Stage2;
