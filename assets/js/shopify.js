const Shopify = require('@shopify/shopify-api');

const shopifyConfig = {
  shopName: 'your-store.myshopify.com',
  accessToken: 'your_access_token',
  apiKey: 'your_api_key',
  apiSecret: 'your_api_secret',
  apiVersion: '2024-01'
};

// Initialize Shopify
const shopify = new Shopify.Clients.Rest(
  shopifyConfig.shopName,
  shopifyConfig.accessToken
);

// Product management
async function createShopifyProduct(product) {
  try {
    const shopifyProduct = await shopify.post({
      path: 'products',
      data: {
        product: {
          title: product.name,
          body_html: product.description,
          vendor: 'Transformer Innovation Hub',
          product_type: product.category,
          variants: [
            {
              price: product.price,
              inventory_quantity: product.stock,
              requires_shipping: true
            }
          ]
        }
      }
    });
    return shopifyProduct;
  } catch (error) {
    console.error('Shopify Error:', error);
    throw error;
  }
}

// Order management
async function createShopifyOrder(order) {
  try {
    const shopifyOrder = await shopify.post({
      path: 'orders',
      data: {
        order: {
          line_items: order.items.map(item => ({
            variant_id: item.variantId,
            quantity: item.quantity
          })),
          customer: {
            first_name: order.customer.firstName,
            last_name: order.customer.lastName,
            email: order.customer.email
          },
          financial_status: 'paid',
          fulfillment_status: null
        }
      }
    });
    return shopifyOrder;
  } catch (error) {
    console.error('Shopify Error:', error);
    throw error;
  }
}

// Inventory sync
async function syncInventory() {
  try {
    const products = await shopify.get({
      path: 'products'
    });
    
    // Update local database with Shopify inventory
    products.data.products.forEach(async (product) => {
      const variant = product.variants[0];
      await updateLocalInventory(product.id, variant.inventory_quantity);
    });
  } catch (error) {
    console.error('Inventory Sync Error:', error);
    throw error;
  }
}

module.exports = {
  createShopifyProduct,
  createShopifyOrder,
  syncInventory
};