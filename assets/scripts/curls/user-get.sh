curl --include --request GET http://localhost:3000/users/$ID \
  --header "Authorization: Token token=$TOKEN"



# this WORKS in command line when not associated with a user  beats#show
  curl --include --request GET http://localhost:3000/beats/1 \
    --header "Authorization: Token token=$TOKEN"


# this WORKS in command line when not associated with a user  beats#index
    curl --include --request GET http://localhost:3000/beats \
      --header "Authorization: Token token=$TOKEN"


# this WORKS in command line when not associated with a user  beats#create
      curl --include --request "POST" "http://localhost:3000/beats" \
        --header "Content-Type: application/json" \
        --data $'{
          "beat": {
            "name": "roll"
          }
        }'

# this WORKS in command line when not associated with a user  beats#destroy
curl --include --request DELETE http://localhost:3000/beats/1 \
  --header "Authorization: Token token=$TOKEN"

# this WORKS in command line when not associated with a user  beats#update
  curl --include --request PATCH http://localhost:3000/beats/2 \
  --header "Content-Type: application/json" \
  --data $'{
     "beat": {
       "name": "rock"
    }
  }'
