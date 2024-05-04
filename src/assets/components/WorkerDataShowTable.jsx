import TableDataRow from "./TableDataRow";

const WorkerDataShowTable = ({ jobs, setJob }) => {
  let totalTarget = 0;
  let totalProduction = 0;
  let totalRejection = 0;
  let productivity = 0;

  const calculateTotal = () => {
    for (const job of jobs) {
      totalTarget = totalTarget + parseInt(job.target);
      totalProduction = totalProduction + parseInt(job.production);
      totalRejection = totalRejection + parseInt(job.rejection);
    }
    productivity = (100 * totalProduction) / totalTarget;
    return totalTarget, totalProduction, productivity, totalRejection;
  };

  calculateTotal();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Station</th>
              <th>Type</th>
              <th>Last</th>
              <th>SMV</th>
              <th>Target</th>
              <th>Production</th>
              <th>Rejection</th>
              <th>Achievement</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, idx) => (
              <TableDataRow
                key={job.id}
                idx={idx}
                job={job}
                jobs={jobs}
                setJob={setJob}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{totalTarget}</td>
              <td>{totalProduction}</td>
              <td>{totalRejection}</td>
              <td>{productivity ? productivity.toFixed(2) : 0} %</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default WorkerDataShowTable;
