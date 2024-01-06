import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "Product Title is required"],
  },
  image: {
    type: String,
    required: [true, "Product Image is required."],
  },
  price: {
    type: String,
    required: [true, "Price is required."],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
});

const CategorySchema = new Schema({
  category: {
    type: String,
    required: [true, "Category Name is required"],
  },
  products: [ProductSchema],
});

// Create a model for the product
const Product = models.Product || model("Product", ProductSchema);

// Create a model for the category
const Category = models.Category || model("Category", CategorySchema);

export { Product, Category };
