import { FaPencilAlt } from "react-icons/fa";
import { coffeeOptions } from "../utils/index";
export default function CoffeeForm() {
  return (
    <>
      <div className="section-header">
        <FaPencilAlt />
        <h2>Start Tracking Today </h2>
      </div>
      <h4>Select coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIdx) => {
          return (
            <button key={optionIdx} className="button-card">
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
          );
        })}
        <button className="button-card">
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      <select name="coffee-list" id="coffee-list">
        <option value={null}>Select type</option>
        {coffeeOptions.map((option, optionIdx) => {
          return (
            <option key={optionIdx} value={option.name}>
              {option.name} ({option.caffeine})
            </option>
          );
        })}
      </select>
      <h4>Add the cost ($)</h4>
    </>
  );
}
