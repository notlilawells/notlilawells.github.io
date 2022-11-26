var ctx = document.getElementById("freetime");
var freetime = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Exercising', 'Reading', 'Trying out new restaurants', 'Binge watching crime shows', 'Spending time with family & friends'],
    datasets: [{
      label: 'Time Spent',
      data: [20, 15, 15, 20, 30],
      backgroundColor: [
        'rgba(1, 102, 94, 0.2)',
        'rgba(53, 151, 143, 0.2)',
        'rgba(140, 81, 10, 0.2)',
        'rgba(223, 194, 125, 0.2)',
        'rgba(84, 48, 5, 0.2)'
      ],
      borderColor: [
        'rgba(1, 102, 94, 1)',
        'rgba(53, 151, 143, 1)',
        'rgba(140, 81, 10, 1)',
        'rgba(140, 81, 10, 1)',
        'rgba(84, 48, 5, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: false,

  }
});