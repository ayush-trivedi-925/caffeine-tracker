import { FaHistory, FaMugHot } from "react-icons/fa";
import {
  calculateCurrentCaffeineLevel,
  coffeeConsumptionHistory,
  getCaffeineAmount,
  timeSinceConsumption,
} from "../utils";
export default function History() {
  return (
    <>
      <div className="section-header">
        <FaHistory />
        <h2>History</h2>
      </div>
      <p>
        <i>Hover for more information!</i>
      </p>
      <div className="coffee-history">
        {Object.keys(coffeeConsumptionHistory)
          .sort((a, b) => b - a)
          .map((utcTime, coffeeIndex) => {
            const coffee = coffeeConsumptionHistory[utcTime];
            const timeSinceConsumed = timeSinceConsumption(utcTime);
            const originalCaffeineAmount = getCaffeineAmount(coffee.name);
            const remainingAmount = calculateCurrentCaffeineLevel({
              [utcTime]: coffee,
            });
            const summary = `${coffee.name} | ${coffee.cost} | ${timeSinceConsumed} | ${remainingAmount}mg / ${originalCaffeineAmount}mg`;
            return (
              <div title={summary} key={coffeeIndex}>
                <FaMugHot size={30} />
              </div>
            );
          })}
      </div>
    </>
  );
}
