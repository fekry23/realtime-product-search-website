const axios = require('axios');

class ProductService {
  constructor(rapidApiKey) {
    this.apiKey = rapidApiKey;
    this.baseURL = 'https://real-time-product-search.p.rapidapi.com';
    this.headers = {
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    };
  }

  validateSearchParams(search) {
    if (typeof search !== 'string' || search.trim() === '') {
      throw new Error('Search parameter is required and must be a non-empty string.');
    }
  }

  async searchProduct(search, page = 1, sort_by = undefined, min_price = undefined, max_price = undefined, on_sale = undefined, min_rating = undefined) {
    try {
      this.validateSearchParams(search);
      const options = {
        method: 'GET',
        url: `${this.baseURL}/search`,
        params: {
          q: toString(search),
          country: 'my',
          language: 'en',
          limit: '30',
          page: page,
          sort_by: sort_by,
          min_price: min_price,
          
        },
        headers: this.headers
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error('Error in ProductService:', error.message);
      throw new Error('Failed to fetch product data');
    }
  }
}

module.exports = ProductService;
