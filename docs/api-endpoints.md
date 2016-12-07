# Endpoints and Routes

### Static_pages

method | route | controller action
---|---|---
GET | / | static_pages#root

### Users

method | route | controller action
---|---|---
GET | api/users(.:format) | users#index
POST | api/users(.:format) | users#create
GET | api/users/new(.:format) | users#new
GET | api/users/:id | users#show

### Posts

method | route | controller action
---|---|---
GET | api/users/:id/posts(.:format) | posts#index
POST | api/users/posts(.:format) | posts#create
GET | api/users/:id/posts/new(.:format) | posts#new
GET | api/posts/:id | posts#show

### Session

method | route | controller action
---|---|---
DELETE | api/session(.:format) | session#destroy
POST | api/session(.:format) | session#create
GET | api/session/new(.:format) | session#new

### Comments

method | route | controller action
---|---|---
GET | api/posts/:id/comments | comments#index
POST | api/posts/:id/comments | comments#create
DELETE | api/posts/:id/comments | comments#destroy (BONUS)

### Likes

method | route | controller action
---|---|---
GET | api/posts/:id/likes | likes#index
POST | api/posts/:id/likes | likes#create
DELETE | api/posts/:id/likes | likes#destroy

### Follows

method | route | controller action
---|---|---
GET | api/users/:id/follows(.:format) | follows#index
POST | api/users/follows(.:format) | follows#create
GET | api/users/:id/follows/new(.:format) |  follows#new
