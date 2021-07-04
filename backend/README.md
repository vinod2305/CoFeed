
# CoFeed

* [User](#user)

  * [POST - register user](#1-post---register-user)
  * [POST - login user](#2-post---login-user)
  * [GET - get user](#3-get---get-user)
  * [PUT - update user](#4-put---update-user)
  * [DELETE - delete user](#5-delete---delete-user)
  * [GET - get friends](#6-get---get-friends)
  * [GET - get suggestions](#7-get---get-suggestions)
  * [PUT - follow user](#8-put---follow-user)
  * [PUT - unfollow user](#9-put---unfollow-user)
  

* [Post](#post)

  * [POST - create post](#1-post---create-post)
  * [GET - get a post](#2-get---get-a-post)
  * [GET - timeline posts](#3-get---timeline-posts)
  * [PUT - update post](#4-put---update-post)
  * [DELETE - delete post](#5-delete---delete-post)
  * [PUT - like dislike post](#6-put---like-dislike-post)

* [Conversation](#conversation)

  * [GET -  get conversation includes two userId](#1-get----get-conversation-includes-two-userid)
  * [GET -  get coversations of a user](#2-get----get-coversations-of-a-user)
  * [GET -  get messges in a conversation](#3-get----get-messges-in-a-conversation)
  * [POST - add message to conversation](#4-post---add-message-to-conversation)
  * [POST - create new conversation](#5-post---create-new-conversation)
  
  

  
  
  
  
  


--------


## User


### 1. POST - register user
***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:8800/api/auth/register
```
***Body:***

```js        
{
    "username": "test1",
    "email": "test1@gmail.com",
    "password": "password"
}
```
##### I. Example Response: POST - register user
```js
{
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "_id": "60dd9b201ef546469a69142f",
    "username": "test",
    "email": "test@gmail.com",
    "password": "$2b$10$P.xLKl3UefH5uZbNbjfoQut8.KvZ5S7qZXasDDJrSpciwPhKYCQ3W",
    "createdAt": "2021-07-01T10:38:24.452Z",
    "updatedAt": "2021-07-01T10:38:24.452Z",
    "__v": 0
}
```
***Status Code:*** 200



### 2. POST - login user
***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:8800/api/auth/login
```
***Body:***

```js        
{
    "email": "test@gmail.com",
    "password": "password"
}
```
##### I. Example Response: POST - login user
```js
{
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "_id": "60dd9b201ef546469a69142f",
    "username": "test",
    "email": "test@gmail.com",
    "password": "$2b$10$P.xLKl3UefH5uZbNbjfoQut8.KvZ5S7qZXasDDJrSpciwPhKYCQ3W",
    "createdAt": "2021-07-01T10:38:24.452Z",
    "updatedAt": "2021-07-01T10:38:24.452Z",
    "__v": 0
}
```
***Status Code:*** 200











### 3. GET - get user
***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8800/api/users
```
***Query params:***
| Key | Value | Description |
| --- | ------|-------------|
| userId | 60dd9b201ef546469a69142f |  |
##### I. Example Response: GET - get user
```js
{
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "_id": "60dd9b201ef546469a69142f",
    "username": "test",
    "email": "test@gmail.com",
    "createdAt": "2021-07-01T10:38:24.452Z",
    "__v": 0,
    "city": "bangalore",
    "desc": "Test account"
}
```
***Status Code:*** 200



### 4. PUT - update user
***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:8800/api/users/60dd9d99a5330e494d584a81
```
***Body:***

```js        
{
    "desc": "Test account",
    "userId": "60dd9b201ef546469a69142f",
    "city": "bangalore",
    "profilePicture": "test1.png"
}
```
##### I. Example Response: PUT - update user
```js
{
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "_id": "60dd9b201ef546469a69142f",
    "username": "test",
    "email": "test@gmail.com",
    "createdAt": "2021-07-01T10:38:24.452Z",
    "__v": 0,
    "city": "bangalore",
    "desc": "Test account"
}
```
***Status Code:*** 200


### 5. DELETE - delete user
***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:8800/api/users/60dd9b201ef546469a69142f
```
***Body:***

```js        
{
    "userId":"60d17e961f6d1363950b486c"
}
```
##### I. Example Response: DELETE - delete user
```js
"You can delete only your account!"
```
***Status Code:*** 403



### 6. GET - get friends
***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8800/api/users/friends/60dd9b201ef546469a69142f
```

##### I. Example Response: GET - get friends
```js
[
    {
        "_id": "60dd9d99a5330e494d584a81",
        "username": "test1",
        "profilePicture": ""
    }
]
```
***Status Code:*** 200




### 7. GET - get suggestions
***Endpoint:***
```bash
Method: GET
Type: 
URL: http://localhost:8800/api/users/suggestions/60dd9d99a5330e494d584a81
```
##### I. Example Response: GET - get suggestions
```js
[
    {
        "profilePicture": "",
        "coverPicture": "",
        "followers": [],
        "followings": [
            "60dd9d99a5330e494d584a81"
        ],
        "isAdmin": false,
        "_id": "60dd9b201ef546469a69142f",
        "username": "test",
        "email": "test@gmail.com",
        "__v": 0,
        "city": "bangalore",
        "desc": "Test account"
    }
]
```
***Status Code:*** 200



### 8. PUT - follow user
***Endpoint:***
```bash
Method: PUT
Type: RAW
URL: http://localhost:8800/api/users/60dd9d99a5330e494d584a81/follow
```
***Body:***

```js        
{
    "userId":"60dd9b201ef546469a69142f"
}
```
##### I. Example Response: PUT - follow user
```js
"User has been followed"
```
***Status Code:*** 200



### 9. PUT - unfollow user
***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:8800/api/users/60dd9d99a5330e494d584a81/unfollow
```
***Body:***

```js        
{
    "userId":"60dd9b201ef546469a69142f"
}
```
##### I. Example Response: PUT - unfollow user
```js
"User has been unfollowed"
```


***Status Code:*** 200




## Post

### 1. POST - create post
***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:8800/api/posts
```
***Body:***

```js        
{
    "userId":"60dd9d99a5330e494d584a81",
    "description": "Testing"
}
```
##### I. Example Response: POST - create post
```js
{
    "likes": [],
    "_id": "60dd9fd280e3194b3f458035",
    "userId": "60dd9d99a5330e494d584a81",
    "createdAt": "2021-07-01T10:58:27.002Z",
    "updatedAt": "2021-07-01T10:58:27.002Z",
    "__v": 0
}
```
***Status Code:*** 200



### 2. GET - get a post
***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:8800/api/posts/60dd9fd280e3194b3f458035
```
***Body:***

```js        
{
    "userId":"60d1927ce9247d75f2e1ad67"
}
```

##### I. Example Response: GET - get a post
```js
{
    "likes": [
        "60dd9d99a5330e494d584a81"
    ],
    "_id": "60dd9fd280e3194b3f458035",
    "userId": "60dd9d99a5330e494d584a81",
    "createdAt": "2021-07-01T10:58:27.002Z",
    "updatedAt": "2021-07-01T11:01:36.968Z",
    "__v": 0,
    "desc": "New testing"
}
```


***Status Code:*** 200



### 3. GET - timeline posts
***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8800/api/posts/timeline/60dd9d99a5330e494d584a81
```
##### I. Example Response: GET - timeline posts
```js
[
    {
        "likes": [
            "60dd9d99a5330e494d584a81"
        ],
        "_id": "60dd9fd280e3194b3f458035",
        "userId": "60dd9d99a5330e494d584a81",
        "createdAt": "2021-07-01T10:58:27.002Z",
        "updatedAt": "2021-07-01T11:01:36.968Z",
        "__v": 0,
        "desc": "New testing"
    }
]
```
***Status Code:*** 200


### 4. PUT - update post
***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:8800/api/posts/60dd9fd280e3194b3f458035
```
***Body:***

```js        
{
    "userId":"60dd9d99a5330e494d584a81",
    "desc" : "New testing"
}
```

##### I. Example Response: PUT - update post
```js
"Post has been updated"
```
***Status Code:*** 200



### 5. DELETE - delete post
***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:8800/api/posts/60dd9fd280e3194b3f458035
```
***Body:***
```js        
{
    "userId":"60dd9d99a5330e494d584a81"
}
```
##### I. Example Response: DELETE - delete post
```js
"Post has been deleted"
```
***Status Code:*** 200



### 6. PUT - like dislike post
***Endpoint:***
```bash
Method: PUT
Type: RAW
URL: http://localhost:8800/api/posts/60dd9fd280e3194b3f458035/like
```
***Body:***

```js        
{
    "userId":"60dd9d99a5330e494d584a81"
}
```
##### I. Example Response: PUT - like dislike post
```js
"The post has been liked"
```
***Status Code:*** 200

## Conversation

### 1. GET -  get conversation includes two userId
***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8800/api/conversations/find/60dd9b201ef546469a69142f/60dd9d99a5330e494d584a81
```

##### I. Example Response: GET -  get conversation includes two userId
```js
{
    "members": [
        "60dd9d99a5330e494d584a81",
        "60dd9b201ef546469a69142f"
    ],
    "_id": "60dda1272724b34ccceab7fa",
    "createdAt": "2021-07-01T11:04:07.455Z",
    "updatedAt": "2021-07-01T11:04:07.455Z",
    "__v": 0
}
```
***Status Code:*** 200


### 2. GET -  get coversations of a user
***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8800/api/conversations/60dd9b201ef546469a69142f
```
##### I. Example Response: GET -  get coversations of a user
```js
[
    {
        "members": [
            "60dd9d99a5330e494d584a81",
            "60dd9b201ef546469a69142f"
        ],
        "_id": "60dda1272724b34ccceab7fa",
        "createdAt": "2021-07-01T11:04:07.455Z",
        "updatedAt": "2021-07-01T11:04:07.455Z",
        "__v": 0
    }
]
```
***Status Code:*** 200

### 3. GET -  get messges in a conversation
***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8800/api/messages/60dda1272724b34ccceab7fa
```
##### I. Example Response: GET -  get messges in a conversation
```js
[
    {
        "_id": "60dda1522724b34ccceab7fe",
        "conversationId": "60dda1272724b34ccceab7fa",
        "sender": "60dd9d99a5330e494d584a81",
        "text": "Hello",
        "createdAt": "2021-07-01T11:04:50.915Z",
        "updatedAt": "2021-07-01T11:04:50.915Z",
        "__v": 0
    }
]
```
***Status Code:*** 200



### 4. POST - add message to conversation
***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:8800/api/messages
```
***Body:***

```js        
{
    "conversationId":"60dda1272724b34ccceab7fa",
    "sender":"60dd9d99a5330e494d584a81",
    "text": "Hello"
}
```
##### I. Example Response: POST - add message to conversation
```js
{
    "_id": "60dda1522724b34ccceab7fe",
    "conversationId": "60dda1272724b34ccceab7fa",
    "sender": "60dd9d99a5330e494d584a81",
    "text": "Hello",
    "createdAt": "2021-07-01T11:04:50.915Z",
    "updatedAt": "2021-07-01T11:04:50.915Z",
    "__v": 0
}
```
***Status Code:*** 200





### 5. POST - create new conversation
***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:8800/api/conversations
```
***Body:***

```js        
{
    "senderId":"60dd9d99a5330e494d584a81",
    "receiverId":"60dd9b201ef546469a69142f"
}
```

##### I. Example Response: POST - create new conversation
```js
{
    "members": [
        "60dd9d99a5330e494d584a81",
        "60dd9b201ef546469a69142f"
    ],
    "_id": "60dda1272724b34ccceab7fa",
    "createdAt": "2021-07-01T11:04:07.455Z",
    "updatedAt": "2021-07-01T11:04:07.455Z",
    "__v": 0
}
```
***Status Code:*** 200


---
[Back to top](#cofeed)
