export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  tags: string[];
  image: string;
}

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1000&q=70`;

export const events: EventItem[] = [
  { id: "e1", name: "Gold Friday", date: "Every Friday", time: "22:00 — late", description: "DJ Set, themed cocktails, dress code: all black.", tags: ["DJ", "All Black"], image: img("photo-1571266028243-d220c6a6f4ea") },
  { id: "e2", name: "Bordeaux Saturdays", date: "Every Saturday", time: "21:00 — late", description: "Live band + extended cocktail menu.", tags: ["Live Band", "Cocktails"], image: img("photo-1493676304819-0d7a8d026dcf") },
  { id: "e3", name: "Happy Hour", date: "Mon–Thu", time: "17:00 — 20:00", description: "20% off all cocktails. The perfect way to begin the night.", tags: ["Happy Hour"], image: img("photo-1574096079513-d8259312b785") },
  { id: "e4", name: "Euphoria Anniversary Night", date: "Annual signature event", time: "Doors 20:00", description: "Full venue takeover, special menu, surprise guests.", tags: ["Signature", "Special"], image: img("photo-1492684223066-81342ee5ff30") },
];

export const weeklySchedule: { day: string; name: string; hasEvent: boolean }[] = [
  { day: "Mon", name: "Happy Hour", hasEvent: true },
  { day: "Tue", name: "Happy Hour", hasEvent: true },
  { day: "Wed", name: "Happy Hour", hasEvent: true },
  { day: "Thu", name: "Happy Hour", hasEvent: true },
  { day: "Fri", name: "Gold Friday", hasEvent: true },
  { day: "Sat", name: "Bordeaux Saturdays", hasEvent: true },
  { day: "Sun", name: "Quiet Sundays", hasEvent: false },
];