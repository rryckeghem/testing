sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: testapp",
		defaults: {
			page: "ui5://test-resources/testapp/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "testapp/",
				never: "test-resources/testapp/"
			},
			loader: {
				paths: {
					"testapp": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for testapp"
			},
			"integration/opaTests": {
				title: "Integration tests for testapp"
			}
		}
	};
});
