import React, { useState, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./answers.scss";

function Answers(props) {
    const [readMore, setReadMore] = useState(false);
    const styleIcon = readMore ? <RemoveIcon style={{ fontSize: 45 }} /> : <AddIcon style={{ fontSize: 45 }} />;

    const parentRef = useRef();

    return (
        <div className='question-box'>
            <button onClick={() => { setReadMore(!readMore) }} className="question">
                {props.label}
                <div>{styleIcon}</div>
            </button>
            <div
                className="content-parent"
                ref={parentRef}
                style={
                    readMore
                        ? {
                            height: parentRef.current.scrollHeight + "px",

                        }
                        : {
                            height: "0px",
                        }
                }
            >
                <div className="content"> {props.children} </div>
            </div>
        </div >
    );
}

export default Answers;