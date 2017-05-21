var cartModule = angular.module('cart', []);
cartModule.controller('cartCtr', ['$scope', function ($scope) {
    $scope.discount = 0.9;
    $scope.items = [{ id: 10001, title: "Web全栈工程师的自我修养 余果", price: 40.80, quantity: 2, linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.4.cwywJs&id=532166746631" },
        { id: 10002, title: "MacBook Pro Retina 15英寸", price: 16088.00, quantity: 1, linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.26.cwywJs&id=45771116847" },
        { id: 10003, title: "Surface Book I5 128G 独显", price: 11088.00, quantity: 1, linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.15.cwywJs&id=525614504276" },
        { id: 10004, title: "Lenovo Yoga3Pro I5 4G", price: 7299.00, quantity: 1, linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.37.cwywJs&id=41541519814" }];
    $scope.add = function (id) {
        angular.forEach($scope.items, function (item, index, array) {
            if (item.id === id) { item.quantity++; }
        })
    };
    $scope.reduce = function (id) {
        angular.forEach($scope.items, function (item, index, array) {
            if (item.id === id) { item.quantity--; }
        })
    };
    //输入框添加keydown事件，避免输入非正整数
    $scope.quantityKeydown = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        var keycode = event.keyCode;
        if ((37 <= keycode && keycode <= 40) || (48 <= keycode && keycode <= 57) || (96 <= keycode && keycode <= 105) || keycode == 8) {
            //方向键↑→ ↓←、数字键、backspace
        }
        else {
            console.log(keycode);
            event.preventDefault();
            return false;
        }
    };
    //keyup事件，当输入数字为0时，重新刷新文本框内容
    $scope.quantityKeyup = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        var keycode = event.keyCode;
        if (48 === keycode || 96 === keycode) {
            target.value = parseInt(target.value);
        }
    };
    //删除商品
    $scope.delete = function (id) {
        $scope.items.forEach(function (item, index) {
            if (item.id == id) {
                if (confirm("确定要从购物车中删除此商品？")) {
                    $scope.items.splice(index, 1);
                    return;
                }
            }
        })
    };
    //计算已选商品数量
    $scope.getQuantites = function () {
        var quantities = 0;
        angular.forEach($scope.items, function (item, index, array) {
            if (item.quantity) {
                quantities += parseInt(item.quantity);
            }
        });
        return quantities;
    };
    //计算合计总金额
    $scope.getTotalAmount = function () {
        var totalAmount = 0;
        angular.forEach($scope.items, function (item, index, array) {
            totalAmount += item.quantity * item.price;
        });
        return totalAmount;
    };
    $scope.alertSubmit = function () { alert("Angular实现购物车"); }
}]);

//3.html
var A = angular.module('myApp', []);
//购物车  加  
A.directive('myAdds', function () {
    return {
        link: function (scope, element, attr) {
            element.click(function () {
                var This = this
                angular.forEach(scope.dataList, function (data, index, array) {
                    if (attr.items == data.items) {
                        data.num = parseInt(data.num) + 1;
                        scope.allPrices();
                        scope.$apply() //刷新视图  
                    }

                });
            });
        }
    }
})
//购物车  减  
A.directive('myMinus', function () {
    return {
        link: function (scope, element, attr) {
            element.click(function () {
                var This = this
                angular.forEach(scope.dataList, function (data, index, array) {

                    if (attr.items == data.items) {

                        if (data.num <= 1) {

                            if (confirm('是否删除该产品')) {
                                data.num = 0;
                                $(This).siblings('input').val(0);
                                scope.allPrices();
                                scope.$apply();
                                //delete array[index];  
                                scope.dataList.splice(index, 1)
                                $(This).parents('tr').remove();
                            }

                        } else {
                            data.num = parseInt(data.num) - 1;
                        };

                        scope.allPrices();
                        scope.$apply();
                    }
                });
            });
        }
    }
})
//全选，全不选  
A.directive('allOrcan', function () {
    return function (scope, element, attr) {
        element.click(function () {
            var isCheck = $(this).find('input').prop('checked');
            if (isCheck) {
                $('input[type=checkbox]').prop('checked', true);
            } else {
                $('input[type=checkbox]').not($('input[type=checkbox]').eq(0)).prop('checked', false);
            }
            angular.forEach(scope.dataList, function (data, index, array) {
                data.Bol = isCheck;
            })
            scope.allPrices();
            scope.$apply();
        })
    }
})
//单选  
A.directive('oneCheck', function () {
    return function (scope, element, attr) {
        element.click(function () {
            var This = this
            angular.forEach(scope.dataList, function (data, index, array) {
                if (attr.items == data.items) {
                    var isCheck = $(This).prop('checked');
                    data.Bol = isCheck;
                    scope.allPrices();
                    scope.$apply();
                }
            })
        });
    }
})






A.controller('myAngular', ['$scope', '$filter', function ($scope, $filter) {
    $scope.dataList = [//初始化购物车的数据  
        { Bol: 'false', name: '洗衣机', num: '1', items: '0', oneprice: '900', price: '' },
        { Bol: 'false', name: '热水器', num: '1', items: '1', oneprice: '110', price: '' },
        { Bol: 'false', name: '空调', num: '1', items: '2', oneprice: '116', price: '' },
        { Bol: 'false', name: '冰箱', num: '1', items: '3', oneprice: '2087', price: '' },
        { Bol: 'false', name: '电磁炉', num: '1', items: '4', oneprice: '135', price: '' },
        { Bol: 'false', name: '被子', num: '1', items: '5', oneprice: '50', price: '' },
        { Bol: 'false', name: '本子', num: '1', items: '6', oneprice: '2', price: '' },
        { Bol: 'false', name: '笔', num: '1', items: '7', oneprice: '115', price: '' },
        { Bol: 'false', name: '杯子', num: '1', items: '8', oneprice: '12', price: '' },
        { Bol: 'false', name: '书', num: '1', items: '9', oneprice: '5', price: '' },
        { Bol: 'false', name: '零食', num: '1', items: '10', oneprice: '13', price: '' }
    ];
    //总价格的计算  
    $scope.allPrices = function () {
        $scope.allprice = 0;
        angular.forEach($scope.dataList, function (data, index, array) {
            data.price = data.num * data.oneprice;
            if (data.Bol == true) {
                $scope.allprice += parseInt(data.price);
            }
        })


        return $scope.allprice;
    };
    //按单价排序  
    $scope.CartSort = function (arg) {
        angular.forEach($scope.dataList, function (data, index, array) {
            arguments.callee['CartSort(' + arg + ')'] = !arguments.callee['CartSort(' + arg + ')']
            $scope.dataList = $filter('orderBy')($scope.dataList, arg, arguments.callee['CartSort(' + arg + ')'])
        })

    }
}])
