"use strict";!function(e){function a(){}a.prototype.createLineChart=function(e,a,r,t,i,o,s,b,n){Morris.Line({element:e,data:a,xkey:r,ykeys:t,labels:i,fillOpacity:o,pointFillColors:s,pointStrokeColors:b,behaveLikeLine:!0,gridLineColor:"rgba(173, 181, 189, 0.1)",hideHover:"auto",lineWidth:"3px",pointSize:0,preUnits:"$ ",dataLabels:!1,resize:!0,lineColors:n})},a.prototype.createAreaChart=function(e,a,r,t,i,o,s,b){Morris.Area({element:e,pointSize:0,lineWidth:0,data:t,xkey:i,ykeys:o,labels:s,hideHover:"auto",resize:!0,dataLabels:!1,gridLineColor:"rgba(173, 181, 189, 0.1)",lineColors:b})},a.prototype.createAreaChartDotted=function(e,a,r,t,i,o,s,b,n,y){Morris.Area({element:e,pointSize:3,lineWidth:1,data:t,xkey:i,ykeys:o,labels:s,hideHover:"auto",pointFillColors:b,pointStrokeColors:n,resize:!0,dataLabels:!1,gridLineColor:"rgba(173, 181, 189, 0.1)",lineColors:y})},a.prototype.createBarChart=function(e,a,r,t,i,o){Morris.Bar({element:e,data:a,xkey:r,ykeys:t,labels:i,hideHover:"auto",resize:!0,gridLineColor:"rgba(173, 181, 189, 0.1)",barSizeRatio:.4,dataLabels:!1,barColors:o})},a.prototype.createStackedChart=function(e,a,r,t,i,o){Morris.Bar({element:e,data:a,xkey:r,ykeys:t,stacked:!0,labels:i,hideHover:"auto",resize:!0,dataLabels:!1,gridLineColor:"rgba(173, 181, 189, 0.1)",barColors:o})},a.prototype.createDonutChart=function(e,a,r){Morris.Donut({element:e,data:a,resize:!0,colors:r,backgroundColor:"transparent"})},a.prototype.init=function(){e("#morris-line-example").empty(),e("#morris-area-example").empty(),e("#morris-area-with-dotted").empty(),e("#morris-bar-example").empty(),e("#morris-bar-stacked").empty(),e("#morris-donut-example").empty();this.createLineChart("morris-line-example",[{y:"2008",a:50,b:0},{y:"2009",a:75,b:50},{y:"2010",a:30,b:80},{y:"2011",a:50,b:50},{y:"2012",a:75,b:10},{y:"2013",a:50,b:40},{y:"2014",a:75,b:50},{y:"2015",a:100,b:70}],"y",["a","b"],["Series A","Series B"],["0.1"],["#ffffff"],["#999999"],["#ff8acc","#5b69bc"]);this.createAreaChart("morris-area-example",0,0,[{y:"2009",a:10,b:20},{y:"2010",a:75,b:65},{y:"2011",a:50,b:40},{y:"2012",a:75,b:65},{y:"2013",a:50,b:40},{y:"2014",a:75,b:65},{y:"2015",a:90,b:60}],"y",["a","b"],["Series A","Series B"],["#5b69bc","#35b8e0"]);this.createAreaChartDotted("morris-area-with-dotted",0,0,[{y:"2009",a:10,b:20},{y:"2010",a:75,b:65},{y:"2011",a:50,b:40},{y:"2012",a:75,b:65},{y:"2013",a:50,b:40},{y:"2014",a:75,b:65},{y:"2015",a:90,b:60}],"y",["a","b"],["Series A","Series B"],["#ffffff"],["#999999"],["#5b69bc","#35b8e0"]);this.createBarChart("morris-bar-example",[{y:"2009",a:100,b:90,c:40},{y:"2010",a:75,b:65,c:20},{y:"2011",a:50,b:40,c:50},{y:"2012",a:75,b:65,c:95},{y:"2013",a:50,b:40,c:22},{y:"2014",a:75,b:65,c:56},{y:"2015",a:100,b:90,c:60}],"y",["a","b","c"],["Series A","Series B","Series C"],["#ff8acc","#5b69bc","#35b8e0"]);this.createStackedChart("morris-bar-stacked",[{y:"2005",a:45,b:180},{y:"2006",a:75,b:65},{y:"2007",a:100,b:90},{y:"2008",a:75,b:65},{y:"2009",a:100,b:90},{y:"2010",a:75,b:65},{y:"2011",a:50,b:40},{y:"2012",a:75,b:65},{y:"2013",a:50,b:40},{y:"2014",a:75,b:65},{y:"2015",a:100,b:90}],"y",["a","b"],["Series A","Series B"],["#71b6f9","#ebeff2"]);this.createDonutChart("morris-donut-example",[{label:"Pending",value:12},{label:"Failed",value:30},{label:"Solved",value:20}],["#ff8acc","#5b69bc","#35b8e0"])},e.MorrisCharts=new a,e.MorrisCharts.Constructor=a}(window.jQuery),function(a){a.MorrisCharts.init(),window.addEventListener("adminto.setBoxed",function(e){a.MorrisCharts.init()}),window.addEventListener("adminto.setFluid",function(e){a.MorrisCharts.init()})}(window.jQuery);