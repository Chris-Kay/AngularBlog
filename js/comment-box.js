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
            console.log(this.comment);
            var firebaseRef = $firebaseArray(new Firebase('https://brilliant-inferno-9224.firebaseio.com/' + product.assetId + '/comments'));
            this.comment.createdOn = (Date.now());
            firebaseRef.$add(this.comment);
            this.comment = {};
        }
        this.removeComment = function(product, comment, id) {

            var ref= new Firebase('https://brilliant-inferno-9224.firebaseio.com/' + product.assetId + '/comments/');
            ref.child(id).remove(function(error){
                if (error) {
                    console.log("Error:", error);
                } else {
                    console.log("Removed successfully!");
                }
            });
        }
    }]);

    app.directive('commentBox', function() {
        return {
            restrict: 'E',
            templateUrl: '../htdocs/comment-box.html'
        }
    });
})();