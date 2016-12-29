# json.array! @users, :id, :username, :avatar

  json.array! @stuff do |thing|
    # debugger
    if (thing.class == User)
      # debugger
      json.extract! thing, :id, :username, :avatar
    else
      json.id thing.id
      json.username thing.hash_tag
      json.avatar '#'
    end
  end
