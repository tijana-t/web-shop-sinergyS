angular.module("customFilters", [])
    .filter("unique", function () {
        return function (data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var results = [];
                var keys = {};
                for (var i = 0; i < data.length; i++) {
                    var val = data[i][propertyName];
                    if (angular.isUndefined(keys[val])) {
                        keys[val] = true;
                        results.push(val);
                    }
                }
                return results;
            } else {
                return data;
            }
        }
    })
    .filter("range", function ($filter) {
        return function (data, page, size) {
            if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                var start_index = (page - 1) * size;
                if (data.length < start_index) {
                    return [];
                } else {
                    return $filter("limitTo")(data.splice(start_index), size);
                    //ako smo na zadnjoj strani, gdje imamo 2 elementa, a size je 3,
                    // bez problema ce uzeti onoliko elemenata koliko imamo
                }
            } else {
                return data;
            }
        }
    })
    .filter("pageCount", function () {
        return function (data, size) {
            if (angular.isArray(data)) {
                var result = [];
                for (var i = 0; i < Math.ceil(data.length / size); i++) {
                    result.push(i);
                }
                return result;
            } else {
                return data;
            }
        }
    })
    .filter('capitalize', function () {
        return function (text) {
            if (text != null || (typeof (text) != 'undefined')) {
                text = text.toLowerCase();
                return text.substring(0, 1).toUpperCase() + text.substring(1);
            }
        }
    })
    .filter('rangeFilter', function () {
        return function (items, slider) {
            return items.filter(function (item) {
                return (item.price > slider.min && item.price < slider.max);
            });
        }

    })
    .filter('filterTag', function () {
        return function (items, tagChanged) {
            return items.filter(function (item) {
                if (tagChanged == null) {
                    return item.tags;
                } else {
                    return item.tags.includes(tagChanged);
                }
            })

        }
    });