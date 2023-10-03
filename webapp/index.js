sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/BindingMode",
	"sap/ui/model/resource/ResourceModel"


], function (JSONModel, XMLView, BindingMode, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			panelHeaderText: "Data Binding Basics"

		});
		// oModel.setDefaultBindingMode(BindingMode.OneWay)


		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.data.binding.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});


		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		// new XMLView({
		// 	viewName: "sap.ui.demo.data.binding.view.App"
		// }).placeAt("content");
        XMLView.create({
            viewName: "sap.ui.demo.data.binding.view.App"
        }).then(function (oView) {
            oView.placeAt("content");
        });

	});
});