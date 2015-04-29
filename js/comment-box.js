(function() {
    var app = angular.module('blog-commentBox', ['firebase']);

    app.controller('CommentController', function() {
        this.showComments = false;

        this.toggleComments = function() {
            this.showComments = !this.showComments;
        }

        this.commentsVisible = function(checkComments) {
            return this.showComments === checkComments;
        }
    });

    app.controller('CommentMessageController',['$firebaseArray',
     function($firebaseArray) {
        this.comment = {};

        this.addComment = function(product) {
            var firebaseRef = $firebaseArray(new Firebase('https://brilliant-inferno-9224.firebaseio.com/' + product.assetId + '/comments'));
            this.comment.createdOn = (Date.now());
            firebaseRef.$add(this.comment);
            this.comment = {};
        }
    }]);

    app.directive('commentBox', function() {
        return {
            restrict: 'E',
            templateUrl: '../htdocs/comment-box.html'
        }
    });
})();