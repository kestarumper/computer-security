TOKEN=$(./curlRequestJWT.sh)
curl https://ironbankofbraavos:3000/api/secret \
    --cacert cacert.pem \
    --key alice.key \
    --cert alice.crt \
    -H "Authorization: Bearer ${TOKEN}"