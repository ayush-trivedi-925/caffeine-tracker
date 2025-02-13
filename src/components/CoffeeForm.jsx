import { FaPencilAlt } from "react-icons/fa";
import { coffeeOptions } from "../utils/index";
import { useState } from "react";
import Modal from "./Modal";
import Authentication from "./Authentication";
export default function CoffeeForm({ isAuthenticated }) {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [modalState, setModalState] = useState(false);

  function handleCoffeeFormSubmit() {
    if (!isAuthenticated) {
      setModalState(true);
      return;
    }
    console.log(selectedCoffee, coffeeCost, hour, min);
  }
  const handleCloseModal = () => {
    setModalState(false);
  };
  return (
    <>
      {modalState && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication />
        </Modal>
      )}
      <div className="section-header">
        <FaPencilAlt />
        <h2>Start Tracking Today </h2>
      </div>
      <h4>Select coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIdx) => {
          return (
            <button
              onClick={() => {
                setSelectedCoffee(option.name);
                setShowCoffeeTypes(false);
              }}
              key={optionIdx}
              className={
                "button-card " +
                (selectedCoffee === option.name ? "coffee-button-selected" : "")
              }
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
          );
        })}
        <button
          onClick={() => {
            setShowCoffeeTypes(true);
            setSelectedCoffee(null);
          }}
          className={
            "button-card " + (showCoffeeTypes ? "coffee-button-selected" : "")
          }
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeeTypes && (
        <select
          onChange={(event) => {
            setSelectedCoffee(event.target.value);
          }}
          name="coffee-list"
          id="coffee-list"
        >
          <option value={null}>Select type</option>
          {coffeeOptions.map((option, optionIdx) => {
            return (
              <option key={optionIdx} value={option.name}>
                {option.name} ({option.caffeine})
              </option>
            );
          })}
        </select>
      )}
      <h4>Add the cost ($)</h4>
      <input
        type="number"
        className="w-full"
        value={coffeeCost}
        onChange={(event) => {
          setCoffeeCost(event.target.value);
        }}
        placeholder="4.50"
      />
      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select
            onChange={(event) => {
              setHour(event.target.value);
            }}
            id="hours-select"
          >
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ].map((hour, hourIdx) => {
              return (
                <option key={hourIdx} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h6>Minutes</h6>
          <select
            onChange={(event) => {
              setMin(event.target.value);
            }}
            id="mins-select"
          >
            {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(
              (min, minIdx) => {
                return (
                  <option key={minIdx} value={min}>
                    {min}
                  </option>
                );
              }
            )}
          </select>
        </div>
      </div>
      <button onClick={handleCoffeeFormSubmit}>
        <p>Add Entry</p>
      </button>
    </>
  );
}
