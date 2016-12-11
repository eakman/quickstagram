@posts.each do |post|
  json.partial! 'api/posts/post', post: post
end




# json.set! post.id do
#   json.extract! post, :user_id, :description, :location
#   json.created_at post.created_at.to_i
#   json.picture_url asset_path(post.picture_url.url)
#   json.likes post.likes
#   json.set! 'user' do
#     json.username post.user.username
#     json.avatar_url asset_path(post.user.avatar.url)
#   end
# end
