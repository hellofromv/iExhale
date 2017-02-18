angular.module('forms.email', [])

.controller('EmailController', function($scope, $location, UserInput) {
  $scope.backPage = function(view) {
    $location.path(view);
  };

  $scope.changePage = function(view) {
    if ($scope.person.personEmail) {
      UserInput.save('EmailController', $scope.person.personEmail);

      $location.path(view);
    }
  };
});