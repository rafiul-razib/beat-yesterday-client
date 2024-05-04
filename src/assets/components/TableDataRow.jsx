const TableDataRow = ({ job, jobs, idx, setJob }) => {
  const { station, type, last, smv, target, production, rejection } = job;
  const achievement = (100 * production) / target;

  const handleRemove = (last) => {
    console.log("delete requested", last);
    const remainingJobs = jobs.filter((item) => item.last !== last);
    setJob(remainingJobs);
    console.log(job);
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{station}</td>
      <td>{type}</td>
      <td>{last}</td>
      <td>{smv}</td>
      <td>{target}</td>
      <td>{production}</td>
      <td>{rejection}</td>
      <td>{achievement.toFixed(2)} %</td>

      <td>
        <button
          onClick={() => handleRemove(last)}
          className="btn btn-sm glass bg-green-500 text-white text-xs"
        >
          Delete Record
        </button>
      </td>
    </tr>
  );
};

export default TableDataRow;
