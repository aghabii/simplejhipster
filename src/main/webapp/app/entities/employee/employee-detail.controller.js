(function() {
    'use strict';

    angular
        .module('simplejhipsterApp')
        .controller('EmployeeDetailController', EmployeeDetailController);

    EmployeeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Employee', 'Department', 'Job'];

    function EmployeeDetailController($scope, $rootScope, $stateParams, entity, Employee, Department, Job) {
        var vm = this;

        vm.employee = entity;

        var unsubscribe = $rootScope.$on('simplejhipsterApp:employeeUpdate', function(event, result) {
            vm.employee = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
