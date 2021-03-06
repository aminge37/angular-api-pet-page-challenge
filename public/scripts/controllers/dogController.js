myApp.controller('DogController', ['$scope', '$http', function($scope, $http) {

    $scope.data = {};

    function dogFinder() {

        var key = '5a2e26b5b782c4616cb60d888f87b5ae';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=dog';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function (response) {
                $scope.animal = response.data.petfinder.pet;
                console.log($scope.animal);
            }
        );
    }

    dogFinder();
}]);