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
        // Display a text element whose text is derived from the model object
        //(/) at the beginning of the binding path denotes an absolute binding path.
		new Text({text: "{/grettingText}"}).placeAt("content");
	});


});