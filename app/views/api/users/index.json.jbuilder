@users.each do |user|
  json.set! user.id do
    json.username user.username
    json.profile_pic_url user.profile_pic_url
  end
end
