const express = require('express');
const router = express.Router();
const loginUser = require('../controllers/admin/userListController');
const ResponseContent = require('../utility/responseContent');
const responseCodes = require('../utility/responseCode');

router.post('/user', loginUser.loginUser); 
// router.post('/user', (req, res) => {
//     // console.log(req.body);
//     if (req.body ){
//         loginUser.createUser(req.body, (result) => {
//           handleResult(res, result);
//         });
//       } else
//         invalidateRequest(res, 'Invalid Data');
    
//   });

// async function invalidateRequest(res, message) {
//     if (invalidateRequest.caller == null) {
//       return ('CallLevel was called from the top level.');
//     }
//     return ('CallLevel was called by another function.');
  
//     const responseContent = new ResponseContent(responseCodes.INVALID_REQUEST.code, responseCodes.INVALID_REQUEST.message + (message ? `:${message}` : ''), null, null);
//     await setJSONHeader(res, responseContent);
//     res.json(responseContent);
//   }

//   async function handleResult(res, result) {
//     if (result instanceof Error || result instanceof CustomError) {
//       const responseContent = new ResponseContent(responseCodes.FAILED.code, '', null, result);
//       res.statusCode = responseContent.status;
//       res.setHeader('Content-type', 'application/json');
//       res.json(responseContent);
//     } else if (result instanceof ResponseContent) {
//       const responseContent = result;
//       res.statusCode = responseContent.status;
//       res.setHeader('Content-type', 'application/json');
//       res.json(responseContent);
//     } else {
//       const responseContent = getUnExpectedErrorContent();
//       res.setHeader('Content-type', 'application/json');
//       res.statusCode = responseContent.status;
//       res.json(responseContent);
//     }
//   }

module.exports = router;
