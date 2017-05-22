"use strict"
app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", routeFn]);
function routeFn($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "views/main/main.html",
            controller: "mainCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/main/mainCtrl.js");
                }]
            }
        })
        // 居家
        .state("home", {
            url: "/home",
            templateUrl: "views/home/home.html",
            controller: "homeCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/home/homeCtrl.js");
                }]
            }
        })
        .state("quilt", {
            url: '/quilt',
            template: '<div ui-view></div>',
            abstract: true
        })
        // 居家 被枕
        .state("quilt.quilt1", {
            url: "/quilt1",
            templateUrl: "views/home/quilt/quilt1.html",
            controller: "quilt1Ctrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/home/quilt/quilt1Ctrl.js");
                }]
            }
        })

        .state("kitchenware", {
            url: "/kitchenware",
            templateUrl: "views/kitchenware/kitchenware.html",
            controller: "kitchenCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/kitchenware/kitchenCtrl.js");
                }]
            }
        })
        .state("accessorice", {
            url: "/accessorice",
            templateUrl: "views/accessorice/accessorice.html",
            controller: "accessCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/accessorice/accessCtrl.js");
                }]
            }
        })
        .state("groceries", {
            url: "/groceries",
            templateUrl: "views/groceries/groceries.html",
            controller: "grocerCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/groceries/grocerCtrl.js");
                }]
            }
        })
        .state("foods", {
            url: "/foods",
            templateUrl: "views/foods/foods.html",
            controller: "foodsCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/foods/foodsCtrl.js");
                }]
            }
        })
        .state("interest", {
            url: "/interest",
            templateUrl: "views/interest/interest.html",
            controller: "interestCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/interest/interestCtrl.js");
                }]
            }
        })
        .state("user", {
            url: '/user',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state("user.login", {
            url: "/login",
            templateUrl: "views/login/login.html",
            controller: "loginCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/login/loginCtrl.js");
                }]
            }
        })
        .state("user.regist", {
            url: "/regist",
            templateUrl: "views/regist/regist.html",
            controller: "registCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/regist/registCtrl.js");
                }]
            }
        })
        //人气推荐
        .state("recommend", {
            url: "/recommend",
            templateUrl: "views/recommend/recommend.html",
            controller: "recommendCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/recommend/recommendCtrl.js");
                }]
            }
        })
};