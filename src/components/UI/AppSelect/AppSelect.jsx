import { useState } from "react";
import "./AppSelect.css";

export default function AppSelect({
  defaultOption = "",
  options,
  selectOption,
}) {
  const [select, setSelect] = useState(false);
  const [targetOption, setTargetOption] = useState(defaultOption);

  return (
    <div className="app-select">
      <div
        className="app-select__header"
        onClick={() => {
          setSelect(!select);
        }}
      >
        <span>{targetOption}</span>
        <div
          className={
            select
              ? "app-select__header--caret rotated"
              : "app-select__header--caret"
          }
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_328_110)">
              <path
                d="M19.7337 4.81165C19.3788 4.45668 18.8031 4.45662 18.4481 4.81171L10.0002 13.2598L1.55191 4.81165C1.19694 4.45668 0.621303 4.45662 0.266273 4.81171C-0.0887576 5.16674 -0.0887576 5.74232 0.266273 6.09735L9.35742 15.1883C9.52791 15.3587 9.75912 15.4545 10.0002 15.4545C10.2413 15.4545 10.4726 15.3587 10.643 15.1882L19.7337 6.09729C20.0888 5.74232 20.0888 5.16668 19.7337 4.81165Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_328_110">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <ul
        className={
          select
            ? "list-reset app-select__list open"
            : "list-reset app-select__list"
        }
      >
        {options.map((option) => (
          <li
            onClick={() => {
              selectOption(option.value);
              setTargetOption(option.title);
              setSelect(false);
            }}
            key={option.value}
            className="app-select__option"
          >
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
