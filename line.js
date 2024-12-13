const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
        datasets: [
            {
                label: 'Transactions ($)',
                data: [500, 700, 600, 800, 750, 900], 
                borderColor: 'rgb(16, 228, 72)', 
                backgroundColor: 'rgba(6, 55, 87, 0.2)', 
                borderWidth: 2,
                tension: 0.4 
            },
            {
                label: 'Budget ($)',
                data: [1000, 1000, 1000, 1000, 1000, 1000], 
                borderColor: 'rgb(222, 17, 61)', 
                backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                borderWidth: 2,
                tension: 0.4 
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            }
        }
    }
});


