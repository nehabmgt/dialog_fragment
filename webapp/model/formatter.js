sap.ui.define([], () => {
	"use strict";

	return {

         // this is called single comment line
		/* this /*  called multiple comments line */

		// In live scenario projects this is pattern to write comments based on work ,what we done 
		/* 
		 @param Number
		 @ return Number
		 Formatting the display value of Donut chart
		*/

		// begin (single line comments)

        getPercentage: function(oValue){
			// let empsalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary");
			// let percentageVal = (oValue / empsalary)*100;

			// this is called code Refactoring  (onces write let and put , then write next line code without using let again)
			let empsalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
			 percentageVal = (oValue / empsalary)*100;
			return percentageVal;
		},
        //   without code refactoring, once code work properly then use code refactoring
		// getState: function(oValue){
		// 	let empsalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary");
		// 	let percentageVal = (oValue / empsalary)*100;
		//    if(percentageVal > 60){
		// 	return "Error"
		//    }
		//    else if(percentageVal > 40){
		// 	return "Critical"
		//    }	
		//    else{
		// 	return "Good"
		//    }
		// }


		// this is called code Refactoring  (onces write let and put , then write next line code without using let again and without using curle braces{} we can write if else condition )

		/* 
		 @param Number
		 @ return Number
		 Formatting the semantic color value of Donut chart
		*/
		// end (single line comments)
		getState: function(oValue){
			let empsalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
			 percentageVal = (oValue / empsalary)*100;
		   if(percentageVal > 60)
			return "Error"
		   else if(percentageVal > 40)
			return "Critical"	
		   else
			return "Good"
		   
		}
		





	};
});