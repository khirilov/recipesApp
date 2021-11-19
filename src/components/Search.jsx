import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyDown={handleKey}
        />
        <button className="btn searchBtn" onClick={handleSubmit}>
          search
        </button>
      </div>
    </div>
  );
}

export { Search };
