import { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import { MyContext } from "../context";
import {} from "react-toastify";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    //RUN VALIDATION
    if (validate) {
      setError([false, ""]);
      //ADD TO THE LIST
      context.addPlayer(value);
      //RESET FORM
      textInput.current.value = "";
    }
  };

  const validateInput = (value) => {
    if (value === "") {
      setError([true, "Sorry, you need to add something"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Sorry, you need at least 3 char"]);
      return false;
    }
    return true;
  };

  console.log(context);

  return (
    <>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          />
        </Form.Group>

        {/* SHOW ERRORS */}
        {error[0] ? <Alert variant="danger">{error[1]}</Alert> : null}

        <Button className="miami" type="submit" variant="primary">
          Add player
        </Button>
        {context.players && context.players.length > 0 ? (
          <>
            <hr />
            <ul className="list-group">
              {context.players.map((player, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                >
                  {player}
                  <span
                    className="badge badge-danger"
                    onClick={context.removePlayer}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
            <div className="miami action_button" onClick={context.nextStage}>
              NEXT
            </div>
          </>
        ) : null}
      </Form>
    </>
  );
};
export default Stage1;
