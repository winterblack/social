json.extract! user, :id, :username
json.url api_user_url(user, format: :json)
