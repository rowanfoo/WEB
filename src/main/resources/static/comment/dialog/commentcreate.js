angular
    .module('app')
    .factory('CommentCreate', Service);

function Service($http, $q, Config, $mdDialog, Comment) {
    var service = {};
    service.Createcontroller = createcontroller;
    return service;

    function createcontroller($scope, $http, aTitle, $mdDialog) {
        $scope.code = aTitle;
        $scope.selected = 'equity';

        $scope.comment = {
            code: aTitle,
            userid: 'rowan',
            type: 'equity'
        };

        Config.GetConfig('comment', '0').then(function (data) {
            $scope.config = data
            //           console.log(JSON.stringify($scope.config, null, "    "));
        });

        $scope.myFunc = function () {
            console.log('-----------submit--x1-------');
            //    Config.Save($scope.comment);
            console.log(JSON.stringify($scope.comment, null, "    "));
            Comment.SaveComment($scope.comment);
            $mdDialog.hide();

        }
    };
}
