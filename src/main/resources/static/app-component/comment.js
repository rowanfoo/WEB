//templateUrl: '/wishlistview/resources/wishlistview/route//wishlistcreate.html',
angular.module('app').component('comment', {
    templateUrl: '/WEB/static/app-component/comment.html',
    bindings: {code: '<'},
    controller: ['$scope', 'Comment', function ($scope, Comment) {
        $scope.showcomment = false;
        $scope.ma = [];
        $scope.comments = [];
        $scope.comment = {
            value: ''
        };
        this.$onInit = function () {
            $scope.code = this.code;
            Comment.GetAllCommentbyCode($scope.code).then(function (data) {
                data.forEach(function (data) {
                    $scope.comments.push(
                        {
                            value: data.text,
                            userid: data.userid
                        }
                    );
                });
                //console.log(JSON.stringify($scope.comments, null, "    "));
            });
        };

        $scope.newItem = function () {
            $scope.ma.push("a");
        };
        $scope.showComment = function () {
            $scope.showcomment = true;
        };
        $scope.mySumbit = function () {
           $scope.comments.push({value: $scope.comment.value});
            $scope.comment.value = '';
            $scope.ma = [];
        };
    }]//eof contrl
});