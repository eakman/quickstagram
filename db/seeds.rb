# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  User.destroy_all

  user = User.create({username: 'user2', password: 'password'})

  Post.destroy_all

  user.posts.create(picture_url:'http://makeitbetter.net/wp-content/uploads/2014/02/instagram-chicagofoodauthority.jpg',
    user_id: 1, description: "How 'bout them sandwiches!'", location: "New Jersey")

  user.posts.create(picture_url:'http://wac.450f.edgecastcdn.net/80450F/929jackfm.com/files/2012/08/@philipinzone.jpg',
    user_id: 1, description: "You know you want me!'", location: "New York")

  user.posts.create(picture_url:'http://i.huffpost.com/gen/1303353/images/o-BEST-FOOD-INSTAGRAM-ACCOUNTS-LA-facebook.jpg',
    user_id: 1, description: "Wait what now?!'", location: "New Jersey")

  user.posts.create(picture_url:'https://www.theurbanlist.com/content/article/wysiwyg/who-to-follow-on-instagram-foodies-mynewroots-Screen%20Shot%202014-06-19%20at%202.33.17%20PM-550x551.png',
    user_id: 1, description: "...and I was like Dayum!", location: "New Jersey")

  user.posts.create(picture_url:'https://www.google.com/search?q=food+instagrams&rlz=1C5CHFA_enUS561US561&espv=2&biw=1184&bih=656&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjm-JTVoeXQAhWhgFQKHXAiBPgQ_AUIBigB#imgrc=mu05Z2keTLWHIM%3A',
    user_id: 1, description: "Romantic dinner for two.", location: "New Jersey")
