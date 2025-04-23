sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("dialogfragment.controller.mybank_details", {
        onInit() {

            // before loading the application check after remove debugger 
            // debugger

            // if (navigator.language == "es") {
            //     var i18nModel = this.getOwnerComponent().getModel("i18n_es")
            //     this.getOwnerComponent().setModel(i18nModel, "i18n")
            // }
            // else if(navigator.language == "en"){
            //     var i18nModel = this.getOwnerComponent().getModel("i18n")
            //     this.getOwnerComponent().setModel(i18nModel, "i18n")
            // }
            // else{
            //     var i18nModel = this.getOwnerComponent().getModel("i18n")
            //     this.getOwnerComponent().setModel(i18nModel, "i18n")
            // }
            

            // Checking browser language languale and setting the global resource model

            var appLang;
            if (navigator.language == "es")
                appLang = "i18n_es";

            else if (navigator.language == "en")
                appLang = "i18n";

            else
                appLang = "i18n";


            var i18nModel = this.getOwnerComponent().getModel(appLang);
            this.getOwnerComponent().setModel(i18nModel, "i18n")






        },


        onOpenBankDetails: function () {
            //create dialog lazily

            if (!this.moreBankDetails) {
                this.moreBankDetails = this.loadFragment(
                    { name: "dialogfragment.view.fragments.MoreDetails" }
                );
            }

            this.moreBankDetails.then(
                function (oDialog) {
                    oDialog.open();
                });
        },
        onCloseBankDetails: function () {
            this.byId("moreBankDetails").close();
        },

        onOpenDemoBtn: function () {
            if (!this.demoDialog) {
                this.demoDialog = this.loadFragment(
                    { name: "dialogfragment.view.fragments.DemoPopup" }
                )
            }
            this.demoDialog.then(
                function (oDialog) {
                    oDialog.open();
                });
        },

        onCloseDemo: function () {
            this.byId("demoDialog").close();
        }


    });
});