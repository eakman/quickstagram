json.set! 'follows' do
  json.array! @follows do |follow|
    json.user_id follow.followed.id
    json.username follow.followed.username
    json.avatar_url follow.followed.avatar.url
  end
end

json.set! 'followers' do
  json.array! @followers do |follower|
    json.user_id follower.follower.id
    json.username follower.follower.username
    json.avatar_url follower.follower.avatar.url
  end
end
