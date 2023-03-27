const axios = require('axios');

const consumer_key = 'Lhm2Kpp6ij6iaEoks9k8Ru0bRf7iqou5';
const consumer_secret = '16QlnzxVPN5WGKql';
const auth = Buffer.from(`${consumer_key}:${consumer_secret}`).toString('base64');

const access_token_url = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const lipa_na_mpesa_url = 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

axios.get(access_token_url, { headers: { Authorization: `Basic ${auth}` } })
    .then((response) => {
        const access_token = response.data.access_token;
        const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, '');
        const password = Buffer.from(`${YOUR_LNM_PASSKEY}${YOUR_SHORTCODE}${timestamp}`).toString('base64');
        const headers = {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        };
        const data = {
            BusinessShortCode: YOUR_SHORTCODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: YOUR_AMOUNT,
            PartyA: YOUR_PHONE_NUMBER,
            PartyB: YOUR_SHORTCODE,
            PhoneNumber: YOUR_PHONE_NUMBER,
            CallBackURL: YOUR_CALLBACK_URL,
            AccountReference: YOUR_ACCOUNT_REFERENCE,
            TransactionDesc: YOUR_TRANSACTION_DESCRIPTION
        };
        axios.post(lipa_na_mpesa_url, data, { headers })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    })
    .catch((error) => {
        console.error(error.response.data);
    });
