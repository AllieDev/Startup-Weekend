export const selectedProducts = {
  name: "Zip Tote Basket",
  price: "budget $20",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://storage.re-mint.com/longwaycalifornia/listings/10010389001-e7fdc2f7f651cb50dc34a091a943aa8e.jpeg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  categories: ["Jackets"],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    {
      name: "White",
      bgColor: "bg-white",
      selectedColor: "ring-gray-400",
    },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
        <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
      `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

export const users = [
  {
    role: "brand",
    name: "Helestines",
    profileImg: "../../assets",
  },
  {
    role: "contractor",
    name: "John Doe",
    profileImg: "../assets/unsplash_IF9TK5Uy-KI.png",
  },
  {
    role: "customer",
    name: "Sara Tay",
    profileImg: "../../assets/unsplash_rDEOVtE7vOs.png",
  },
];
