sap.ui.require(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (JSONModel, XMLView, BindingMode, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
		var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");
      // Create a JSON model from an object literal
      var oModel = new JSONModel({
        firstName: "Harry",
        lastName: "Potter",
        enabled: true,
        address: {
          street: "Dietmar-Hopp-Allee 16",
          city: "Walldorf",
          zip: "69190",
          country: "Germany",
        },
        salesAmount: 12345.6789,
        currencyCode: "EUR",
      });
      // oModel.setDefaultBindingMode(BindingMode.OneWay)

      // Assign the model object to the SAPUI5 core
      sap.ui.getCore().setModel(oModel);
      var oResourceModel = new ResourceModel({
        bundleName: "sap.ui.demo.data.binding.i18n.i18n",
        supportedLocales: ["", "de"],
        fallbackLocale: "",
      });

      // Assign the model object to the SAPUI5 core using the name "i18n"
      sap.ui.getCore().setModel(oResourceModel, "i18n");

      // Display the XML view called "App"
	  //The XML view is now created as a named object called oView.
      var oView = new XMLView({
        viewName: "sap.ui.demo.data.binding.view.App",
      });

      // Register the view with the message manager
      sap.ui.getCore().getMessageManager().registerObject(oView, true);
	  oView.placeAt("content")
      // XMLView.create({
      //     viewName: "sap.ui.demo.data.binding.view.App"
      // }).then(function (oView) {
      //     oView.placeAt("content");
      // });
    });
  }
);
