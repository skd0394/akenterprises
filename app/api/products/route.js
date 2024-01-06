import { connectToDB } from "@/utils/database";
import { Product } from "@/Model/products";

export const GET = async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category");
  // console.log(category);
  try {
    await connectToDB();
    let products;
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }
    // console.log(products);

    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all Products", { status: 500 });
  }
};
