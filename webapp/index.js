sap.ui.require([
	"sap/m/Text",
    "sap/ui/model/json/JSONModel"
], function (Text,JSONModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
        var oModel = new JSONModel({
            grettingText: "Hi, my name is Pinky"
        });
        sap.ui.getCore().setModel(oModel);

		// Create a text UI element that displays a hardcoded text string
		new Text({text: "Hi, my name is Pinky"}).placeAt("content");
	});


});