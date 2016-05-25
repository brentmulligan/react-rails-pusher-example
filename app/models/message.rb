require 'pusher'

class Message < ActiveRecord::Base
  after_create :push_message

  private

  def push_message
    Pusher.trigger('test_channel', thread_uid, {
        from_uid: from_uid,
        to_uid: to_uid,
        id: id,
        message: message,
        created_at: created_at
    })
  end

end
