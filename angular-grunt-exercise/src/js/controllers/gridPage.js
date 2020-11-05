'use strict';

angular.module('app')
    .controller('GridPageController', ["ExempleService", "$scope", function(ExempleService, $scope) {
        var columnDefs = [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            {
                headerName: "Price",
                field: "price"
            }
        ];

        var rowData = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];

        $scope.gridOptions = {
            columnDefs: columnDefs,
            angularCompileRow: true,
            //  rowModelType: 'infinite',
            rowData: rowData,
            onGridReady: function(params) {
                params.api.sizeColumnsToFit();
            }
        };

        // var dataSource = {
        //     rowCount: null,
        //     getRows: function(rowsParams) {
        //         rowsParams.successCallback(rowData, false);
        //     }
        // };
    }]);