import { create } from "zustand";
import { persist } from "zustand/middleware";
const img$1 = (q) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=70`;
const seedMenu = [
  { id: "f1", name: "Crispy Calamari", category: "Starters", price: 4500, description: "Lightly breaded, sriracha mayo.", image: img$1("photo-1625944525200-5c8898be513d"), badges: [], available: true },
  { id: "f2", name: "Bruschetta Trio", category: "Starters", price: 3800, description: "Tomato, pesto, mushroom.", image: img$1("photo-1572695157366-5e585ab2b69f"), badges: [], available: true },
  { id: "f3", name: "Euphoria Nachos", category: "Starters", price: 5200, description: "Loaded with pulled chicken, cheese, jalapeños.", image: img$1("photo-1582169296194-e4d644c48063"), badges: ["Popular"], available: true },
  { id: "f4", name: "The Black Beast", category: "Burgers", price: 8500, description: "Double smash patty, black bun, smoked cheddar, crispy onions.", image: img$1("photo-1568901346375-23c9450c58cd"), badges: ["Chef's Pick"], available: true },
  { id: "f5", name: "Gold Rush Burger", category: "Burgers", price: 10500, description: "Wagyu blend, gold sauce, truffle mayo.", image: img$1("photo-1571091718767-18b5b1457add"), badges: ["Popular"], available: true },
  { id: "f6", name: "Bordeaux Meltdown", category: "Burgers", price: 9e3, description: "BBQ glazed patty, caramelized onion, brie.", image: img$1("photo-1550547660-d9450f859349"), badges: [], available: true },
  { id: "f7", name: "Veggie Crown", category: "Burgers", price: 7500, description: "Portobello, halloumi, roasted peppers.", image: img$1("photo-1520072959219-c595dc870360"), badges: ["Veg"], available: true },
  { id: "f8", name: "Grilled Ribeye (300g)", category: "Mains", price: 22e3, description: "Herb butter, roasted potatoes.", image: img$1("photo-1558030006-450675393462"), badges: ["Chef's Pick"], available: true },
  { id: "f9", name: "Chicken Piri-Piri", category: "Mains", price: 12500, description: "Spatchcock, lemon rice.", image: img$1("photo-1598103442097-8b74394b95c6"), badges: ["Spicy"], available: true },
  { id: "f10", name: "Seafood Pasta", category: "Mains", price: 14e3, description: "Linguine, mixed seafood, white wine sauce.", image: img$1("photo-1563379091339-03b21ab4a4f8"), badges: [], available: true },
  { id: "f11", name: "Truffle Fries", category: "Sides", price: 3500, description: "Parmesan, parsley, truffle oil.", image: img$1("photo-1573080496219-bb080dd4f877"), badges: ["Popular"], available: true },
  { id: "f12", name: "Onion Rings Stack", category: "Sides", price: 2800, description: "Buttermilk battered, smoked aioli.", image: img$1("photo-1639024471283-03518883512d"), badges: [], available: true },
  { id: "f13", name: "House Salad", category: "Sides", price: 2500, description: "Mixed greens, citrus vinaigrette.", image: img$1("photo-1512621776951-a57141f2eefd"), badges: ["Veg"], available: true },
  { id: "f14", name: "Molten Lava Cake", category: "Desserts", price: 4500, description: "Gold dust, vanilla scoop.", image: img$1("photo-1606313564200-e75d5e30476c"), badges: ["Popular"], available: true },
  { id: "f15", name: "Tiramisu Euphoria", category: "Desserts", price: 4e3, description: "Espresso-soaked, mascarpone.", image: img$1("photo-1571877227200-a0d98ea607e9"), badges: [], available: true }
];
const img = (q) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=800&q=70`;
const seedBar = [
  { id: "d1", name: "Euphoria Smoke", category: "Signatures", base: "Bourbon", notes: "Honey, activated charcoal, smoke effect", price: 7500, image: img("photo-1551024709-8f23befc6f87"), badges: ["Chef's Pick", "Strong"] },
  { id: "d2", name: "Golden Negroni", category: "Signatures", base: "Gin", notes: "Campari, sweet vermouth, gold shimmer", price: 6500, image: img("photo-1514362545857-3bc16c4c7d1b"), badges: ["Popular"] },
  { id: "d3", name: "Bordeaux Sour", category: "Signatures", base: "Whiskey", notes: "Lemon, bordeaux wine float", price: 6e3, image: img("photo-1536935338788-846bb9981813"), badges: ["Popular"] },
  { id: "d4", name: "Midnight Garden", category: "Signatures", base: "Dark Rum", notes: "Mint, cucumber, charcoal lemonade", price: 6e3, image: img("photo-1587223962930-cb7f31384c19"), badges: [] },
  { id: "d5", name: "Mojito", category: "Classics", base: "White Rum", notes: "Mint, lime, soda", price: 5500, image: img("photo-1551538827-9c037cb4f32a"), badges: [] },
  { id: "d6", name: "Cosmopolitan", category: "Classics", base: "Vodka", notes: "Cranberry, lime, triple sec", price: 5500, image: img("photo-1609951651556-5334e2706168"), badges: [] },
  { id: "d7", name: "Espresso Martini", category: "Classics", base: "Vodka", notes: "Espresso, coffee liqueur", price: 6e3, image: img("photo-1545438102-799c3991ffb2"), badges: ["Popular"] },
  { id: "d8", name: "Old Fashioned", category: "Classics", base: "Bourbon", notes: "Sugar, bitters, orange peel", price: 6500, image: img("photo-1470337458703-46ad1756a187"), badges: ["Strong"] },
  { id: "d9", name: "Virgin Smoke", category: "Mocktails", base: "Non-alcoholic", notes: "Apple, ginger, charcoal, rosemary", price: 4e3, image: img("photo-1544145945-f90425340c7e"), badges: [] },
  { id: "d10", name: "Hibiscus Fizz", category: "Mocktails", base: "Non-alcoholic", notes: "Hibiscus, lime, sparkling water", price: 3500, image: img("photo-1497534446932-c925b458314e"), badges: [] },
  { id: "d11", name: "Local Draft", category: "Beers", base: "Lager", notes: "Crisp, golden, refreshing", price: 2500, image: img("photo-1535958636474-b021ee887b13"), badges: [] },
  { id: "d12", name: "Heineken Bottle", category: "Beers", base: "Lager", notes: "Classic European lager", price: 3e3, image: img("photo-1608270586620-248524c67de9"), badges: [] },
  { id: "d13", name: "Guinness Draught", category: "Beers", base: "Stout", notes: "Creamy, roasted malt", price: 3200, image: img("photo-1571805341302-f857479d29c8"), badges: [] }
];
const useMenuStore = create()(
  persist(
    (set) => ({
      food: seedMenu,
      drinks: seedBar,
      addFood: (m) => set((s) => ({ food: [m, ...s.food] })),
      updateFood: (id, patch) => set((s) => ({
        food: s.food.map((i) => i.id === id ? { ...i, ...patch } : i)
      })),
      removeFood: (id) => set((s) => ({ food: s.food.filter((i) => i.id !== id) })),
      addDrink: (d) => set((s) => ({ drinks: [d, ...s.drinks] })),
      updateDrink: (id, patch) => set((s) => ({
        drinks: s.drinks.map((i) => i.id === id ? { ...i, ...patch } : i)
      })),
      removeDrink: (id) => set((s) => ({ drinks: s.drinks.filter((i) => i.id !== id) })),
      reset: () => set({ food: seedMenu, drinks: seedBar })
    }),
    { name: "euphoria-menu" }
  )
);
export {
  useMenuStore as u
};
