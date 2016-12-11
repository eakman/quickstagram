# json.extract! post, :id, :picture_url, :description, :user_id, :location
json.set! post.id do
  json.extract! post, :user_id, :description, :location
  json.created_at post.created_at.to_i
  json.picture_url asset_path(post.picture_url.url)
  json.likes post.likes
  json.set! 'user' do
    json.username post.user.username
    json.avatar_url asset_path(post.user.avatar.url)
  end
  json.comments do
    json.array! post.comments do |comment|
      json.id comment.id
      json.body comment.body
      json.post_id comment.post_id
      json.user do
        json.partial! 'api/users/current_user', user: comment.user
      end
    end
  end
end
