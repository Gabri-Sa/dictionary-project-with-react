import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.results.phonetic
          .filter((phonetic) => phonetic.audio != "")
          .map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        target="_blank"
        rel="noopener noreferrer"
      >
        Listen:
      </a>

      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
