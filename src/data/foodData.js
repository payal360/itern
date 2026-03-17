const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil on a crispy crust",
    price: 299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
    category: "veg",
    restaurant: "Pizza Paradise",
    isPopular: true
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and exotic spices",
    price: 349,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
    category: "non-veg",
    restaurant: "Biryani House",
    isPopular: true
  },
  {
    id: 3,
    name: "Paneer Butter Masala",
    description: "Soft paneer cubes in rich, creamy tomato-based gravy",
    price: 279,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
    category: "veg",
    restaurant: "Curry Corner",
    isPopular: true
  },
  {
    id: 4,
    name: "Chocolate Brownie",
    description: "Rich, fudgy chocolate brownie topped with vanilla ice cream",
    price: 149,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400",
    category: "dessert",
    restaurant: "Sweet Tooth",
    isPopular: false
  },
  {
    id: 5,
    name: "Butter Chicken",
    description: "Tender chicken pieces in a smooth, buttery tomato sauce",
    price: 329,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
    category: "non-veg",
    restaurant: "Curry Corner",
    isPopular: true
  },
  {
    id: 6,
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles with fresh vegetables and Indo-Chinese sauces",
    price: 199,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
    category: "veg",
    restaurant: "Wok Station",
    isPopular: false
  },
  {
    id: 7,
    name: "Fish & Chips",
    description: "Crispy battered fish served with golden fries and tartar sauce",
    price: 399,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=400",
    category: "non-veg",
    restaurant: "Seafood Shack",
    isPopular: false
  },
  {
    id: 8,
    name: "Gulab Jamun",
    description: "Soft, spongy milk dumplings soaked in rose-flavored sugar syrup",
    price: 99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1666190094762-2a51ff281e66?w=400",
    category: "dessert",
    restaurant: "Sweet Tooth",
    isPopular: true
  },
  {
    id: 9,
    name: "Veggie Burger",
    description: "Grilled veggie patty with fresh lettuce, tomato, and special sauce",
    price: 179,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
    category: "veg",
    restaurant: "Burger Barn",
    isPopular: false
  },
  {
    id: 10,
    name: "Chicken Wings",
    description: "Crispy fried chicken wings tossed in spicy buffalo sauce",
    price: 299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400",
    category: "non-veg",
    restaurant: "Wings & Things",
    isPopular: true
  },
  {
    id: 11,
    name: "Dal Makhani",
    description: "Creamy black lentils slow-cooked with butter and spices",
    price: 229,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
    category: "veg",
    restaurant: "Curry Corner",
    isPopular: false
  },
  {
    id: 12,
    name: "Ice Cream Sundae",
    description: "Three scoops of ice cream with chocolate sauce, nuts, and cherry",
    price: 169,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
    category: "dessert",
    restaurant: "Sweet Tooth",
    isPopular: false
  },
  {
    id: 13,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling",
    price: 149,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400",
    category: "veg",
    restaurant: "South Spice",
    isPopular: true
  },
  {
    id: 14,
    name: "Mutton Rogan Josh",
    description: "Tender mutton cooked in aromatic Kashmiri spices",
    price: 449,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=400",
    category: "non-veg",
    restaurant: "Curry Corner",
    isPopular: false
  },
  {
    id: 15,
    name: "Cheesecake",
    description: "Creamy New York style cheesecake with berry compote",
    price: 199,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400",
    category: "dessert",
    restaurant: "Sweet Tooth",
    isPopular: true
  },
  {
    id: 16,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy fried bread",
    price: 169,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400",
    category: "veg",
    restaurant: "Punjab Dhaba",
    isPopular: false
  }
];

export const restaurants = [
  {
    id: 1,
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
  },
  {
    id: 2,
    name: "Biryani House",
    cuisine: "North Indian",
    rating: 4.8,
    deliveryTime: "40-50 min",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400"
  },
  {
    id: 3,
    name: "Curry Corner",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "35-45 min",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400"
  },
  {
    id: 4,
    name: "Sweet Tooth",
    cuisine: "Desserts",
    rating: 4.7,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400"
  },
  {
    id: 5,
    name: "Wok Station",
    cuisine: "Chinese",
    rating: 4.3,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=400"
  },
  {
    id: 6,
    name: "Burger Barn",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400"
  }
];

export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'veg', name: 'Vegetarian', icon: '🥗' },
  { id: 'non-veg', name: 'Non-Veg', icon: '🍖' },
  { id: 'dessert', name: 'Desserts', icon: '🍰' }
];

export default foodData;
