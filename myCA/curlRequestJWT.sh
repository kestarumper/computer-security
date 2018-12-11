# curl https://ironbankofbraavos:3000/login \
#     --cacert cacert.pem \
#     --key alice.key \
#     --cert alice.crt \
#     -X POST \
#     -H "Content-Type: application/json" \
#     -d '{"username":"bogdan.pierozek@gmail.com", "password":"kappa"}'
curl https://ironbankofbraavos:3000/api/login \
    --cacert cacert.pem \
    --key alice.key \
    --cert alice.crt \
    -X POST \
    -d "username=bogdan.pierozek@pwr.edu.pl&password=kappa" \
    -H "Content-Type: application/x-www-form-urlencoded"