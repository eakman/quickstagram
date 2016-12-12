# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  User.destroy_all

  user = User.new({username: 'user2', password: 'password'})
  user.avatar = File.open('app/assets/images/social.png')
  user.save!

  Post.destroy_all

  post1 = user.posts.new(description: "How 'bout them sandwiches!'", location: "New Jersey")
  post1.picture_url = File.open('app/assets/images/pic1.jpg')
  post1.save!

  post2 = user.posts.new(description: "You know you want me!'", location: "New York")
  post2.picture_url = File.open('app/assets/images/pic2.jpg')
  post2.save!

  post3 = user.posts.new(description: "Wait what now?!'", location: "New Jersey")
  post3.picture_url = File.open('app/assets/images/pic3.jpg')
  post3.save!

  post4 = user.posts.new(description: "...and I was like Dayum!", location: "New Jersey")
  post4.picture_url = File.open('app/assets/images/pic4.png')
  post4.save!
