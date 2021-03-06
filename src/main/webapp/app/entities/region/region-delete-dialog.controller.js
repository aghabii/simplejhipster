(function() {
    'use strict';

    angular
        .module('simplejhipsterApp')
        .controller('RegionDeleteController',RegionDeleteController);

    RegionDeleteController.$inject = ['$uibModalInstance', 'entity', 'Region'];

    function RegionDeleteController($uibModalInstance, entity, Region) {
        var vm = this;

        vm.region = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Region.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
