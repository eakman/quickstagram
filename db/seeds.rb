# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  POSTS = ['app/assets/images/seed/_ez2_yab-ly-joel-filipe.jpg',
  'app/assets/images/seed/6w9xap6wm3w-ayo-ogunseinde.jpg',
  'app/assets/images/seed/8ewxo2mhtjs-blake-richard-verdoorn.jpg',
  'app/assets/images/seed/8v8qciio554-sarah-neighbour.jpg',
  'app/assets/images/seed/alop5glz3n0-stephan-vance.jpg',
  'app/assets/images/seed/d6rsa8pmyko-steinar-la-engeland.jpg',
  'app/assets/images/seed/ehpyd4u5830-kalen-emsley.jpg',
  'app/assets/images/seed/fdkf3fkwek0-daniel-kainz.jpg',
  'app/assets/images/seed/grgympbxhdk-tao_jinjin.jpg',
  'app/assets/images/seed/i2defz6pcn0-jesse-schoff.jpg',
  'app/assets/images/seed/iee2c3kyero-andrew-branch.jpg',
  'app/assets/images/seed/iirb37j5yfa-michael-shannon.jpg',
  'app/assets/images/seed/ixqvs7u0jl8-fynn-lehnert.jpg',
  'app/assets/images/seed/jv3qga_gvti-clem-onojeghuo.jpg',
  'app/assets/images/seed/l4a7cmfu6e8-oskar-krawczyk.jpg',
  'app/assets/images/seed/ld5yiqggps0-adam-birkett.jpg',
  'app/assets/images/seed/lswyrs6e3dg-clem-onojeghuo.jpg',
  'app/assets/images/seed/n56qcb6v4kw-freestocks-org.jpg',
  'app/assets/images/seed/o5kdedzhvpw-igor-ovsyannykov.jpg',
  'app/assets/images/seed/ph88thg-1yw-caleb-george.jpg']

  User.destroy_all
  Post.destroy_all

  user1 = User.new({username: 'guest', password: 'password'})
  user1.avatar = File.open('app/assets/images/social.png')
  user1.save!

  user2 = User.new({username: 'gabby', password: 'password'})
  user2.avatar = File.open('app/assets/images/seed/profile/gwwrctkrrik-maher-el-aridi.jpg')
  user2.save!

  user3 = User.new({username: 'benjamin', password: 'password'})
  user3.avatar = File.open('app/assets/images/seed/profile/qkayddmuhra-leonie-wise.jpg')
  user3.save!

  user4 = User.new({username: 'cathy', password: 'password'})
  user4.avatar = File.open('app/assets/images/seed/profile/7vpzxf-whko-freestocks-org.jpg')
  user4.save!

  Users = [user1, user2, user3, user4]

  until POSTS.empty?
    Users.each do |user|
      post = user.posts.new( location: "New Jersey")
      post.picture_url = File.open(POSTS.pop)
      post.save!
    end
  end

  Users.drop(1).each do |user|
    Follow.create(follower_id: user1.id, followed_id: user.id)
  end
