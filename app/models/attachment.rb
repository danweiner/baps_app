class Attachment < ActiveRecord::Base
  belongs_to :pet

  mount_uploader :attachment, AttachmentUploader
end
