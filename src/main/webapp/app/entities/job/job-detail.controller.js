(function() {
    'use strict';

    angular
        .module('simplejhipsterApp')
        .controller('JobDetailController', JobDetailController);

    JobDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Job', 'Employee', 'Task'];

    function JobDetailController($scope, $rootScope, $stateParams, entity, Job, Employee, Task) {
        var vm = this;

        vm.job = entity;

        var unsubscribe = $rootScope.$on('simplejhipsterApp:jobUpdate', function(event, result) {
            vm.job = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
