import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DataGraph = ({ income, expenses }) => {
  const data = {
    labels: ['Expenses', 'Income'],
    datasets: [
      {
        label: '# expenses',
        data: [expenses, income],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: ['rgba(153, 102, 255, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};

export default DataGraph;
