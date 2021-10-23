     onSearchGoodReciepient: function (sGoodsReciepientValue) {
                var GoodReciepientFilter = new sap.ui.model.Filter({
                    path: "GoodsRecipient",
                    operator: sap.ui.model.FilterOperator.EQ,
                    value1: sGoodsReciepientValue
                });
                var filter = [];
                filter.push(GoodReciepientFilter);
                this.getOwnerComponent().getModel().read("/IssuedMaterialReserveSet", {
                    filters: [filter],
                    urlParameters: {
                        "$expand": "IssuedMaterials/IssuedMaterialParents"
                    },
                    success: function (oData, oResponse) {
                        this.dataBuilding(oData.results);
                        this.getViewModel("objectViewModel").setProperty("/isItemFieldsVisible", true);
                        this.getViewModel("objectViewModel").setProperty("/isButtonVisible", false);
                    }.bind(this),
                    error: function (oError) {
                        sap.m.MessageBox.error(JSON.stringify(oError));
                    }
                });
            },