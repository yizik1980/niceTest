'use strict';

angular.module('app')
    .directive('reverse', function() {

        return {
            restrict: 'E',
            scope: {
                name: '='
            },

            templateUrl: 'partials/reversorDirective.html',

            controller: function($scope) {
                alert("reversor directive");
                $scope.reverseName = function() {
                    $scope.name = $scope.name.split('').reverse().join('');
                };
            },

            // replace: true,
            link: function(scope, elem, attr) {
                elem.bind('dblclick', function() {
                    scope.name += '!';
                    scope.$apply();
                });
            }
        };
    });