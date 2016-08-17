curl --include --request POST http://localhost:3000/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'


  curl --include --request POST http://localhost:3000/beats \
    --header "Content-Type: application/json" \
    --data '{
      "name": "roll",
    }'


curl --include --request POST "http://localhost:3000/beats" \
  --header "Authorization: Token token=BAhJIiVjNDMxMWViNzlmNWQxMTY0Y2Y1YzczNjA3ZjVhOWM1NQY6BkVG--c3d130a026b87b52f222be28aad09f52243eb542" \
  --header "Content-Type: application/json" \
  --data '{
      "beat": {
        "name": "roll",
        }
      }'
