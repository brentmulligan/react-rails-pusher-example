json.array!(@messages) do |message|
  json.extract! message, :id, :from_uid, :to_uid, :message, :thread_uid
  json.url message_url(message, format: :json)
end
