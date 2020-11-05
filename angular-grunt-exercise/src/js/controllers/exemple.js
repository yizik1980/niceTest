'use strict';

angular.module('app')
.controller('ExempleController', ["ExempleService", function(ExempleService) {
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        onGridReady: function () {
            gridOptions.api.sizeColumnsToFit();
        }
    };
}]).controller('ReversorController', ["$scope", function($scope) {
       $scope.name = 'World';
   }]);
