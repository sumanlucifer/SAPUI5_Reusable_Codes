onManageBOQItemPress: function (oEvent) {
            var sPONumber = this.getView().getBindingContext().getObject().PONumber;
            var mBindingParams = oEvent.getParameters().getParameter("bindingParams");
            mBindingParams.parameters["expand"] = "BOQGroups";
            mBindingParams.parameters["navigation"] = { "ParentLineItemSet": "BOQGroups" };
            mBindingParams.parameters["treeAnnotationProperties"] = { "hierarchyLevelFor": 'HierarchyLevel', "hierarchyNodeFor": 'ID', "hierarchyParentNodeFor": 'ParentNodeID' };
            mBindingParams.filters.push(new sap.ui.model.Filter("PONumber", sap.ui.model.FilterOperator.EQ, sPONumber));
            mBindingParams.sorter.push(new sap.ui.model.Sorter("CreatedAt", true));
           // mBindingParams.sorter.push(new sap.ui.model.Sorter("MaterialCode", true));
        },