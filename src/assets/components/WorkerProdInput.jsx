import { createContext, useState } from "react";
export const JobContext = createContext();

const WorkerProdInput = ({ jobs, setJob }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let station = form.station.value;
    let type = form.type.value;
    let last = form.last.value;
    let smv = form.smv.value;
    let target = form.target.value;
    let production = form.production.value;
    let rejection = form.rejection.value;

    const latestJob = {
      station,
      type,
      last,
      smv,
      target,
      production,
      rejection,
    };

    const newJob = [...jobs, latestJob];
    setJob(newJob);
  };

  console.log(jobs);
  return (
    <div>
      <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Station</span>
            </label>
            <input
              name="station"
              type="number"
              placeholder="station"
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <select
              className="select select-bordered w-full max-w-xs"
              name="type"
            >
              <option disabled selected>
                Type
              </option>
              <option>Non Welt</option>
              <option>Welt</option>
              <option>Insert</option>
              <option>Heel-ABS</option>
              <option>Welt-Insert</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last</span>
            </label>
            <input
              name="last"
              type="text"
              placeholder="last"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">SMV</span>
            </label>
            <input
              name="smv"
              type="number"
              placeholder="smv"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Target</span>
            </label>
            <input
              name="target"
              type="number"
              placeholder="Target"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Production</span>
            </label>
            <input
              name="production"
              type="number"
              placeholder="production"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rejection</span>
            </label>
            <input
              name="rejection"
              type="number"
              placeholder="rejection"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn glass bg-green-500 text-white">
              Add Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkerProdInput;
