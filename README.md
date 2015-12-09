# echarts-ng
echarts  angularjs 最简单的版本


需要引入文件：
<script type='text/javascript' src="angular-1.4.7/angular.js"></script>
<script type='text/javascript' src="echarts-2.2.7/build/dist/echarts-all.js"></script>
加上下面的
#echarts-ng.js

angular.module('echarts-ng', [])
    .directive('echarts', function () {
        var getMergedOptions = function (element, options, series) {
            var defaultOptions = {}
            var mergedOptions = {}
            if (options) {
                mergedOptions = $.extend(true, {}, defaultOptions, options);
            } else {
                mergedOptions = defaultOptions;
            }
            if(series) {
              mergedOptions.series = series
            }
            return mergedOptions
        }

        return {
            restrict: 'A',
            replace: false,
            scope: {
                options: '='
            },
            link: function (scope, element, attrs) {

                var mergedOptions = getMergedOptions(element, scope.options);
				//console.log(scope.options);
          
				var myChart = echarts.init(document.getElementById(attrs.id));
				//生成图表
				myChart.setOption(mergedOptions);
                scope.$watch("options", function (newOptions, oldOptions, scope) {
                    //do nothing when called on registration
                    if (newOptions === oldOptions) return;
					//图表清空
					myChart.clear();
                    var mergedOptions = getMergedOptions(element, newOptions);
					//生成图表
					myChart.setOption(mergedOptions);

                }, true);
			
            }
        }
    });



使用方法：
#html
<div ng-app="myapp">
    <div ng-controller="myctrl">

<div id="chart1" options="echarts.options" style="height:400px;" echarts></div>

    </div>
</div>


#javascript

<script type='text/javascript'>
//依赖echarts-ng
var myapp = angular.module('myapp',['echarts-ng']);
myapp.controller('myctrl', function ($scope) {
        $scope.echarts = {
		options:{
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
				selectedMode:"single",
				y:"bottom"
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: false},
					magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					boundaryGap : false,
					data : ['周一','周二','周三','周四','周五','周六','周日']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'邮件营销',
					type:'line',
					stack: '总量',
					data:[120, 132, 101, 134, 90, 230, 210]
				},
				{
					name:'联盟广告',
					type:'line',
					stack: '总量',
					data:[220, 182, 191, 234, 290, 330, 310]
				},
				{
					name:'视频广告',
					type:'line',
					stack: '总量',
					data:[150, 232, 201, 154, 190, 330, 410]
				},
				{
					name:'直接访问',
					type:'line',
					stack: '总量',
					data:[320, 332, 301, 334, 390, 330, 320]
				},
				{
					name:'搜索引擎',
					type:'line',
					stack: '总量',
					data:[820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
		}




	};




 
});





</script>
