function chartdata(test)
{
    var options = {
           
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            animation:false,
            credits:{
                enabled:false
            },
           
                
          colors:['#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (Â°C)'
                },

                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C',
                pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            }
           
        };
        options.series = test;
      
       $('#container').highcharts(options);
  
}
$(document).ready(function() {
 $.ajax({
    url: '../highchart/datalist.json',
    type: 'GET',
    async: true,
    dataType: "json",
   
    success: function (response) {
        var content = response.data;
        
        var test = [];
        for(var i = 0; i < content.length; i++)
        {
            var temp = {};
            temp.name=content[i].name;
            temp.data=content[i].value;
            test.push(temp);
         }

        chartdata(test);
        console.log(content);
        for (i = 0; i < content.length; i++)
        {
            console.log(content[i].name,content[i].value);

        }

    }
  });
 });