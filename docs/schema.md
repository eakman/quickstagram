# Schema Tables

## Users

column name |	data type |	details
---|---|---
id | integer | not null, primary key
username | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique
created_at | timestamp | not null
updated_at | timestamp | not null

## Follows

column name |	data type |	details
---|---|---
id | integer | not null, primary key
follower_id | integer | not null, foreign key
followed_id | integer | not null, foreign key
created_at | timestamp | not null
updated_at | timestamp | not null

## Posts

column name |	data type |	details
------------|-----------|--------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
picture_url | string    | not null
description | text      | null
location    | string    | null
created_at  | timestamp | not null
updated_at  | timestamp | not null

## Comments

column name |	data type |	details
---|---|---
id | integer | not null, primary key
user_id | integer | not null, foreign key
post_id | integer | not null, foreign key
body | text | not null
created_at | timestamp | not null
updated_at | timestamp | not null

## Likes

column name |	data type |	details
------------|-----------|---------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
post_id     | integer   | not null, foreign key
created_at  | timestamp | not null
updated_at  | timestamp | not null
