(function() {
    var app = angular.module('blog-commentBox', []);

    app.controller('CommentController', function() {
        this.showComments = false;

        this.toggleComments = function() {
            this.showComments = !this.showComments;
        }

        this.commentsVisible = function(checkComments) {
            return this.showComments === checkComments;
        }
    });

    app.controller('CommentMessageController', function() {
        this.comment = {};

        this.addComment = function(product) {
            var firebaseRef = new Firebase('https://brilliant-inferno-9224.firebaseio.com/' + product.assetId);
            var usersRef = firebaseRef.child("comments");
            this.comment.createdOn = (Date.now());
            usersRef.push(this.comment);
            this.comment = {};
        }
    });

    app.directive('commentBox', function() {
        return {
            restrict: 'E',
            templateUrl: '../htdocs/comment-box.html'
        }
    });
})();