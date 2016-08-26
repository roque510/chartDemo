var ctxa = document.getElementById("myChart").getContext("2d");
var ctx = document.getElementById("canvas").getContext("2d");
var ctxb = document.getElementById("radar").getContext("2d");
var ctxc = document.getElementById("pie").getContext("2d");
var ctxd = document.getElementById("bar").getContext("2d");
var ctxe = document.getElementById("doughnut").getContext("2d");


ctxa.canvas.height = 300;
ctxb.canvas.height = 300;
ctx.canvas.height = 300;
ctxc.canvas.height = 300;
ctxd.canvas.height = 300;
ctxe.canvas.height = 300;




var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: '2015',
            data: [{
                x: 1,
                y: 3
            }, {
                x: 5,
                y: 3
            }, {
                x: 7,
                y: 5
            }, {
                x: 9,
                y: 7
            }, {
                x: 10,
                y: 10
            }]
        },{
        	backgroundColor: 'rgba(54, 162, 43, 0.2)',
            label: '2016',
            data: [{
                x: 1,
                y: 6
            }, {
                x: 5,
                y: 4
            }, {
                x: 7,
                y: 9
            }, {
                x: 9,
                y: 5
            }, {
                x: 10,
                y: 8
            }]
        }]
        
    },
    options: {
    	maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});



var line = new Chart(ctxa, {
    type: 'doughnut',
    data: {
        labels: ["0% - 69%", "70% - 89%", "90% - 100%"],        
        datasets: [{
            label: '# of Votes',            
            data: [60, 30, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',                
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',                
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    responsive: false,
    options: {
        rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
    	maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var line = new Chart(ctxb, {
    type: 'radar',
    data: {
        labels: ["Refrescos", "Carnes", "Quesos", "Granos", "Enlatado"],        
        datasets: [{
            label: 'Compras',            
            data: [12, 19, 8, 9, 15],
            backgroundColor: [                
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [                
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    responsive: false,
    options: {
    	maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var line = new Chart(ctxc, {
    type: 'pie',
    data: {
        labels: ["CocaCola", "Pepsi", "Mirinda", "7 up", "Dr. Pepper"],        
        datasets: [{
            label: '# of Votes',            
            data: [12, 19, 3, 5, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    responsive: false,
    options: {
        
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var line = new Chart(ctxe, {
    type: 'bar',
    data: {
        labels: ["CocaCola", "Pepsi", "Mirinda", "7 up", "Dr. Pepper"],        
        datasets: [{
            label: 'Productos',            
            data: [12, 19, 3, 5, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    responsive: false,
    options: {
        
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var line = new Chart(ctxd, {
    type: 'doughnut',
    data: {
        labels: ["CocaCola", "Pepsi", "Mirinda", "7 up", "Dr. Pepper"],        
        datasets: [{
            label: '# of Votes',            
            data: [12, 19, 3, 5, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    responsive: false,
    options: {
        
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

