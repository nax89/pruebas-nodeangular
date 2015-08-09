angular.module('angularTodo', []);  

function mainController($scope, $http) {
    $scope.formData = {};

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.get('/api/user')
        .success(function(data) {
            $scope.usersdata = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo TODO, manda el texto a la API
    $scope.createTodo = function(){
        $http.post('/api/user', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.usersdata = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    // Borra un TODO despues de checkearlo como acabado
    $scope.deleteTodo = function(id) {
        $http.delete('/api/user/' + id)
            .success(function(data) {
                $scope.usersdata = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
}
