1>>>>>//       Iterating the service call using foreach ES6 Method

this.PrintDocumentService(result);

PrintDocumentService: function (result) {



            result.forEach((item) => {
                var sContent = that.callPrintDocumentService({
                    RequestNo: item.RequestNo
                })
                sContent.then(function (val) {
                    item.Content = val
                    debugger;
                });
            })
        },
        callPrintDocumentService: function (reqID) {
            var promise = jQuery.Deferred();
            var othat = this;
            var oView = this.getView();
            var oDataModel = oView.getModel();
            //console.log(oPayLoad);
            return new Promise((resolve, reject) => {
                oDataModel.create("/PrintDocumentEdmSet", reqID, {
                    success: function (data) {
                        resolve(data.Bytes);
                    },
                    error: function (data) {
                        reject(data);
                    },
                });
            });
        },
            
            
//2>>>>>  adding object to arrary             
            
            onAddOuterPackagingPress: function (oEvent) {
                var oModel = this.getViewModel("outerPackagingModel");
                var oItems = oModel.getData().map(function (oItem) {
                    return Object.assign({}, oItem);
                });

                oItems.push({
                    PackagingType: "",
                    PackagingDimensions: "",
                    Remarks: "",
                    OuterPackagingTypeId: ""
                });

                oModel.setData(oItems);
            },
                

                
                
//3>>> Filter elements from an Array

                        aAllData = aAllData.filter((item) => item.OuterPackagingId == null || item.selected);
                
            