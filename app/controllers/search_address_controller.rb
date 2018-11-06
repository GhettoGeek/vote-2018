
class SearchAddressController < ApplicationController

  def search 
    key = ENV['KEY']
  
    address = params[:address].split.join("+")    

    response = RestClient::Request.execute(
      method: :get, 
      url: "https://www.googleapis.com/civicinfo/v2/voterinfo?address=#{address}&key=#{key}",
    )

      render json: response 

  end

end
