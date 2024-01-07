const ProductService = require("../../services/product/productService");
const rapidApiKey = process.env.RAPIDAPI_KEY;
const productService = new ProductService(rapidApiKey);

class productController {

  static async searchProduct(req, res) {
    
    try {
      // Request validation (simplified example)
      const { search, page, sort_by, min_price, max_price, on_sale, min_rating } = req.query;

      // Call the productService.searchProduct method
      const productData = await productService.searchProduct(
        search,
        page,
        sort_by,
        min_price,
        max_price,
        on_sale,
        min_rating,
      );

      // Respond with the productData
      res.json(productData);
    } catch (error) {
      // Handle errors appropriately
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

module.exports = productController;
