(function() {
    'use strict';

    angular
        .module('simplejhipsterApp')
        .controller('DepartmentDetailController', DepartmentDetailController);

    DepartmentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Department', 'Location', 'Employee'];

    function DepartmentDetailController($scope, $rootScope, $stateParams, entity, Department, Location, Employee) {
        var vm = this;

        vm.department = entity;

        var unsubscribe = $rootScope.$on('simplejhipsterApp:departmentUpdate', function(event, result) {
            vm.department = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
