# config/initializers/pusher.rb
require 'pusher'

Pusher.app_id = Rails.application.secrets.pusher_app_id
Pusher.key = Rails.application.secrets.pusher_key
Pusher.secret = Rails.application.secrets.pusher_secret
Pusher.logger = Rails.logger
Pusher.encrypted = true