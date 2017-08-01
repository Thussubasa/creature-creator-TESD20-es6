function config($routeProvider, $locationProvider){
  $routeProvider
    .when("/", {
        template: '<app-creature-creator></app-creature-creator>'
    })
    otherwise("/")

}
config.$inject = ['$routeProvider', '$locationProvider'];
export default config;
