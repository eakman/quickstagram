json.partial! 'api/users/current_user', user: @user

json.followed @is_following 
