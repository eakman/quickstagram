API:
Models

User:
	associations:
	has_many :followed_posts
		through: :follows
	has_many: posts
	has_many :comments
	has_many: likes

properties:
	username :string
	password_digest :string
	session_token :string
	profile_picture_url :string

Follow:
	associations:
		belongs_to :follower (user)
		belongs_to :followed(user)

	properties
		follower_id :integer
		followed_id :integer
		timestamp :date

Post:
	associations:
	belongs_to :user
	has_many :comments
	(has_one :caption => comment with least recent timestamp)

properties:
	picture_url :string
	timestamps :date
	user_id :integer
	description :string
	location :string

Comment:
	associations:
		belongs_to :user
		belongs_to :post

	properties:
		user_id :integer
		post_id :integer
		body :text
		timestamp :date




Like:
	associations:
		belongs_to :user
		belongs_to :post

	properties:
		user_id :integer
		post_id :integer

Bonus features
	Tag:
		associations:
			belongs_to :post
				through :comment

		properties:
			comment_id :integer
			tag :string

Notes:
 	suggestions: "so and so started following you! follow them back.”
