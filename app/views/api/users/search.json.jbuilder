json.array! @stuff do |thing|
    if (thing.class == User)
      json.extract! thing, :id, :username, :avatar
    else
      json.id thing.id
      json.username thing.hash_tag
      json.avatar '#'
    end
  end
