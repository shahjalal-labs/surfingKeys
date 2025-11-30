verify

1. age validation. (you must be 18 don't need)
2. user is blocked still showing block button not showing unblock button

# most important:

### DASHBOARD SECTION: SETTINGS, SECURITY, Revenue

## IN APP PURCHASE

# 1. block user:

# 2. notification distance:

# 3. snooze mode: hide me from nearby list

# 4. hide my distance from other

# 5. notify me about activities nearby

# 6. notification distance:

# 7. redeem code: (coupon code)// removed

#### Dashboard needs to be fixed:

- 1. user verified need to remove
- 2.

```
vps, mongodb database atlas url, twilio, domain, s3 bucket
vps, domain from hostinger
s3 bucket from digital ocean
twilio
```

block feature:

1. dont get activity from both blocked direction
2. don't get account on people here
3. conflicting from activity member viewing: and chat messages from group

think when user create one activity,
it can be private or public,

how can this user chat with this activity group,

will automatic this come to that creator rooms,

?

```
Chat Room Becomes Accessible: User can now access the group chat room via:
ts
GET /chat/group/:activityId



here is the culprit bro.

think creator approve,

still user needs to hit get request /chat/group/activityid,


i need to auto this don't want hit this,

think normally how a general use hit this api,

i need real time,


creator approve, automatic  joiner room created or added, and real time refreshes message rooms so  he can immediate come to messages,

clarify me.
```

# postman documentation:

https://documenter.getpostman.com/view/48491387/2sB3WpT2ij

# backend source code:

https://drive.google.com/file/d/19V7yDLdRxOCgWEGhEyY3QRjxcIcZB3TF/view?usp=sharing

hello there, hope you are doing well.

There is no need for a pending button when we have alerts already. That is not something in either app so I'm not sure why you guys added that.

pending button is given for better and easy navigation. This button is only visible if the user has pending join request. otherwise it won't show. it's given for quick and smoother navigation. so that the creator don't only depends on push notification

# I didn't see push notifications besides when you get a friend request.

# There wasnt a notification when you sent a message or when you posted an activity on the map.

for activity notification, by default it notify if it occurs under 20 km range by default. user can change it from settings. For freind request it's working fine, some times emulator can miss but real device never miss
