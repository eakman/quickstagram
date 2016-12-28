json.array! @posts do |post|
  json.page_number @page
  json.extract! post, :user_id, :description, :location, :id
  json.created_at post.created_at.to_i
  json.picture_url asset_path(post.picture_url.url)
  json.likes post.likes
  json.set! 'user' do
    json.username post.user.username
    json.avatar_url asset_path(post.user.avatar.url)
    json.id post.user.id
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
