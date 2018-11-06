
class SearchAddressController < ApplicationController

  def search 
    key = ENV['API_KEY']
  
    address = params[:address].split.join("+")  

    url = "https://www.googleapis.com/civicinfo/v2/voterinfo?address=#{address}&key=#{key}"

    begin
    response = RestClient::Request.execute(
      method: :get, 
      url: "#{url}",
    )
    rescue RestClient::ExceptionWithResponse => e
    puts e.response
    end

    render json: response 

  end

end
