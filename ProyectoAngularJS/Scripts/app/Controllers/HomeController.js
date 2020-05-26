app.controller("HomeController", function ($scope, $state) {
    $scope.saludo = "Hola desde asp.net";

    $scope.Click = () => {
        console.log("Que ondas");
        $state.go('inmueble');
    };
});