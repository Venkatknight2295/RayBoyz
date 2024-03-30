const express = require('express');
const axios = require('axios');
const port = 3002;
const app = express();
const uniqid = require("uniqid");
const sha256 = require("sha256");


const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox"
const Merchant_ID = " PGTESTPAYUAT"
const SALT_INDEX = 1;
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"



app.get('/', (req, res) => {
    res.send("PhonePe app is working");
});


app.get("/pay", (req, res) => {
const payEndpoint = "/pay/v1/pay";
const transactionId = uniqid();
const userId = 123
const payload = {
    "merchantId": Merchant_ID,
    "merchantTransactionId": transactionId,
    "merchantUserId": "MU933037302229373",
    "amount": 10000,
    "redirectUrl": `http://localhost:3002/redirect-url/${transactionId}`,
    "redirectMode": "REDIRECT",
    "mobileNumber": "9999999999",
    "deviceContext": {
      "deviceOS": "ANDROID"
    },
    "paymentInstrument": {
      "type": "UPI_INTENT",
      "targetApp": "com.phonepe.app"
    }
  }



//   SHA256(base64 encoded payload + “/pg/v1/pay” +
//   salt key) + ### + salt index

const bufferObj = Buffer.from(JSON.stringify(payload), "utf-8");
const base64EncodedPayload = bufferObj.toString("base64");
const xVerify = sha256(base64EncodedPayload + payEndpoint + SALT_KEY) + "###" + SALT_INDEX;


const options = {
  method: 'post',
  url: `${PHONE_PE_HOST_URL}${payEndpoint}`,
  headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
				},
data: {
    request: base64EncodedPayload,
}
};
axios
  .request(options)
      .then(function (response) {
      console.log(response.data);
      res.send(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
});


app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
});
