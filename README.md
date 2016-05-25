# Simple React/Rails/Pusher example

This is a simple real time messaging example app built with React, Rails and [Pusher](https://pusher.com/).
It was created to experiment with the Pusher real time messaging platform. All you can do
is visit a threads page and then submit messages to that thread which will update in real time.

For example if I was to visit localhost:5000/treads/test_thread and then in another window
submit a message from the root page using the thread_uid 'test_thread' the test_thread
page will update in real time.

## How to try it out:
* Clone repo
* Bundle install
* Add your Pusher keys to secrets.yml (if you don't have an account sign up for a free account)
* Start server
* Make up a unique name for the thread and in a new window go to localhost:3000/threads/made_up_thread_uid
* At root create a message and use the thread_uid you just made up, press submit.
* The thread window should update in real time.

