angular
    .module('app')
    .factory('Comment', Service);

function Service($rootScope, $http, $q, submitform) {
    var service = {};
    service.GetAllIdeasbyUserid = getAllIdeasbyUserid;
    service.GetAllCommentsbyUserid = getAllCommentsbyUserid;
    service.GetAllCommentbyType = getAllCommentbyType;
    service.GetAllCommentbyCode = getAllCommentbyCode;
    service.SaveComment = saveComment;
    return service;

    function getAllIdeasbyUserid(userid) {
        var commenturl = $rootScope.config.commenturl + '/idea/' + userid;
        console.log('---RUN-   getAllIdeasbyUserid-----1--' + commenturl);
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(commenturl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }

    function getAllCommentsbyUserid(userid) {
        var commenturl = $rootScope.config.commenturl + '/userid/' + userid;
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(commenturl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }


    function getAllCommentbyType(userid) {
        var commenturl = $rootScope.config.commenturl + '/all/' + userid;
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(wishlisturl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }

    function getAllCommentbyCode(code) {
        var commenturl = $rootScope.config.commenturl + '/code/' + code;
        var q = $q.defer();
        var seriesOptions = [];
        $http.get(commenturl).then(function (data) {
            data.data.forEach(function (value) {
                seriesOptions.push(value);
            });
            q.resolve(seriesOptions);
        });
        return q.promise;
    }

    function saveComment(comment) {
        var commenturl = $rootScope.config.commenturl;
        submitform.sendData('PUT', commenturl, category);
    }
}






