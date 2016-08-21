
# creating patterns
curl --include --request POST http://localhost:3000/beats \
  --header "Authorization: Token token=BAhJIiUwYzMyMWQ0MTdmNjMyZjExMGFjYjVhZjM4ZmQ2MDdhNgY6BkVG--b3e13752304da924063f481f7be8da94c95d8d06" \
  --header "Content-Type: application/json" \
  --data '{
    "beats": {
      "name": "Blues",
      "kick": "false",
      "snare": "true",
      "hatClose": "false",
      "hatOpen": "true",
      "clap": "false",
      "user_id": "1"
    }
  }'


  curl --include --request POST http://localhost:3000/beats \
    --header "Authorization: Token token=BAhJIiVhMTk5MGU2ZThkY2FjNzg5NGVhMDIxMThjOWVhYWE4YwY6BkVG--833c39d5bfb5af195c32fd2849276b9bd8c2cf2d" \
    --header "Content-Type: application/json" \
    --data '{
      "beat": {
        "name": "Blues",
        "kick": "false",
        "snare": "true",
        "hatClose": "false",
        "hatOpen": "true",
        "clap": "false",
        "user_id": "1"
      }
    }'

curl --include --request POST http://localhost:3000/patterns \
  --header "Authorization: Token token=BAhJIiU3OGIwNmNhOTY2NWIyNWYxOTY4MDM3YjE4NjdkN2FkOQY6BkVG--930da6658b677ead29b7f8617b8a83c507b5f959" \
  --header "Content-Type: application/json" \
  --data '{
    "pattern": {
      "name": "Rock",
      "user_id": "2",
        "beat": {
          "kick": "false",
          "snare": "false",
          "hatClose": "false",
          "hatOpen": "false",
          "clap": "false"
        }
      }
  }'




curl --include --request PATCH http://localhost:3000/patterns/4 \
  --header "Authorization: Token token=BAhJIiU3OGIwNmNhOTY2NWIyNWYxOTY4MDM3YjE4NjdkN2FkOQY6BkVG--930da6658b677ead29b7f8617b8a83c507b5f959" \
  --header "Content-Type: application/json" \
  --data '{
    "pattern": {
      "name": "Rock",
      "user_id": "2",
        "beat": {
          "kick": "false",
          "snare": "false",
          "hatClose": "false",
          "hatOpen": "false",
          "clap": "false"
        }
      }
  }'





  'pattern': {
    'name': app.pattern.name,
    'user_id': app.user.id,
    'beat': {
      'kick': dataKick,
      'snare': dataSnare,
      'hatClose': dataHatClose,
      'hatOpen': dataHatOpen,
      'clap': dataClap,
      'order': "1",
    },
  }
  }
  });







curl --include --request POST "http://localhost:3000/beats" \
  --header "Authorization: Token token=BAhJIiUwZWQ5M2RhYTVlZmYwOWMzOTExZDVmZWM5N2Y2ZGEzNgY6BkVG--1fbbfe83cd2c6d95f8c657abc8a079c524104281" \
  --header "Content-Type: application/json" \
  --data '{
   "beat": [{
     "kick": "false",
     "snare": "3",
     "hatClose": "false",
     "hatOpen": "false",
     "clap": "true",
     "pattern_id": "3",
     "order": "3"
   }]
}'




# get a user
  curl --include --request GET "http://localhost:3000/users/1" \
    --header "Authorization: Token token=BAhJIiUwYzMyMWQ0MTdmNjMyZjExMGFjYjVhZjM4ZmQ2MDdhNgY6BkVG--b3e13752304da924063f481f7be8da94c95d8d06"

# get a particular beat WORKS!!!
    curl --include --request GET "http://localhost:3000/beats/2" \
      --header "Authorization: Token token=BAhJIiVjZjQ4MzE2OTY5ZmI2NTVmMGI5MDQyYmVjODdkMjA1MAY6BkVG--f053f32c5e62e14e7e029efb76d05d246d400f9c" \

# get a particular pattern
curl --include --request GET "http://localhost:3000/patterns/4" \
  --header "Authorization: Token token=BAhJIiU3OGIwNmNhOTY2NWIyNWYxOTY4MDM3YjE4NjdkN2FkOQY6BkVG--930da6658b677ead29b7f8617b8a83c507b5f959" \



curl --include --request POST http://localhost:3000/beats \
  --header "Authorization: Token token=BAhJIiU4OWVkOWQ3MTc2MzU1OGMyNGY4ZjUxOGE1NzNhMGQwNgY6BkVG--054be454c6cec6b2c1283084a6a418c263ce1d4d" \
  --header "Content-Type: application/json" \
  --data '{
    "beat": {
      "name": "Jonny",
      "kick": "false", "true", "true", "false", "false", "true", "true", "false",
      "snare": "false", "true", "true", "false", "false", "true", "true", "false",
      "hatClose": "false", "true", "true", "false", "false", "true", "true", "false",
      "hatOpen": "false", "true", "true", "false", "false", "true", "true", "false",
      "clap": "false", "true", "true", "false", "false", "true", "true", "false",
      "pattern_id": "2"
    }
  }'

({kick:false,snare:true,hatClose:false,hatOpen:true,clap:false,pattern_id:1,order:2})
