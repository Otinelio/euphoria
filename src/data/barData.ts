export type DrinkBadge = "Popular" | "Strong" | "Spicy" | "Chef's Pick";
export type DrinkCategory =
  | "Signatures"
  | "Classics"
  | "Mocktails"
  | "Spirits"
  | "Beers"
  | "Wines"
  | "Shots";

export interface Drink {
  id: string;
  name: string;
  category: DrinkCategory;
  base: string;
  notes: string;
  price: number;
  image: string;
  badges: DrinkBadge[];
}

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=800&q=70`;

export const seedBar: Drink[] = [
  { id: "d1", name: "Euphoria Smoke", category: "Signatures", base: "Bourbon", notes: "Honey, activated charcoal, smoke effect", price: 7500, image: img("photo-1551024709-8f23befc6f87"), badges: ["Chef's Pick", "Strong"] },
  { id: "d2", name: "Golden Negroni", category: "Signatures", base: "Gin", notes: "Campari, sweet vermouth, gold shimmer", price: 6500, image: img("photo-1514362545857-3bc16c4c7d1b"), badges: ["Popular"] },
  { id: "d3", name: "Bordeaux Sour", category: "Signatures", base: "Whiskey", notes: "Lemon, bordeaux wine float", price: 6000, image: img("photo-1536935338788-846bb9981813"), badges: ["Popular"] },
  { id: "d4", name: "Midnight Garden", category: "Signatures", base: "Dark Rum", notes: "Mint, cucumber, charcoal lemonade", price: 6000, image: img("photo-1587223962930-cb7f31384c19"), badges: [] },
  { id: "d5", name: "Mojito", category: "Classics", base: "White Rum", notes: "Mint, lime, soda", price: 5500, image: img("photo-1551538827-9c037cb4f32a"), badges: [] },
  { id: "d6", name: "Cosmopolitan", category: "Classics", base: "Vodka", notes: "Cranberry, lime, triple sec", price: 5500, image: img("photo-1609951651556-5334e2706168"), badges: [] },
  { id: "d7", name: "Espresso Martini", category: "Classics", base: "Vodka", notes: "Espresso, coffee liqueur", price: 6000, image: img("photo-1545438102-799c3991ffb2"), badges: ["Popular"] },
  { id: "d8", name: "Old Fashioned", category: "Classics", base: "Bourbon", notes: "Sugar, bitters, orange peel", price: 6500, image: img("photo-1470337458703-46ad1756a187"), badges: ["Strong"] },
  { id: "d9", name: "Virgin Smoke", category: "Mocktails", base: "Non-alcoholic", notes: "Apple, ginger, charcoal, rosemary", price: 4000, image: img("photo-1544145945-f90425340c7e"), badges: [] },
  { id: "d10", name: "Hibiscus Fizz", category: "Mocktails", base: "Non-alcoholic", notes: "Hibiscus, lime, sparkling water", price: 3500, image: img("photo-1497534446932-c925b458314e"), badges: [] },
  { id: "d11", name: "Local Draft", category: "Beers", base: "Lager", notes: "Crisp, golden, refreshing", price: 2500, image: img("photo-1535958636474-b021ee887b13"), badges: [] },
  { id: "d12", name: "Heineken Bottle", category: "Beers", base: "Lager", notes: "Classic European lager", price: 3000, image: img("photo-1608270586620-248524c67de9"), badges: [] },
  { id: "d13", name: "Guinness Draught", category: "Beers", base: "Stout", notes: "Creamy, roasted malt", price: 3200, image: img("photo-1571805341302-f857479d29c8"), badges: [] },
];