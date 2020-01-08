const apiKey ='zkmz5tlgoryc6JUTHc3HRKN-h321_X8ISgoaBb9LN34q_hXVkkauuTqt7j8qRuu-6b0jAIT3f-WvVKKkIKvmOH9I4TITgn0-DPWldvqUdBRKugf2zuGcsJEVqd8rW3Yx'

const Yelp = {
  search(term, location, sortBy) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
  headers: {
      Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          address2: business.location.address2,
          address3:business.location.address3,
          city: business.location.city,
          state: business.location.state,
          zip_code: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          price: business.price
        }));
      }
    })
  }
};

export default Yelp;
