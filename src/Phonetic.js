import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen to:
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
