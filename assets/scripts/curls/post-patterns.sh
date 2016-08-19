
# creating patterns
curl --include --request POST http://localhost:3000/patterns \
  --header "Authorization: Token token=BAhJIiU1ZTE5NTVjMzEyZDUzY2M5NDQxNWMxYzUxMzMwNDJiOQY6BkVG--e35a581e559c899b32127afc81353dcf2ed2265c" \
  --header "Content-Type: application/json" \
  --data '{
    "pattern": {
      "name": "Blues",
      "user_id": "1"
    }
  }'


curl --include --request POST http://localhost:3000/patterns \
  --header "Authorization: Token token=BAhJIiUwZWQ5M2RhYTVlZmYwOWMzOTExZDVmZWM5N2Y2ZGEzNgY6BkVG--1fbbfe83cd2c6d95f8c657abc8a079c524104281" \
  --header "Content-Type: application/json" \
  --data '{
    "pattern": {
      "name": "Rock",
      "user_id": "2"
    }
  }'

curl --include --request POST http://localhost:3000/beats \
  --header "Authorization: Token token=BAhJIiU3YzE0MjhhOGUyY2FlNjMwM2QzODIzNzU2ZWM5NDI4MQY6BkVG--c718c251f7a92d3900c3777aa32974dc14637422" \
  --header "Content-Type: application/json" \
  --data '{
    "beat": {
      "kick": "false",
      "snare": "true",
      "hatClose": "false",
      "hatOpen": "true",
      "clap": "false",
      "pattern_id": "1",
      "order": "3"
    }
  }'

curl --include --request POST "http://localhost:3000/beats" \
  --header "Authorization: Token token=BAhJIiUwZWQ5M2RhYTVlZmYwOWMzOTExZDVmZWM5N2Y2ZGEzNgY6BkVG--1fbbfe83cd2c6d95f8c657abc8a079c524104281" \
  --header "Content-Type: application/json" \
  --data '{
   "beat": {
     "kick": "false",
     "snare": "3",
     "hatClose": "false",
     "hatOpen": "false",
     "clap": "true",
     "pattern_id": "3",
     "order": "3"
   }
}'




# get a user
  curl --include --request GET "http://localhost:3000/users/1" \
    --header "Authorization: Token token=BAhJIiU3YzE0MjhhOGUyY2FlNjMwM2QzODIzNzU2ZWM5NDI4MQY6BkVG--c718c251f7a92d3900c3777aa32974dc14637422" \

# get a particular beat
    curl --include --request GET "http://localhost:3000/beats/2" \
      --header "Authorization: Token token=BAhJIiU3YzE0MjhhOGUyY2FlNjMwM2QzODIzNzU2ZWM5NDI4MQY6BkVG--c718c251f7a92d3900c3777aa32974dc14637422" \

curl --include --request POST http://localhost:3000/beats \
  --header "Authorization: Token token=BAhJIiU3YzE0MjhhOGUyY2FlNjMwM2QzODIzNzU2ZWM5NDI4MQY6BkVG--c718c251f7a92d3900c3777aa32974dc14637422" \
  --header "Content-Type: application/json" \
  --data '{
    "beat": {
      "kick": "false",
      "snare": "true",
      "hatClose": "false",
      "hatOpen": "true",
      "clap": "false",
      "pattern_id": "1",
      "order": "3"
    }
  }'

({kick:false,snare:true,hatClose:false,hatOpen:true,clap:false,pattern_id:1,order:2})
