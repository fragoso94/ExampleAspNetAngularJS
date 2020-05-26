var app = angular.module("myApp", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    let login = {
        name: 'login',
        url: '/login',
        templateUrl: 'Templates/login.html'

    };

    let home = {
        name: 'home',
        url: '/home',
        templateUrl: 'Templates/views/Home.html',
        controller: 'HomeController'
    };

    let inmueble = {
        name: 'inmueble',
        url: '/inmueble',
        templateUrl: 'Templates/views/Inmueble.html',
        controller: 'InmuebleController'
    };
    
    //rutas estados
    $stateProvider.state(inmueble);
    $stateProvider.state(login);
    $stateProvider.state(home);
    $urlRouterProvider.otherwise("/home");
});
