class Api::HashTagsController < ApplicationController
  def search
    # query_str = URI.parse(request.original_url).query
    @hash_tags = HashTag.select('hash_tag').distinct
            .where("LOWER(hash_tag) ~ ?", params[:query].downcase)
    render :search
  end
end
