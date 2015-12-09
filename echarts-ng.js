'use strict';

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
