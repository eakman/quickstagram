* Quickstagram

### [Quickstagram live](https://quickstagram.herokuapp.com/#/)

Quickstagram is an Instagram clone. Like Instagram, it gives users the ability to upload and and share photos with with their followers. One can also browse user profiles as well as comment and like posts.

Quickstagram was built using Rails and PostgresQL on the backend and React Redux on the front.

*** Database

The database consists of 5 tables --comments, follows, likes, posts, and users.

Comments include a body and timestamp as well as a reference to the post and user which they belong to.

The Follows table is a join table with two foreign keys. One is a reference to the user being followed and one is a reference to the user doing the following.  

Similar to Follows, Likes also consists of two foreign keys. One for the post being commented on and one for the user who authored the comment.

Posts consists of an image a reference to it's author and a timestamp, which is used to display the photos in the feed starting with the most recent.

Users have a username and avatar as well as a password digest and session token which are used for a custom user authentication system.

for more info see my schema:

### [The schema](schema.md)
