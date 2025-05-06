sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
 ], (Controller,formatter) => {
    "use strict";

    return Controller.extend("dialogfragment.controller.mybank_details", {
        // formatter declearation
        formatter: formatter,
        onInit() {
         
            //setting Global JSON Model
            // if after declear the model in manifest.json and data not showing in ui, that time we write code
            //  in controller to load the data in ui
            // this._setGlobalModel();


            // Checking browser language  and setting the global resource model
            this._setGlobalLanguage();

            // get the user profile
            this.getUserProfile();


            // this is one way to apply image 
            // let oProfileModel= new sap.ui.model.json.JSONModel({
            //     profile: sap.ui.require.toUrl("dialogfragment/images/profile.png") });
            //     this.getView().setModel(oProfileModel);



      //    remove this from locally and create json file inside the model and decleared json globally inside the manifest .json 
        //   let oData = {
        //      accountdetails: {
        //         accountNum: "0000000000",
        //         name: "Neha Kumari",
        //         ifsc: "56443",
        //         customerId:"54543",
        //         address:{
        //         city:"Dhanbad",
        //         postalcode:"65544",
        //         housenumber:"05",
        //         street:"Wall Street",
        //         state:"Jharkhand",
        //         country:"India",
        //     }
        //      },
        //      IfsCode:"000000000",


        //     //  use this data and bind in list and it is called aggagation binding in view so see view how it bind to model 
        //     // state name perform expression binding in view in info,heilight, and infostate so check how it works
        //      carddetails:[
        //         {
        //         cardtype:"debit card",
        //         cardnumber:"00000000",
        //         cardcompany:"master card",
        //         assignmentdate:"assigned on 23 Aug 2020",
        //         state:"true"
        //   },
        //   {
        //     cardtype:"credit card",
        //         cardnumber:"00000000008",
        //         cardcompany:"master card",
        //         assignmentdate:"assigned on 14 Feb 2018",
        //         state:"false"
        //   },
        //   {
        //     cardtype:"debit card",
        //         cardnumber:"0000000098",
        //         cardcompany:"master card",
        //         assignmentdate:"assigned on 29 Sep 2022",
        //         state:"true"
        //   },
        // ]
        //    };

           
        

        //   let oModel = new sap.ui.model.json.JSONModel();
        //     oModel.setData(oData);
        //     // oBankDetails is model name
        //     this.getView().setModel(oModel, "oBankDetails");



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
            


            // Checking browser language  and setting the global resource model

        //     var appLang;
        //     if (navigator.language == "es")
        //         appLang = "i18n_es";

        //     else if (navigator.language == "en")
        //         appLang = "i18n";

        //     else
        //         appLang = "i18n";


        //     var i18nModel = this.getOwnerComponent().getModel(appLang);
        //     this.getOwnerComponent().setModel(i18nModel, "i18n")


         },

          // add onOpenBankDetails event in bankdetails.fragment file in open button
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
        // add onCloseBankDetails event in moredetails.fragment file in close button 
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
        },

        // call method globally 
       // if after declear the model in manifest.json and data not showing in ui, that time we write code
            //  in controller to load the data in ui
        // _setGlobalModel:function(){
        //     let oModel = this.getOwnerComponent().getModel("oBankDetails");
        //     this.getView().setModel(oModel);
        //
        // },

        getUserProfile:function(){
            let oProfileModel= new sap.ui.model.json.JSONModel({
             profile: sap.ui.require.toUrl("dialogfragment/images/profile.png") });
             this.getView().setModel(oProfileModel);
        },

        	/**
		 * Creates a message for a selection change event on the chart
         * Without refactoring the code
		 */
		// onSelectionChanged: function (oEvent) {
        //     // debugger;
		// 	var oSegment = oEvent.getParameter("segment");
        //     let oValue= oSegment.getValue()
        //     let empsalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary");
		// 	let percentageVal = (oValue / empsalary)*100;
		// 	sap.m.MessageToast.show(oSegment.getLabel() + " : " + ((percentageVal >50) ? "Critical" : "Moderate"));
		// },

        // With refactoring the code
        onSelectionChanged: function (oEvent) {
            // debugger;
			var oSegment = oEvent.getParameter("segment"),
             oValue= oSegment.getValue(),
             empsalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
			 percentageVal = (oValue / empsalary)*100;
			sap.m.MessageToast.show(oSegment.getLabel() + " : " + ((percentageVal >50) ? "Critical" : "Moderate"));
		},



        _setGlobalLanguage: function(){
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
        


    });
});