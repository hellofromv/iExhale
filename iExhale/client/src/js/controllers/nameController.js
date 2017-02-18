angular.module('forms.name', [])

.controller('NameController', function($scope, $location, UserInput) {
  $scope.nextPage = function(view) {
    UserInput.save('NameController', $scope.person.personName)

    $location.path(view);
  };
});