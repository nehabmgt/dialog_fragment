/*global QUnit*/

sap.ui.define([
	"dialogfragment/controller/mybank_details.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mybank_details Controller");

	QUnit.test("I should test the mybank_details controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
