const data = {
    labels: ['Python', 'SQL', 'Tableau', 'Excel', 'HTML', 'CSS', 'JavaScript'],
    datasets: [{
      label: 'Skill Level',
      data: [10, 10, 9, 8, 8, 7, 6],
      backgroundColor: [
        'rgba(1, 102, 94, 0.2)',
        'rgba(53, 151, 143, 0.2)',
        'rgba(128, 205, 193, 0.2)',
        'rgba(223, 194, 125, 0.2)',
        'rgba(191, 129, 45, 0.2)',
        'rgba(140, 81, 10, 0.2)',
        'rgba(84, 48, 5, 0.2)'
      ],
      borderColor: [
        'rgba(1, 102, 94, 1)',
        'rgba(53, 151, 143, 1)',
        'rgba(128, 205, 193, 1)',
        'rgba(223, 194, 125, 1)',
        'rgba(191, 129, 45, 1)',
        'rgba(140, 81, 10, 1)',
        'rgba(84, 48, 5, 1)'
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
              display: true,
              text: 'Skills (out of 10)'
          }
        }
        },
      maintainAspectRatio: false,
      }
    };

  // render initial block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config,
  );