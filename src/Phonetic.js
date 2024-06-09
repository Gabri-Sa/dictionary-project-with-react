import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen:
      </a>

      <span className="text"></span>
      {props.phonetic.text}
    </div>
  );
}
