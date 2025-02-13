import { FaHistory } from "react-icons/fa";
import { coffeeConsumptionHistory } from "../utils";
export default function History() {
  return (
    <>
      <div className="section-header">
        <FaHistory />
        <h2>History</h2>
      </div>
      <p>
        <i>Hover for more information!</i>
        <div className="coffee-history">
          {Object.keys(coffeeConsumptionHistory).sort((a, b) => b - a)}
        </div>
      </p>
    </>
  );
}
