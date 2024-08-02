import { useState } from "react";
import { data } from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [arr, setArr] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);

    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    const cpyarr = [...arr];
    const index = cpyarr.indexOf(getCurrentId);
    console.log(index);
    if (index === -1) cpyarr.push(getCurrentId);
    else cpyarr.splice(index, 1);

    setArr(cpyarr);

    console.log(cpyarr);
  };

  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => setMultipleSelection(!multipleSelection)}
      >
        Enable Multiple Selection
      </button>
      <div className="Accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  multipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {multipleSelection
                ? arr.indexOf(dataItem.id) !== -1 && (
                    <div className="content"> {dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content"> {dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ?
                            <div> {dataItem.answer}</div> : null */}
              {/* }    */}
            </div>
          ))
        ) : (
          <div>No data found!!!</div>
        )}
      </div>
    </div>
  );
}
