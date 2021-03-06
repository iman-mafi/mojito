/*
 * This is a basic func test for a Common application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Common: routeparamssimpleclient");

    suite.add(new Y.Test.Case({

        "test routeparamssimpleclient": function() {
	        var that = this;
            Y.one('#routeParamsSimpleButton').simulate('click');
            that.wait(function(){
	            Y.Assert.areEqual('Input Parameters Testing', Y.one('#iptitle').get('innerHTML').match(/Input Parameters Testing/gi));
	            Y.Assert.areEqual('ROUTE Parameters', Y.one('#rptitle').get('innerHTML').match(/ROUTE Parameters/gi));
	            Y.Assert.areEqual('All route params', Y.one('#desc').get('innerHTML').match(/All route params/gi));
	            Y.Assert.areEqual('foo ==&gt; fooval', Y.all('#keyandvalue').item(0).get('innerHTML').match(/foo ==&gt; fooval/gi));
	            Y.Assert.areEqual('foo ==&gt; fooval', Y.all('#keyandvalue').item(0).get('innerHTML').match(/foo ==&gt; fooval/gi));
	            Y.Assert.areEqual('fooval', Y.one('#foo').get('innerHTML').match(/fooval/gi));       
            }, 4000);
        }

    }));

    Y.Test.Runner.add(suite);
});