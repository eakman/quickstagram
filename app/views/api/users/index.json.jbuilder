@users.each do |user|
  json.set! user.id do
    json.username user.username
    
  end
end
