# json.extract! post, :id, :picture_url, :description, :user_id, :location
json.id post.id
json.picture_url asset_path(post.picture_url.url)
json.description post.description
json.user_id post.user_id
json.location post.location
