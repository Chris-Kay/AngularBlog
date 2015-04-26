(function() {
    var app = angular.module('blog', ['ngSanitize', 'blog-commentBox']);

    app.controller('BlogController',['$http', function($http) {
        var blog = this;
        blog.products = [];

        $http.get('posts.json').success(function(data) {
            blog.products = data;
        });
    }]);

    app.directive('postImage', function() {
        return {
            restrict: 'E',
            'templateUrl': 'post-image.html'
        }
    });
})();