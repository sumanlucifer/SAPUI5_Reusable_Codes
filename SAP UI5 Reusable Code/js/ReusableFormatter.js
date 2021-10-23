formatFileSize: function (sValue) {
            if (jQuery.isNumeric(sValue)) {
                return FileSizeFormat.getInstance({
                    binaryFilesize: false,
                    maxFractionDigits: 1,
                    maxIntegerDigits: 3
                }).format(sValue);
            } else {
                return sValue;
            }
        },

            
            
//            Date Conversion
            
        onDateConvert: function (oDate) {
            var date = new Date(oDate);

            return date.toDateString();
        },
            
            
//            File URL Return
            
            
            
            fileContent: function (fileName, fileContent) {
        
            if (fileName && fileContent) {
                var fileExtention = fileName.split(".")[1];
                if (fileExtention.includes("csv") || fileExtention.includes("CSV")) {
                    var decodedPdfContent = atob(fileContent);
                    var byteArray = new Uint8Array(decodedPdfContent.length)
                    for (var i = 0; i < decodedPdfContent.length; i++) {
                        byteArray[i] = decodedPdfContent.charCodeAt(i);
                    }
                    var blob = new Blob([byteArray.buffer], { type: 'text/csv' });
                    var _pdfurl = URL.createObjectURL(blob);
                    return _pdfurl;
                }
                if (fileExtention.includes("jpg") || fileExtention.includes("JPG")) {
                    var decodedPdfContent = atob(fileContent);
                    var byteArray = new Uint8Array(decodedPdfContent.length)
                    for (var i = 0; i < decodedPdfContent.length; i++) {
                        byteArray[i] = decodedPdfContent.charCodeAt(i);
                    }
                    var blob = new Blob([byteArray.buffer], { type: 'image/jpg' });
                    var _pdfurl = URL.createObjectURL(blob);
                    return _pdfurl;
                }
                if (fileExtention.includes("png") || fileExtention.includes("PNG")) {
                    var decodedPdfContent = atob(fileContent);
                    var byteArray = new Uint8Array(decodedPdfContent.length)
                    for (var i = 0; i < decodedPdfContent.length; i++) {
                        byteArray[i] = decodedPdfContent.charCodeAt(i);
                    }
                    var blob = new Blob([byteArray.buffer], { type: 'image/png' });
                    var _pdfurl = URL.createObjectURL(blob);
                    return _pdfurl;
                }
                if (fileExtention.includes("jpeg") || fileExtention.includes("JPEG")) {
                    var decodedPdfContent = atob(fileContent);
                    var byteArray = new Uint8Array(decodedPdfContent.length)
                    for (var i = 0; i < decodedPdfContent.length; i++) {
                        byteArray[i] = decodedPdfContent.charCodeAt(i);
                    }
                    var blob = new Blob([byteArray.buffer], { type: 'image/jpeg' });
                    var _pdfurl = URL.createObjectURL(blob);
                    return _pdfurl;
                };
                if (fileExtention.includes("pdf") || fileExtention.includes("PDF")) {
                    var decodedPdfContent = atob(fileContent);
                    var byteArray = new Uint8Array(decodedPdfContent.length)
                    for (var i = 0; i < decodedPdfContent.length; i++) {
                        byteArray[i] = decodedPdfContent.charCodeAt(i);
                    }
                    var blob = new Blob([byteArray.buffer], { type: 'application/pdf' });
                    var _pdfurl = URL.createObjectURL(blob);
                    return _pdfurl;
                }
            }
        },
            
            
//        UI fields visibility based  on   Odata response 
            
            viewSendForApproval : function(oData,status){           
            //debugger;    
            if ( oData )
            {
                if ( oData.length > 0 && status == null ){
                    return true;
                }
                else{
                    //  if (status){
                    return false;
                    //   }
                }                   
            }else{
                return false;
            }
        },
            
            
            
//            Return color text based on data status
            
                getPackingListStatusColor: function (status) {
            if (status === 'Saved')
                return 'Information';
            if (status === 'QR Code Generated')
                return 'Indication07';
            if (status === 'Sent for QR Code Approval')
                return 'Warning';
            if (status === 'Ready to Dispatch')
                return 'warning';
            if (status === 'Dispatch Initiated')
                return 'Success';
            if (status === 'Arrived')
                return 'Indication08';
            if (status === 'Received')
                return 'Success';
            else 
                return 'Information';    

        },
