
class SearchAddressController < ApplicationController

  def search 
    key = ENV['KEY']
  
    address = params[:address].split.join("+")  

    url = "https://www.googleapis.com/civicinfo/v2/voterinfo?address=#{address}&key=#{key}"

    response = RestClient::Request.execute(
      method: :get, 
      url: "#{url}",
    )

    render json: response 

  end

end
