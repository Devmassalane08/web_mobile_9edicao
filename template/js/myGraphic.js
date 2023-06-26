var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

var options = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: true
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };

  $(document).ready(function(){
    $.ajax({
        url:"http://localhost/teste/graficos.php",
        method:"GET",
        dataType:"Json",
    }).done(function(resposta){
        console.log(resposta);
    })
  });

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
        label: "Colecao 1",
      backgroundColor: barColors,
      data: yValues
    }]
  },
options
});