// preRegistration object 
export const preRegistration = {
     email: "",
     firstName: "",
     lastName: "",
     gender: "",
     educationLevel: "",
     country: "",
     mainInstitution: "",
     hasAttended: "",
     mail: "",
}

// registration object 
export const registration = {
     email: "",
     firstName: "",
     lastName: "",
     gender: "",
     educationLevel: "",
     position: "",
     mainInstitution: "",
     institutionalAddress: "",
     country: "",
     region: "",
     city: "",
     zipCode: "",
     modality: "",
     firstTime: "",
     specialMealReqs: "",
     motherLanguage: "",
}

// receipt files object
export const fileReceipts = {
     registrationPaymentReceipt: null,
     dinnerPaymentReceipt: null,
     accompanyingPaymentReceipt: null,
}

// abstract object
export const abstract = {
     email: "",
     firstName: "",
     lastName: "",
     title: "",
}

// abstract files object
export const abstractFiles = {
     email: "",
     editableFormat: null,
     pdfFormat: null,
}

// ------------------------------------------------------------------------------------------------
// pre registration POST
// ------------------------------------------------------------------------------------------------
export const sendPreRegistration = (navigateOnSuccess) => {
     setTimeout(() => {
          navigateOnSuccess();
     }, 1000)

     // export const sendPreRegistration = (formData, navigateOnSuccess, setErrorMessage, setIsDisabled) => {

     // fetch(preRegistrationURL, {
     //      method: 'POST',
     //      headers: {
     //           'Content-Type': 'application/json'
     //      },
     //      body: JSON.stringify({ preRegistration: formData })
     // })
     //      .then(response => response.json())
     //      .then(data => {
     //           // reponse
     //           console.log("data: " + data);
     //           switch (data) {
     //                case "success":
     //                          navigateOnSuccess();
     //                          break;
     //                     case "already-pre-registered":
     //                          setErrorMessage("The email provided is already pre-registered.");
     //                          // "re-enables" the button
     //                          setIsDisabled(false);
     //                          break;
     //                     default:
     //                          console.log("data: " + data);
     //                          setErrorMessage(data);
     //                          // "re-enables" the button
     //                          setIsDisabled(false);
     //                          break;
     //                }
     //           })
     //           .catch(error => {
     //                // Error handling
     //                console.error("error: " + error);
     //                setErrorMessage("An unexpected error ocurred.");
     //                // "re-enables" the button
     //                setIsDisabled(false);
     //           });
}


// ------------------------------------------------------------------------------------------------
// registration POST
// ------------------------------------------------------------------------------------------------
export const sendRegistration = (navigateOnSuccess) => {
     // export const sendRegistration = (formData, files, navigateOnSuccess, setErrorMessage, setIsDisabled) => {

     setTimeout(() => {
          navigateOnSuccess();
     }, 1000);

     // fetch(registrationURL, {
     //      method: 'POST',
     //      headers: {
     //           'Content-Type': 'application/json'
     //      },
     //      body: JSON.stringify({ registration: formData })
     // })
     //      .then(response => response.json())
     //      .then(data => {
     //           // response
     //           console.log("data: " + data);
     //           switch (data) {
     //                case "success":
     //                     sendReceipts(files, navigateOnSuccess, setErrorMessage, setIsDisabled);
     //                     break;

     //                case "already-registered":
     //                     setErrorMessage("The email provided is already registered.");
     //                     // "re-enables" the button
     //                     setIsDisabled(false);
     //                     break;

     //                default:
     //                     console.log("data: " + data);
     //                     setErrorMessage(data);
     //                     // "re-enables" the button
     //                     setIsDisabled(false);
     //                     break;
     //           }
     //      })
     //      .catch(error => {
     //           // Error handling
     //           console.error("error: " + error);
     //           setErrorMessage(error.message);
     //           // "re-enables" the button
     //           setIsDisabled(false);
     //      });
}


// ------------------------------------------------------------------------------------------------
// registration receipts POST
// ------------------------------------------------------------------------------------------------
// const sendReceipts = (files, navigateOnSuccess, setErrorMessage, setIsDisabled) => {

// It is not mandatory to send the receipts.
// Thus, if at least one file has been uploaded, the fetch will be executed.
//      if (files.registrationPaymentReceipt || files.dinnerPaymentReceipt || files.accompanyingPaymentReceipt) {

//           const appendedFiles = new FormData();
//           appendedFiles.append('registration', files.registrationPaymentReceipt);
//           appendedFiles.append('dinner', files.dinnerPaymentReceipt);
//           appendedFiles.append('accompanying', files.accompanyingPaymentReceipt);

//           fetch(registrationReceiptsURL, {
//                method: 'POST',
//                // No 'Content-Type' so that the browser will automatically use the adequate kind. 
//                body: appendedFiles
//           })
//                .then(response => response.json())
//                .then(data => {
//                     // response
//                     console.log("data: " + data);
//                     navigateOnSuccess();
//                })
//                .catch(error => {
//                     // Error handling
//                     console.error("error: " + error.message);
//                     setErrorMessage("There has been an error with the files.");
//                     // "re-enables" the button
//                     setIsDisabled(false);
//                });
//      } else {
//           // If no files are uploaded then no fetch will be executed and user will be redirected to the success page.
//           navigateOnSuccess();
//      }

// }


// ------------------------------------------------------------------------------------------------
// abstract POST
// ------------------------------------------------------------------------------------------------
export const sendAbstract = (navigateOnSuccess) => {
     // export const sendAbstract = (formData, files, navigateOnSuccess, setErrorMessage, setIsDisabled) => {

     setTimeout(() => {
          navigateOnSuccess();
     }, 1000);

     // fetch(abstractURL, {
     //      method: 'POST',
     //      headers: {
     //           'Content-Type': 'application/json'
     //      },
     //      body: JSON.stringify({ abstract: formData })
     // })
     //      .then(response => response.json())
     //      .then(data => {
     //           // response
     //           console.log("data: " + data);

     //           switch (data) {
     //                // Sends the abstract files if first POST request is successful
     //                case "data-validated":
     //                     sendAbstractFiles(files, navigateOnSuccess, setErrorMessage, setIsDisabled);
     //                     break;

     //                case "already-submitted":
     //                     setErrorMessage("The email provided has already sent an abstract.");
     //                     // "re-enables" the button
     //                     setIsDisabled(false);
     //                     break;

     //                default:
     //                     console.log("data: " + data);
     //                     setErrorMessage(data);
     //                     // "re-enables" the button
     //                     setIsDisabled(false);
     //                     break;
     //           }
     //      })
     //      .catch(error => {
     //           // Error handling
     //           console.error("error: " + error);
     //           setErrorMessage(error.message);
     //           // "re-enables" the button
     //           setIsDisabled(false);
     //      });
}


// ------------------------------------------------------------------------------------------------
// abstract files POST
// ------------------------------------------------------------------------------------------------
// const sendAbstractFiles = (files, navigateOnSuccess, setErrorMessage, setIsDisabled) => {

     // const appendedFiles = new FormData();
     // appendedFiles.append('editableFormat', files.editableFormat);
     // appendedFiles.append('pdfFormat', files.pdfFormat);

     // fetch(abstractFilesURL, {
     //      method: 'POST',
     //      // No 'Content-Type' so that the browser will automatically use the adequate kind. 
     //      body: appendedFiles
     // })
     //      .then(response => response.json())
     //      .then(data => {
     //           // response
     //           console.log("data: " + data);
     //           navigateOnSuccess();
     //      })
     //      .catch(error => {
     //           // Error handling
     //           console.error("error: " + error.message);
     //           setErrorMessage("There has been an error with the files.");
     //           // "re-enables" the button
     //           setIsDisabled(false);
     //      });
// }