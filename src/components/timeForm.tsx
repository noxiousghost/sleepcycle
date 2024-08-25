import React, { useState } from "react";
import moment from "moment";

const TimeForm: React.FC = () => {
  const [cycleTime, setCycleTime] = useState(moment().add(1, "days"));
  const [ampm, setAmpm] = useState("AM");
  const [sleepCycleLength, setSleepCycleLength] = useState(90);
  const [fallAsleepTime, setFallAsleepTime] = useState(14);

  const setHours = (value: string) => {
    // Implement setHours logic
  };

  return (
    <div>
      <div className="row level fluid-container">
        <div className="col-fluid input-control">
          <select id="hour" onChange={(e) => setHours(e.target.value)}>
            <option>(hours)</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TimeForm;
