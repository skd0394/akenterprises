import { connectToDB } from "@/utils/database";
import { Category } from "@/Model/products";

export const POST = async (req, res) => {
  const {category,products } = await req.json();
  // console.log(category,products)

  try {
    await connectToDB();
    // await Category.insertMany([
    //   {
    //     category: "Mechanical Project Items",
    //     products: [
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //     ],
    //   },
    //   {
    //     category: "Rental Basis",
    //     products: [
    //       {
    //         title: "Welding cable aluminium 75 square mm",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/JmbHMuVL.jpeg",
    //         price: 8960,
    //       },
    //       {
    //         title: "VIRGO PLUS ARC 400 G2 3PH",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/OSdujWyU.jpeg",
    //         price: 19999,
    //       },
    //       {
    //         title: "MIG roll par KG",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/UZjsdMqU.jpeg",
    //         price: 98,
    //       },
    //       {
    //         title: "Mig silicone spray per piece",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/hiM9l0WC.jpeg",
    //         price: 165,
    //       },
    //       {
    //         title: "Gas cutting hose pipe red and blue / 200 metre",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/KYDReE0k.jpeg",
    //         price: 9899,
    //       },
    //       {
    //         title:
    //           "Ferreterro 5 Ton 4m Red Double Ply Flat Polyester Webbing Sling / per piece",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/WoPTW9k1.jpeg",
    //         price: 1350,
    //       },
    //       {
    //         title:
    //           "Ferreterro 4 Ton 4m Grey Double Ply Flat Polyester Webbing Sling\n Per piece",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/VWLTSlZV.jpeg",
    //         price: 1150,
    //       },
    //       {
    //         title:
    //           "JIC PRODUCTS® 10 Ton 6 Mtr Orange Color Double Ply Webbing Slings Flat Belt by J",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/3JlGU6Ur.jpeg",
    //         price: 3899,
    //       },
    //       {
    //         title: "PUG CUTTER With Rail Line",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 9700,
    //       },
    //     ],
    //   },
    //   {
    //     category: "Civil Materials",
    //     products: [
    //       {
    //         title: "Roshni welding machine 400 Amp 3 phase",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/0hpj0TZH.jpeg",
    //         price: 18800,
    //       },
    //       {
    //         title: "Measurement Tape 3 Metre",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 46,
    //       },
    //       {
    //         title: "Measurement Tape 5 Mtr",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 87,
    //       },
    //       {
    //         title: "800 mm Proficut Gas Cutting Torch 71607499\nby Messer",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 2250,
    //       },
    //       {
    //         title:
    //           "6 Mtr Single Leg 20mm Wire Rope Sling 5.1 Tonne · Up to 5100kg capacity · 2",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/q3PUIBSM.jpeg",
    //         price: 2790,
    //       },
    //       {
    //         title: "Steel Single Loop Chain Sling",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 2888,
    //       },
    //       {
    //         title:
    //           "Par Mtr Rs 200 / Polished Stainless Steel Wire Rope And Wire Rope Slings, SS304,",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/KFXdaRQK.jpeg",
    //         price: 200,
    //       },
    //       {
    //         title:
    //           "20 Kg D&H Mild Steel Cromotherme-II Electrodes, Size: 4.00x350",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/H3Fx96kQ.jpeg",
    //         price: 2890,
    //       },
    //       {
    //         title:
    //           "Roshni 400A Mosfet Type Three Phase Welding Machine, ARC400MOS",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 18500,
    //       },
    //     ],
    //   },
    //   {
    //     category: "Covid Essentials",
    //     products: [
    //       {
    //         title: "LPG, Regulator",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/QlyYAXgh.jpeg",
    //         price: 980,
    //       },
    //       {
    //         title:
    //           "MS Electro Forged  Grating  ( PAR  TON) Minimum Order Quantity 5 Ton",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/hAM8AzEG.webp",
    //         price: 68000,
    //       },
    //       {
    //         title: "Welding cable aluminium 75 square mm",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/JmbHMuVL.jpeg",
    //         price: 8960,
    //       },
    //       {
    //         title: "VIRGO PLUS ARC 400 G2 3PH",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/OSdujWyU.jpeg",
    //         price: 19999,
    //       },
    //       {
    //         title: "MIG roll par KG",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/UZjsdMqU.jpeg",
    //         price: 98,
    //       },
    //       {
    //         title: "Mig silicone spray per piece",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/hiM9l0WC.jpeg",
    //         price: 165,
    //       },
    //       {
    //         title: "Gas cutting hose pipe red and blue / 200 metre",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/KYDReE0k.jpeg",
    //         price: 9899,
    //       },
    //       {
    //         title:
    //           "Ferreterro 5 Ton 4m Red Double Ply Flat Polyester Webbing Sling / per piece",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/WoPTW9k1.jpeg",
    //         price: 1350,
    //       },
    //       {
    //         title:
    //           "Ferreterro 4 Ton 4m Grey Double Ply Flat Polyester Webbing Sling\n Per piece",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/VWLTSlZV.jpeg",
    //         price: 1150,
    //       },
    //     ],
    //   },
    //   {
    //     category: "More Items",
    //     products: [
    //       {
    //         title:
    //           "JIC PRODUCTS® 10 Ton 6 Mtr Orange Color Double Ply Webbing Slings Flat Belt by J",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/3JlGU6Ur.jpeg",
    //         price: 3899,
    //       },
    //       {
    //         title: "PUG CUTTER With Rail Line",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 9700,
    //       },
    //       {
    //         title: "Roshni welding machine 400 Amp 3 phase",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/1142927/0hpj0TZH.jpeg",
    //         price: 18800,
    //       },
    //       {
    //         title: "Measurement Tape 3 Metre",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 46,
    //       },
    //       {
    //         title: "Measurement Tape 5 Mtr",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 87,
    //       },
    //       {
    //         title: "800 mm Proficut Gas Cutting Torch 71607499\nby Messer",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 2250,
    //       },
    //       {
    //         title:
    //           "6 Mtr Single Leg 20mm Wire Rope Sling 5.1 Tonne · Up to 5100kg capacity · 2",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/q3PUIBSM.jpeg",
    //         price: 2790,
    //       },
    //       {
    //         title: "Steel Single Loop Chain Sling",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 2888,
    //       },
    //       {
    //         title:
    //           "Par Mtr Rs 200 / Polished Stainless Steel Wire Rope And Wire Rope Slings, SS304,",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/KFXdaRQK.jpeg",
    //         price: 200,
    //       },
    //       {
    //         title:
    //           "20 Kg D&H Mild Steel Cromotherme-II Electrodes, Size: 4.00x350",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/H3Fx96kQ.jpeg",
    //         price: 2890,
    //       },
    //       {
    //         title:
    //           "Roshni 400A Mosfet Type Three Phase Welding Machine, ARC400MOS",
    //         image:
    //           "https://cdn.dotpe.in/longtail/store-items/default_image.png",
    //         price: 18500,
    //       },
    //       {
    //         title: "LPG, Regulator",
    //         image:
    //           "https://cdn.dotpe.in/longtail/item_thumbnails/1142927/QlyYAXgh.jpeg",
    //         price: 980,
    //       },
    //     ],
    //   },
    // ]);
    

    // await newProduct.save()
  await Category.insertMany([{category,products}])

    return new Response(JSON.stringify("newProduct"), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
