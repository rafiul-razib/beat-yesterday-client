import { useLoaderData } from "react-router-dom";
import SummaryTableRow from "../components/SummaryTableRow";

const SummaryMolding = () => {
  const prod = useLoaderData();
  console.log(prod);
  return (
    <div>
      <h1>here is summary</h1>
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
          {prod.map((production, idx) => (
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
