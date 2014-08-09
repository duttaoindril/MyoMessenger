var myFirebaseRef = new Firebase("https://myomessenger.firebaseio.com/");

function TestCase(testdata)
{
    for (var i in testdata)
    {
        if (testdata.hasOwnProperty(i))
        {
            this[i] = testdata[i];
        }
    }
}

function DashboardCtrl($http)
{
    myFirebaseRef.on("value", function(snapshot)
    {
        this.tests = [];
        $http.get(snapshot.val()).success(this.populateTestData.bind(this));
    });
}

DashboardCtrl.prototype.populateTestData = function(data)
{
    for (var test in data)
    {
        this.tests.push(new TestCase(data[test]));
    }
};

var app = angular.module('myApp', []);
