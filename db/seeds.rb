# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  # POSTS = ['app/assets/images/seed/_ez2_yab-ly-joel-filipe.jpg',
  # 'app/assets/images/seed/6w9xap6wm3w-ayo-ogunseinde.jpg',
  # 'app/assets/images/seed/8ewxo2mhtjs-blake-richard-verdoorn.jpg',
  # 'app/assets/images/seed/8v8qciio554-sarah-neighbour.jpg',
  # 'app/assets/images/seed/alop5glz3n0-stephan-vance.jpg',
  # 'app/assets/images/seed/d6rsa8pmyko-steinar-la-engeland.jpg',
  # 'app/assets/images/seed/ehpyd4u5830-kalen-emsley.jpg',
  # 'app/assets/images/seed/fdkf3fkwek0-daniel-kainz.jpg',
  # 'app/assets/images/seed/grgympbxhdk-tao_jinjin.jpg',
  # 'app/assets/images/seed/i2defz6pcn0-jesse-schoff.jpg',
  # 'app/assets/images/seed/iee2c3kyero-andrew-branch.jpg',
  # 'app/assets/images/seed/iirb37j5yfa-michael-shannon.jpg',
  # 'app/assets/images/seed/ixqvs7u0jl8-fynn-lehnert.jpg',
  # 'app/assets/images/seed/jv3qga_gvti-clem-onojeghuo.jpg',
  # 'app/assets/images/seed/l4a7cmfu6e8-oskar-krawczyk.jpg',
  # 'app/assets/images/seed/ld5yiqggps0-adam-birkett.jpg',
  # 'app/assets/images/seed/lswyrs6e3dg-clem-onojeghuo.jpg',
  # 'app/assets/images/seed/n56qcb6v4kw-freestocks-org.jpg',
  # 'app/assets/images/seed/o5kdedzhvpw-igor-ovsyannykov.jpg',
  # 'app/assets/images/seed/ph88thg-1yw-caleb-george.jpg',
  # 'app/assets/images/seed/onus-vjdeuo-jorge-flores.jpg',
  # 'app/assets/images/seed/oyco1xsyrq0-andre-branco.jpg',
  # 'app/assets/images/seed/ravwym3xk7y-adam-birkett.jpg',
  # 'app/assets/images/seed/swpq9fqgfg0-annie-spratt.jpg',
  # 'app/assets/images/seed/t05kfheygbe-matthew-skinner.jpg',
  # 'app/assets/images/seed/tb5a-qti6xg-jamie-street.jpg',
  # 'app/assets/images/seed/wqw4mli5qsq-redd-angelo.jpg']

  POSTS = [
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/ph88thg-1yw-caleb-george.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/oyco1xsyrq0-andre-branco.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/onus-vjdeuo-jorge-flores.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/o5kdedzhvpw-igor-ovsyannykov.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/n56qcb6v4kw-freestocks-org.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/lswyrs6e3dg-clem-onojeghuo.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/ld5yiqggps0-adam-birkett.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/l4a7cmfu6e8-oskar-krawczyk.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/jv3qga_gvti-clem-onojeghuo.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/ixqvs7u0jl8-fynn-lehnert.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/iirb37j5yfa-michael-shannon.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/iee2c3kyero-andrew-branch.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/i2defz6pcn0-jesse-schoff.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/grgympbxhdk-tao_jinjin.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/fdkf3fkwek0-daniel-kainz.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/ehpyd4u5830-kalen-emsley.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/d6rsa8pmyko-steinar-la-engeland.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/alop5glz3n0-stephan-vance.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/_ez2_yab-ly-joel-filipe.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/8v8qciio554-sarah-neighbour.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/8ewxo2mhtjs-blake-richard-verdoorn.jpg',
  'https://s3.amazonaws.com/quickstagram-prod/static_images/posts/6w9xap6wm3w-ayo-ogunseinde.jpg']


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

  user5 = User.new({username: 'jason', password: 'password'})
  user5.avatar = File.open('app/assets/images/seed/profile/fl_l6qobfn4-toa-heftiba.jpg')
  user5.save!

  user6 = User.new({username: 'kelly', password: 'password'})
  user6.avatar = File.open('app/assets/images/seed/profile/ru051j7-jqa-tim-cook.jpg')
  user6.save!

  user7 = User.new({username: 'michael', password: 'password'})
  user7.avatar = File.open('app/assets/images/seed/profile/yeh5eirfcis-adam-jaime.jpg')
  user7.save!

  user8 = User.new({username: 'jim', password: 'password'})
  user8.avatar = File.open('app/assets/images/seed/profile/pmhoqj3ce1e-chad-madden.jpg')
  user8.save!

  user9 = User.new({username: 'eric', password: 'password'})
  user9.avatar = File.open('app/assets/images/seed/profile/4uojmedcwi8-tim-bogdanov.jpg')
  user9.save!



  Users = [user1, user2, user3, user4, user5, user6, user7, user8, user9]
  i = 0
  until POSTS.empty?

      post = Users[i].posts.new( location: "New Jersey")
      post.picture_from_url(POSTS.pop)
      post.save!
      i = (i + 1) % Users.length

  end

  Users.drop(1).each do |user|
    Follow.create(follower_id: user1.id, followed_id: user.id)
  end
