import { FaChartLine } from "react-icons/fa";
import {
  calculateCoffeeStats,
  calculateCurrentCaffeineLevel,
  getTopThreeCoffees,
  statusLevels,
} from "../utils";
import { useAuth } from "../context/AuthContext";
function StatsCard({ lg, title, children }) {
  return (
    <div className={"card stat-card " + (lg ? " col-span-2" : "")}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}
export default function Stats() {
  const { globalData } = useAuth();
  const stats = calculateCoffeeStats(globalData);
  const caffeine_level = calculateCurrentCaffeineLevel(globalData);
  const warningLevel =
    caffeine_level < statusLevels["low"].maxLevel
      ? "low"
      : caffeine_level < statusLevels["moderate"].maxLevel
      ? "moderate"
      : "high";

  const capitalFirstLetter = (str) => {
    return str[0].toUpperCase() + str.substring(1);
  };
  return (
    <>
      <div className="section-header">
        <FaChartLine />
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">
        <StatsCard lg title="Active Caffeine Level">
          <div className="status">
            <p>
              <span className="stat-text">{caffeine_level}</span>
            </p>
            <h5
              style={{
                color: statusLevels[warningLevel].color,
                background: statusLevels[warningLevel].background,
              }}
            >
              {capitalFirstLetter(warningLevel)}
            </h5>
          </div>
          <p>{statusLevels[warningLevel].description}</p>
        </StatsCard>
        <StatsCard title="Daily Caffeine Cosumption">
          <div className="status">
            <p>
              <span className="stat-text">{stats.daily_caffeine}</span>mg
            </p>
          </div>
        </StatsCard>
        <StatsCard title="Avg # of Coffees">
          <p>
            <span className="stat-text">{stats.average_coffees}</span>
          </p>
        </StatsCard>
        <StatsCard title="Daily Cost ($)">
          <p>
            $ <span className="stat-text">{stats.daily_cost}</span>
          </p>
        </StatsCard>
        <StatsCard title="Total Cost ($)">
          <p>
            $ <span className="stat-text">{stats.total_cost}</span>
          </p>
        </StatsCard>
        <table className="stat-table">
          <thead>
            <tr>
              <th>Name of Coffee</th>
              <th>Number of Purchase</th>
              <th>Percentage of Total</th>
            </tr>
          </thead>
          <tbody>
            {getTopThreeCoffees(globalData).map((coffee, coffeeIndex) => {
              return (
                <tr key={coffeeIndex}>
                  <td>{coffee.coffeeName}</td>
                  <td>{coffee.count}</td>
                  <td>{coffee.percentage}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
