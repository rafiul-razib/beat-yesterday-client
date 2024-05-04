const SummaryTableRow = ({ idx, production }) => {
  const { name, jobs2, card } = production;
  let totalTarget = 0;
  let totalProduction = 0;
  let achievement = 0;

  const calculateTotal = () => {
    for (const item of jobs2) {
      const dailyTarget = item.target;
      const dailyProduction = item.production;
      totalTarget = totalTarget + parseInt(dailyTarget);
      totalProduction = totalProduction + parseInt(dailyProduction);
      achievement = (100 * totalProduction) / totalTarget;
    }
    return totalProduction, totalTarget, achievement;
  };

  calculateTotal();

  return (
    <tr>
      <th>{idx + 1}</th>
      <th>{card}</th>
      <td>{name}</td>
      <td>{totalTarget}</td>
      <td>{totalProduction}</td>
      <td>{achievement.toFixed(2)}%</td>
    </tr>
  );
};

export default SummaryTableRow;
