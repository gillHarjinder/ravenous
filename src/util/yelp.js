const apiKey = 'APi_goes_here';


// this object is used to store the functionality 
// needed to interact with YELP API

const Yelp = {
	// This method is used to retriev 
	// the search result from YELP API


	search(term, location, sortBy){
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
			headers: {
				 Authorization: `Bearer ${apiKey}`  // this take care of Authorization for browser to acces API
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(jsonResponse.businesses){
				return jsonResponse.businesses.map(business => ({
						id: business.id,
				        imageSrc: business.image_url,
				        name: business.name,
				        address: business.location.address1,
				        city: business.location.city,
				        state: business.location.state,
				        zipCode: business.location.zip_code,
				        category: business.categories[0].title,
				        rating: business.rating,
				        reviewCount: business.review_count
					}));
			}
		});


	}
};



export default Yelp;