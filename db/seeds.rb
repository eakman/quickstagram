# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  User.destroy_all
  Post.destroy_all

  user1 = User.new({username: 'guest', password: 'password'})
  user1.avatar = File.open('app/assets/images/social.png')
  user1.save!

  user2 = User.new({username: 'abe', password: 'password'})
  user2.avatar = File.open('app/assets/seed pictures/profile pics/0xftwmrbz_0-joshua-ness.jpg')
  user2.save!

  user3 = User.new({username: 'benjamin', password: 'password'})
  user3.avatar = File.open('app/assets/seed pictures/8ewxo2mhtjs-blake-richard-verdoorn.jpg')
  user3.save!

  user4 = User.new({username: 'cathy', password: 'password'})
  user4.avatar = File.open('app/assets/seed pictures/profile pics/7vpzxf-whko-freestocks-org.jpg')
  user4.save!

  user5 = User.new({username: 'danielle', password: 'password'})
  user5.avatar = File.open('app/assets/seed pictures/e4944k_4svi-buzz-andersen.jpg')
  user5.save!

  user6 = User.new({username: 'howard', password: 'password'})
  user6.avatar = File.open('app/assets/seed pictures/gg5-k-mjwuq-eaters-collective.jpg')
  user6.save!

  user7 = User.new({username: 'greg', password: 'password'})
  user7.avatar = File.open('app/assets/seed pictures/profile pics/98rcate6gcu-alex-blajan.jpg')
  user7.save!

  user8 = User.new({username: 'melissa', password: 'password'})
  user8.avatar = File.open('app/assets/seed pictures/profile pics/esawhr5fhn8-oskar-krawczyk.jpg')
  user8.save!

  user9 = User.new({username: 'samantha', password: 'password'})
  user9.avatar = File.open('app/assets/seed pictures/profile pics/gwwrctkrrik-maher-el-aridi.jpg')
  user9.save!

  user10 = User.new({username: 'rodney', password: 'password'})
  user10.avatar = File.open('app/assets/seed pictures/profile pics/qkayddmuhra-leonie-wise.jpg')
  user10.save!





  post1 = user1.posts.new( location: "New Jersey")
  post1.picture_url = File.open('app/assets/seed pictures/1.jpg')
  post1.save!

  post2 = user3.posts.new(location: "New York")
  post2.picture_url = File.open('app/assets/seed pictures/2.jpg')
  post2.save!

  post3 = user5.posts.new(location: "Chicago")
  post3.picture_url = File.open('app/assets/seed pictures/2vv7hmebs2y-ornella-binni.jpg')
  post3.save!

  post4 = user2.posts.new(location: "Los Angeles")
  post4.picture_url = File.open('app/assets/seed pictures/3bpkvzknix0-patxi-olaeta.jpg')
  post4.save!

  post5 = user4.posts.new(location: "Deleware")
  post5.picture_url = File.open('app/assets/seed pictures/v54ii9vmjpw-clem-onojeghuo.jpg')
  post5.save!








  post6 = user10.posts.new( location: "Kansa")
  post6.picture_url = File.open('app/assets/seed pictures/4xe0ca91vf0-damien-c.jpg')
  post6.save!

  post7 = user8.posts.new(location: "London")
  post7.picture_url = File.open('app/assets/seed pictures/6w9xap6wm3w-ayo-ogunseinde.jpg')
  post7.save!

  post8 = user6.posts.new(location: "Brooklyn")
  post8.picture_url = File.open('/Users/eitanakman/quickstagram/app/assets/seed pictures/7cdfzmllwom-william-bout.jpg')
  post8.save!

  post9 = user5.posts.new(location: "Mexico")
  post9.picture_url = File.open('app/assets/seed pictures/7nrsvjvalna-denys-nevozhai.jpg')
  post9.save!

  post10 = user1.posts.new(location: "Barcade")
  post10.picture_url = File.open('app/assets/seed pictures/7zkoxdzlrog-thomas-vimare.jpg')
  post10.save!





  post11 = user3.posts.new( location: "New Jersey")
  post11.picture_url = File.open('app/assets/seed pictures/8ssuay2e_ey-jordan-whitfield.jpg')
  post11.save!

  post12 = user7.posts.new(location: "New York")
  post12.picture_url = File.open('app/assets/seed pictures/8v8qciio554-sarah-neighbour.jpg')
  post12.save!

  post13 = user8.posts.new(location: "Chicago")
  post13.picture_url = File.open('app/assets/seed pictures/12ehc6fxpyg-eaters-collective.jpg')
  post13.save!

  post14 = user9.posts.new(location: "Los Angeles")
  post14.picture_url = File.open('app/assets/seed pictures/a6j4jhhfz5k-lobostudio-hamburg.jpg')
  post14.save!

  post15 = user10.posts.new(location: "Deleware")
  post15.picture_url = File.open('app/assets/seed pictures/alop5glz3n0-stephan-vance.jpg')
  post15.save!




  post16 = user6.posts.new( location: "New Jersey")
  post16.picture_url = File.open('app/assets/seed pictures/bacmea2hy8g-nitish-meena.jpg')
  post16.save!

  post18 = user4.posts.new(location: "New York")
  post18.picture_url = File.open('app/assets/seed pictures/cfqeo_1s0rs-gabriel-izgi.jpg')
  post18.save!

  post19 = user3.posts.new(location: "Chicago")
  post19.picture_url = File.open('app/assets/seed pictures/cptso1l7s28-nick-karvounis.jpg')
  post19.save!

  post20 = user2.posts.new(location: "Los Angeles")
  post20.picture_url = File.open('app/assets/seed pictures/d6rsa8pmyko-steinar-la-engeland.jpg')
  post20.save!

  post21 = user1.posts.new(location: "Deleware")
  post21.picture_url = File.open('app/assets/seed pictures/dfbrrphtly0-jennifer-pallian.jpg')
  post21.save!





  post22 = user5.posts.new( location: "Kansa")
  post22.picture_url = File.open('app/assets/seed pictures/ehpyd4u5830-kalen-emsley.jpg')
  post22.save!

  post23 = user7.posts.new(location: "London")
  post23.picture_url = File.open('app/assets/seed pictures/fdkf3fkwek0-daniel-kainz.jpg')
  post23.save!

  post24 = user8.posts.new(location: "Brooklyn")
  post24.picture_url = File.open('app/assets/seed pictures/fkfa6wsdtmi-nathan-anderson.jpg')
  post24.save!

  post25 = user10.posts.new(location: "Mexico")
  post25.picture_url = File.open('app/assets/seed pictures/fl_l6qobfn4-toa-heftiba.jpg')
  post25.save!

  post26 = user5.posts.new(location: "Barcade")
  post26.picture_url = File.open('app/assets/seed pictures/g9neenk1z5i-farrel-nobel.jpg')
  post26.save!



  post27 = user5.posts.new( location: "New Jersey")
  post27.picture_url = File.open('app/assets/seed pictures/gjfvhkuhdsi-hernan-lucio.jpg')
  post27.save!

  post28 = user8.posts.new(location: "New York")
  post28.picture_url = File.open('app/assets/seed pictures/grgympbxhdk-tao_jinjin.jpg')
  post28.save!

  post29 = user9.posts.new(location: "Milwaukee")
  post29.picture_url = File.open('app/assets/seed pictures/guvimt4ifok-maria-mekht.jpg')
  post29.save!

  post30 = user10.posts.new(location: "Los Angeles")
  post30.picture_url = File.open('app/assets/seed pictures/hjd5eotfaoa-creative-photo-corner.jpg')
  post30.save!

  post31 = user3.posts.new(location: "Toronto")
  post31.picture_url = File.open('app/assets/seed pictures/iee2c3kyero-andrew-branch.jpg')
  post31.save!



  post32 = user3.posts.new( location: "New Jersey")
  post32.picture_url = File.open('app/assets/seed pictures/iirb37j5yfa-michael-shannon.jpg')
  post32.save!

  post33 = user7.posts.new(location: "New York")
  post33.picture_url = File.open('app/assets/seed pictures/iqisymfr0rm-freestocks-org.jpg')
  post33.save!

  post34 = user5.posts.new(location: "Milwaukee")
  post34.picture_url = File.open('app/assets/seed pictures/ixqvs7u0jl8-fynn-lehnert.jpg')
  post34.save!

  post35 = user6.posts.new(location: "Los Angeles")
  post35.picture_url = File.open('app/assets/seed pictures/j3eemrdvv_u-joel-filipe.jpg')
  post35.save!

  post36 = user7.posts.new(location: "Toronto")
  post36.picture_url = File.open('app/assets/seed pictures/je0zjvhzve-jace-grandinetti.jpg')
  post36.save!



  post37 = user5.posts.new( location: "New Jersey")
  post37.picture_url = File.open('app/assets/seed pictures/jktv__bqmaa-brooke-lark.jpg')
  post37.save!

  post38 = user4.posts.new(location: "New York")
  post38.picture_url = File.open('app/assets/seed pictures/jv3qga_gvti-clem-onojeghuo.jpg')
  post38.save!

  post39 = user8.posts.new(location: "Milwaukee")
  post39.picture_url = File.open('app/assets/seed pictures/l4a7cmfu6e8-oskar-krawczyk.jpg')
  post39.save!

  post40 = user8.posts.new(location: "Los Angeles")
  post40.picture_url = File.open('app/assets/seed pictures/t05kfheygbe-matthew-skinner.jpg')
  post40.save!

  post41 = user7.posts.new(location: "Toronto")
  post41.picture_url = File.open('app/assets/seed pictures/l54zc2nektq-kevin-lee.jpg')
  post41.save!



  post42 = user10.posts.new( location: "New Orleans")
  post42.picture_url = File.open('app/assets/seed pictures/ru051j7-jqa-tim-cook.jpg')
  post42.save!

  post43 = user9.posts.new(location: "Nebraska")
  post43.picture_url = File.open('app/assets/seed pictures/ld5yiqggps0-adam-birkett.jpg')
  post43.save!

  post44 = user4.posts.new(location: "Kentucky")
  post44.picture_url = File.open('app/assets/seed pictures/lpwsic2ojus-anete-lusina.jpg')
  post44.save!

  post45 = user9.posts.new(location: "Ohio")
  post45.picture_url = File.open('app/assets/seed pictures/lswyrs6e3dg-clem-onojeghuo.jpg')
  post45.save!

  post46 = user3.posts.new(location: "Toronto")
  post46.picture_url = File.open('app/assets/seed pictures/mgfjiud9yim-luke-porter.jpg')
  post46.save!





  post47 = user10.posts.new( location: "New Orleans")
  post47.picture_url = File.open('app/assets/seed pictures/mnfgmgiuupw-dmitri-popov.jpg')
  post47.save!

  post48 = user3.posts.new(location: "Nebraska")
  post48.picture_url = File.open('app/assets/seed pictures/mx8gr1umwr8-daniel-burka.jpg')
  post48.save!

  post49 = user10.posts.new(location: "Kentucky")
  post49.picture_url = File.open('app/assets/seed pictures/n2zk9yxjmla-anthony-esau.jpg')
  post49.save!

  post50 = user2.posts.new(location: "Ohio")
  post50.picture_url = File.open('app/assets/seed pictures/n56qcb6v4kw-freestocks-org.jpg')
  post50.save!

  post51 = user10.posts.new(location: "Toronto")
  post51.picture_url = File.open('app/assets/seed pictures/nhnusfckdxe-aldyth-moyla.jpg')
  post51.save!
