sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("dialogfragment.controller.mybank_details", {
        onInit() {
        },


        onOpenBankDetails: function(){
            //create dialog lazily

            if(!this.moreBankDetails){
                this.moreBankDetails = this.loadFragment(
                   {name: "dialogfragment.view.fragments.MoreDetails"}
                );
            }

            this.moreBankDetails.then(
                function(oDialog){
                  oDialog.open();
                });
        },
        onCloseBankDetails:function(){
            this.byId("moreBankDetails").close();
        },

        onOpenDemoBtn:function(){
            if(!this.demoDialog){
                this.demoDialog = this.loadFragment(
                    {name: "dialogfragment.view.fragments.DemoPopup"}
                )
            }
            this.demoDialog.then(
                function(oDialog){
                    oDialog.open();
                 });
        },

        onCloseDemo:function(){
            this.byId("demoDialog").close();
        }


    });
});