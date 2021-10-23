 onViewBOQItemPress: function (oEvent) {
            var sBOQItemPath = oEvent.mParameters.getSource().getBindingContext().getPath();
            var sDialogTitle = oEvent.mParameters.getSource().getBindingContext().getObject().Name + " Items";
            var oDetails = {};
            oDetails.controller = this;
            oDetails.view = this.getView();
            oDetails.sBOQItemPath = sBOQItemPath;
            oDetails.title = sDialogTitle;
            if (!this.boqDialog) {
                this.boqDialog = Fragment.load({
                    id: oDetails.view.getId(),
                    name: "com.agel.mmts.vendorPersona.view.fragments.PODetails.ViewBOQItems",
                    controller: oDetails.controller
                }).then(function (oDialog) {
                    // connect dialog to the root view of this component (models, lifecycle)
                    oDetails.view.addDependent(oDialog);
                    oDialog.bindElement({
                        path: oDetails.sBOQItemPath
                    });
                    oDialog.setTitle(oDetails.title)
                    if (Device.system.desktop) {
                        oDialog.addStyleClass("sapUiSizeCompact");
                    }
                    return oDialog;
                });
            }
            this.boqDialog.then(function (oDialog) {
                oDetails.view.addDependent(oDialog);
                oDialog.bindElement({
                    path: oDetails.sBOQItemPath,
                });
                oDialog.open();
            });
        },