callConsumptionReservationService: function (oAdditionalData, aReservationItems) {
                aReservationItems = aReservationItems.map(function (item) {
                    return {
                        Quantity: item.Quantity,
                        IssueMaterialParentId: item.ID
                    };
                });
                var oPayload = {
                    "UserName": "Agel",
                    "Plant": oAdditionalData.Plant,
                    "MovementType": "201",
                    "GoodRecipient": oAdditionalData.GoodRecipient,
                    "CostCenter": oAdditionalData.CostCenter,
                    "WBS": "",
                    "GLAccount": oAdditionalData.GLAccount,
                    "ProfitCenter": oAdditionalData.ProfitCenter,
                    "ParentItem": aReservationItems
                };
                this.mainModel.create("/ConsumptionPostingReserveEdmSet", oPayload, {
                    success: function (oData, oResponse) {
                        if (oData.Success === true) {
                            this.getView().getModel();
                            sap.m.MessageBox.success("The consumption reservation " + "" + oData.ReservationNumber + "" + " has been succesfully created for selected Items!");
                            this.setInitialModel();
                            var objectViewModel = this.getViewModel("objectViewModel");
                        }
                        else {
                            sap.m.MessageBox.error(oData.Message);
                        }
                    }.bind(this),
                    error: function (oError) {
                        // sap.m.MessageBox.success("Something went Wrong!");
                        var objectViewModel = this.getViewModel("objectViewModel");
                        // objectViewModel.setProperty("/isViewQRMode", false);
                    }.bind(this)
                })
            },