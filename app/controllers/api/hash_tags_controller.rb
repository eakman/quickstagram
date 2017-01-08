class Api::HashTagsController < ApplicationController
  def search
    @hash_tags = HashTag.select('hash_tag').distinct
            .where("LOWER(hash_tag) ~ ?", params[:query].downcase)
    render :search
  end
end
