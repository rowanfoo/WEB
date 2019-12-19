//templateUrl: '/wishlistview/resources/wishlistview/route//wishlistcreate.html',
angular.module('app').component('comment', {
    templateUrl: '/WEB/static/app-component/comment.html',
    // bindings: {code: '<', userid: '@'},
    bindings: {code: '<'},
    controller: ['$scope', '$http', '$rootScope', 'Comment', function ($scope, $http, $rootScope, Comment) {
        console.log('-----------------COMPONENT Comment----3-----------');
        //     console.log('-----------------COMPONENT Comment---1-----13-------' + $scope.code);
        //   console.log('-----------------COMPONENT Comment--------14------' + $scope.userid);
        // console.log('-----------------COMPONENT Comment--------15------' + $scope.userid);
        // WishList.GetAllWishCategory().then(function (value) {
        //     console.log('HERE IN CONTROLLER ----------wishlistController---WISHLIST----RESULT-------****');
        //     $scope.codes = value;
        // });
        // // console.log(JSON.stringify($scope.codes, null, "    "));
        // $scope.filterItems = function (searchWord) {
        //     $rootScope.selectcode = searchWord;
        //     var arr = [];
        //     $scope.codes.forEach(function (item) {
        //         arr.push(item);
        //     });
        //     return arr;
        // };
        //
        // $scope.selectedItemChange = function (item) {
        //     $scope.mycode = item.code;
        //     $scope.selectedcode($scope.mycode);
        // }
        $scope.showcomment = false;
        $scope.ma = [];
        $scope.comments = [];
        //  $scope.comments.push({value: 'hello word'});
        // $scope.comments.push({value: 'this is my contents'});
        // $scope.comments.push({value: 'this is MORE contents'});
        // $scope.comment = {value: ''};

        this.$onInit = function () {
            // do all your initializations here.
            // create a local scope object for this component only. always update that scope with bindings. and use that in views also.
            //     console.log('--------anydata-----------' + this.code);
            //   console.log('--------anydata-----------' + this.userid);
            // console.log('--------anydata-----------' + $scope.code);
            $scope.code = this.code;
//            $scope.userid = this.userid;
            // console.log('--------anydata*******' + $scope.code);
            Comment.GetAllCommentbyCode($scope.code).then(function (data) {
                // Comment.GetAllCommentbyCode($scope.userid, $scope.code).then(function (data) {
                console.log('--------comment COMPONENT*******');

                data.forEach(function (data) {
                    $scope.comments.push(
                        {
                            value: data.text,
                            userid: data.userid
                        }
                    );
                });
                console.log(JSON.stringify($scope.comments, null, "    "));
            });


        };


        //   console.log('-----------------COMPONENT Comment---1-----15-------' + $scope.code);
        // console.log('-----------------COMPONENT Comment--------16------' + $scope.userid);


        $scope.newItem = function () {
            console.log("--------------new item------");
            $scope.ma.push("a");
        };
        $scope.showComment = function () {
            $scope.showcomment = true;
        };
        $scope.mySumbit = function () {
            console.log("------------SUBMIT---");
            console.log("------------SUBMIT---" + $scope.comment.value);
            $scope.comments.push({value: $scope.comment.value});
            $scope.comment.value = '';
            $scope.ma = [];
        };


    }]//eof contrl
});