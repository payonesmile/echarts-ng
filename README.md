# echarts-ng
echarts  angularjs 最简单的版本，轻藕合、全兼容、免升级，本人看了其它几个发现写的过于复杂，不宜于学习和使用，所以分享下代码

<br/>
需要引入文件，不同版本大家各自下载：<br/>
<pre><code>
&lt;script type='text/javascript' src="angular-1.4.7/angular.js">&lt;/script>
&lt;script type='text/javascript' src="echarts-2.2.7/build/dist/echarts-all.js">&lt;/script>
&lt;script type='text/javascript' src="echarts-ng/echarts-ng.js">&lt;/script>
</code></pre>
使用方法：
#html
<pre><code>
  &lt;div ng-app="myapp">
    &lt;div ng-controller="myctrl">
        &lt;div id="chart1" options="echarts.options" style="height:400px;" echarts>&lt;/div>

	&lt;button type="button" ng-click="btnOptions()">button&lt;/button>
    &lt;/div>
&lt;/div>
</code></pre>


#javascript

//依赖echarts-ng
<pre><code>
var myapp = angular.module('myapp',['echarts-ng']);
myapp.controller('myctrl', function ($scope) {
    
	$scope.btnOptions = function(){

					$scope.echarts = {
						options:{
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['邮件营销','联盟广告'],
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
								}
							]
						}




					};
	
	}
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
</code>
</pre>

