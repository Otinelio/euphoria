export type Badge = "Popular" | "Chef's Pick" | "Spicy" | "Veg";
export type FoodCategory = "Starters" | "Burgers" | "Mains" | "Sides" | "Desserts";

export interface MenuItem {
  id: string;
  name: string;
  category: FoodCategory;
  price: number;
  description: string;
  image: string;
  badges: Badge[];
  available: boolean;
}

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=70`;

export const seedMenu: MenuItem[] = [
  { id: "f1", name: "Crispy Calamari", category: "Starters", price: 4500, description: "Lightly breaded, sriracha mayo.", image: img("photo-1625944525200-5c8898be513d"), badges: [], available: true },
  { id: "f2", name: "Bruschetta Trio", category: "Starters", price: 3800, description: "Tomato, pesto, mushroom.", image: img("photo-1572695157366-5e585ab2b69f"), badges: [], available: true },
  { id: "f3", name: "Euphoria Nachos", category: "Starters", price: 5200, description: "Loaded with pulled chicken, cheese, jalapeños.", image: img("photo-1582169296194-e4d644c48063"), badges: ["Popular"], available: true },

  { id: "f4", name: "The Black Beast", category: "Burgers", price: 8500, description: "Double smash patty, black bun, smoked cheddar, crispy onions.", image: img("photo-1568901346375-23c9450c58cd"), badges: ["Chef's Pick"], available: true },
  { id: "f5", name: "Gold Rush Burger", category: "Burgers", price: 10500, description: "Wagyu blend, gold sauce, truffle mayo.", image: img("photo-1571091718767-18b5b1457add"), badges: ["Popular"], available: true },
  { id: "f6", name: "Bordeaux Meltdown", category: "Burgers", price: 9000, description: "BBQ glazed patty, caramelized onion, brie.", image: img("photo-1550547660-d9450f859349"), badges: [], available: true },
  { id: "f7", name: "Veggie Crown", category: "Burgers", price: 7500, description: "Portobello, halloumi, roasted peppers.", image: img("photo-1520072959219-c595dc870360"), badges: ["Veg"], available: true },

  { id: "f8", name: "Grilled Ribeye (300g)", category: "Mains", price: 22000, description: "Herb butter, roasted potatoes.", image: img("photo-1558030006-450675393462"), badges: ["Chef's Pick"], available: true },
  { id: "f9", name: "Chicken Piri-Piri", category: "Mains", price: 12500, description: "Spatchcock, lemon rice.", image: img("photo-1598103442097-8b74394b95c6"), badges: ["Spicy"], available: true },
  { id: "f10", name: "Seafood Pasta", category: "Mains", price: 14000, description: "Linguine, mixed seafood, white wine sauce.", image: img("photo-1563379091339-03b21ab4a4f8"), badges: [], available: true },

  { id: "f11", name: "Truffle Fries", category: "Sides", price: 3500, description: "Parmesan, parsley, truffle oil.", image: img("photo-1573080496219-bb080dd4f877"), badges: ["Popular"], available: true },
  { id: "f12", name: "Onion Rings Stack", category: "Sides", price: 2800, description: "Buttermilk battered, smoked aioli.", image: img("photo-1639024471283-03518883512d"), badges: [], available: true },
  { id: "f13", name: "House Salad", category: "Sides", price: 2500, description: "Mixed greens, citrus vinaigrette.", image: img("photo-1512621776951-a57141f2eefd"), badges: ["Veg"], available: true },

  { id: "f14", name: "Molten Lava Cake", category: "Desserts", price: 4500, description: "Gold dust, vanilla scoop.", image: img("photo-1606313564200-e75d5e30476c"), badges: ["Popular"], available: true },
  { id: "f15", name: "Tiramisu Euphoria", category: "Desserts", price: 4000, description: "Espresso-soaked, mascarpone.", image: img("photo-1571877227200-a0d98ea607e9"), badges: [], available: true },
];