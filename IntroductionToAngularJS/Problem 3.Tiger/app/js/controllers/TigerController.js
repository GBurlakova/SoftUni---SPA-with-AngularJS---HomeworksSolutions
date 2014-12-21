tigerApp.controller('TigerController',
    function TigerController($scope) {
    $scope.tigetInfo = {
        name: 'Pesho',
        placeOfBirth: 'Asia',
        dateOfBirth: '2006',
        home: 'Sofia Zoo',
        photo: 'http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg'
    };

    $scope.styles = {
        body: 'body',
        main: 'main',
        personalData: 'personal-data',
        photo: 'photo',
        bold: 'bold'
    };
});
