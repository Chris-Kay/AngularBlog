(function() {
    var app = angular.module('blog', ['ngSanitize', 'firebase', 'blog-commentBox']);

    var firebaseRef = new Firebase('https://brilliant-inferno-9224.firebaseio.com/');

    app.controller('BlogController', function($firebaseObject) {
        var blog = this;
        blog.products = [];

        blog.products = $firebaseObject(firebaseRef);

    });

    app.directive('postImage', function() {
        return {
            restrict: 'E',
            'templateUrl': '../htdocs/post-image.html'
        }
    });
})();