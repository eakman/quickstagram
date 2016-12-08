@posts.each do |post|
  json.set! post.id do
    json.extract! post, :picture_url, :user_id, :description, :location
  end
end
