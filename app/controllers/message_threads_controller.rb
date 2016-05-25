class MessageThreadsController < ApplicationController
  def index
    @thread_uid = params[:id]
    @messages = Message.where(thread_uid: @thread_uid)
  end
end
