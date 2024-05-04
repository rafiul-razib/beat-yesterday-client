import { useLoaderData } from "react-router-dom";
import SummaryTableRow from "../components/SummaryTableRow";
import { useState } from "react";
import moment from "moment";

const SummaryMolding = () => {
  const prod = useLoaderData();
  //   console.log(prod);
  const [monthData, setMonthData] = useState(prod);

  const selectRecord = (month) => {
    const selectedData = prod.filter(
      (item) =>
        moment(new Date(item.date)).format("MMMM").toLowerCase() === month
    );
    setMonthData(selectedData);
  };
  return (
    <div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          Select Month
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>January</a>
          </li>
          <li>
            <a>February</a>
          </li>
          <li>
            <a>March</a>
          </li>
          <li onClick={() => selectRecord("april")}>
            <a>April</a>
          </li>
          <li onClick={() => selectRecord("may")}>
            <a>May</a>
          </li>
          <li>
            <a>June</a>
          </li>
          <li>
            <a>July</a>
          </li>
          <li>
            <a>August</a>
          </li>
          <li>
            <a>September</a>
          </li>
          <li>
            <a>October</a>
          </li>
          <li>
            <a>November</a>
          </li>
          <li>
            <a>December</a>
          </li>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Card No.</th>
              <th>Name</th>
              <th>Target</th>
              <th>Production</th>
              <th>Achievement</th>
            </tr>
          </thead>
          {(monthData ? monthData : prod).map((production, idx) => (
            <SummaryTableRow
              key={production._id}
              idx={idx}
              production={production}
            ></SummaryTableRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SummaryMolding;
