import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";

const DatePick = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);
  const date =
    selectedDate &&
    moment(new Date(selectedDate.$d)).format("dddd, MMMM D YYYY");
  setDate(date);
  return (
    <div>
      <DatePicker
        placeholder="select date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      ></DatePicker>
    </div>
  );
};

export default DatePick;
