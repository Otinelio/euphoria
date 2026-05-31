import { useSettingsStore } from "@/store/settingsStore";

export const DEFAULT_WHATSAPP = "+22890000000";

export function getWhatsAppNumber(): string {
  try {
    return useSettingsStore.getState().whatsappNumber || DEFAULT_WHATSAPP;
  } catch {
    return DEFAULT_WHATSAPP;
  }
}

export function openWhatsApp(message: string) {
  const num = getWhatsAppNumber().replace(/[^\d]/g, "");
  const url = `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") window.open(url, "_blank");
}

export interface CartLine {
  name: string;
  qty: number;
  price: number;
}

export function buildOrderMessage(
  lines: CartLine[],
  total: number,
  mode: "Delivery" | "Takeaway",
  address?: string,
) {
  const items = lines.map((l) => `${l.name} x${l.qty} — ${l.price * l.qty} FCFA`).join("\n");
  return [
    "*New Order — Euphoria Pub Food & Bar*",
    "---------------------------------",
    items,
    "---------------------------------",
    `*Total: ${total} FCFA*`,
    `Type: ${mode}`,
    address ? `Address: ${address}` : "",
    "---------------------------------",
    "Thank you!",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildReservationMessage(d: {
  name: string; phone: string; date: string; time: string;
  guests: number; occasion: string; notes: string;
}) {
  return [
    "*TABLE RESERVATION — Euphoria Pub Food & Bar*",
    "---------------------------------",
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Date: ${d.date}`,
    `Time: ${d.time}`,
    `Guests: ${d.guests}`,
    `Occasion: ${d.occasion}`,
    `Notes: ${d.notes}`,
    "---------------------------------",
  ].join("\n");
}

export function buildRSVPMessage(d: {
  name: string; event: string; date: string; guests: number;
}) {
  return [
    "*RSVP — Euphoria Event*",
    "---------------------------------",
    `Name: ${d.name}`,
    `Event: ${d.event}`,
    `Date: ${d.date}`,
    `Guests: ${d.guests}`,
    "---------------------------------",
  ].join("\n");
}

export function buildContactMessage(d: {
  name: string; email: string; subject: string; message: string;
}) {
  return [
    "*Contact — Euphoria Pub Food & Bar*",
    "---------------------------------",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Subject: ${d.subject}`,
    "Message:",
    d.message,
    "---------------------------------",
  ].join("\n");
}