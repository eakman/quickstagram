# Quickstagram

### [Quickstagram live](https://quickstagram.herokuapp.com/#/)

Quickstagram is a picture sharing app inspired by Instagram. Like Instagram, it gives users the ability to upload and share photos with with their followers. It can also be used to browse user profiles as well as comment and like posts.

Quickstagram was built using Rails and PostgresQL on the backend and React Redux on the front.

### Database

The database consists of 5 tables --comments, follows, likes, posts, and users.

Comments include a body and timestamp as well as a reference to the post and user which they belong to.

The Follows table is a join table with two foreign keys. One is a reference to the user being followed and one is a reference to the user doing the following.

Similar to Follows, Likes also consists of two foreign keys. One for the post being commented on and one for the user who authored the comment.

Posts consists of an image a reference to it's author and a timestamp, which is used to display the photos in the feed starting with the most recent.

Users have a username and avatar as well as a password digest and session token which are used for a custom user authentication system.

for more info see my schema:

#### [The schema](./docs/schema.md)

### Key Features

#### User authentication and session management

When a user signs up, the password that's sent in the initial request is hashed using BCrypt --a cryptographic hashing algorithm based on Blowfish, which is highly unlikely to produce hash collisions. At that point, a randomly generated session token is assigned to the user and stored in their browser's cookies. The session token is sent with every API request thereon for authentication purposes and the password is not used until the session token has expired.

#### The Feed

The feed is a scrollable exploring feature where users can view, comment, and like their followed posts.

![Feed](./docs/feedSS.png)

#### The Nav Bar

The nav bar allows you to navigate between the feed and the user profile as well as provides and interface for live user search.

![Nav Bar](./docs/nav_barSS.png)

#### Profile Page

With the profile page a user can curate their personal photos. User's can also view other user's pages, follow them, and view their photos.

![Profile Page](./docs/profileSS.png)

#### Post Show page

is accessed through the user profile page and allows user to view comment and like specific photos.

![Profile Page](./docs/post_showSS.png)


### Future Goals

* Incorporate infinite scroll on the feed page
* Picture capture
* searchable hash tags
