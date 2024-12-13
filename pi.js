const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Rent', 'Food', 'Entertainment', 'Utilities', 'Savings'], 
        datasets: [{
            data: [40, 20, 15, 10, 15], 
            backgroundColor: [
                'rgba(117, 7, 31, 0.93)', 
                'rgba(2, 67, 22, 0.78)', 
                'rgba(117, 86, 7, 0.81)', 
                'rgba(6, 116, 116, 0.73)', 
                'rgba(36, 5, 98, 0.72)' 
            ],
            borderColor: [
                'rgb(69, 10, 23)',
                'rgb(5, 45, 72)',
                'rgb(62, 46, 5)',
                'rgb(8, 68, 68)',
                'rgb(33, 11, 78)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});