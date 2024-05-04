import { useState } from "react";
import DatePick from "../components/DatePick/DatePick";
import WorkerDataShowTable from "../components/WorkerDataShowTable";
import WorkerProdInput from "../components/WorkerProdInput";
import Swal from "sweetalert2";

const Home = () => {
  const [jobs, setJob] = useState([]);
  const [date, setDate] = useState(null);

  const handleWorkerData = (e) => {
    e.preventDefault();
    const form = e.target;

    const shift = form.shift.value;
    const card = form.card.value;
    const name = form.name.value;

    const jobs2 = jobs;

    const dailyIndividualProductionData = { date, shift, card, name, jobs2 };

    console.log(dailyIndividualProductionData);

    fetch("http://localhost:5000/production", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dailyIndividualProductionData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.insertedId &&
          Swal.fire({
            title: "Success!",
            text: "Record saved successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
      });
  };
  return (
    <div className="flex gap-4 max-w-6xl justify-between mt-6 mx-auto">
      <div>
        <div className="">
          <div className="mt-5">
            <form onSubmit={handleWorkerData} className="space-y-5">
              <div className="flex justify-between">
                <div>
                  <DatePick setDate={setDate} />
                </div>
                <div>
                  <select
                    name="shift"
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Shift
                    </option>
                    <option>A</option>
                    <option>B</option>
                  </select>
                </div>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  name="card"
                  type="text"
                  className="grow"
                  placeholder="Card Number"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  name="name"
                  type="text"
                  className="grow"
                  placeholder="Name"
                />
              </label>
              <WorkerDataShowTable jobs={jobs} setJob={setJob} />
              <button className="btn glass bg-green-500 text-white">
                Save Production
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <WorkerProdInput jobs={jobs} setJob={setJob} />
      </div>
    </div>
  );
};

export default Home;
