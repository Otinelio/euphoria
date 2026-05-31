import { u as useSettingsStore } from "./settingsStore-Ebfo6NmT.js";
const DEFAULT_WHATSAPP = "+22890000000";
function getWhatsAppNumber() {
  try {
    return useSettingsStore.getState().whatsappNumber || DEFAULT_WHATSAPP;
  } catch {
    return DEFAULT_WHATSAPP;
  }
}
function openWhatsApp(message) {
  const num = getWhatsAppNumber().replace(/[^\d]/g, "");
  const url = `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") window.open(url, "_blank");
}
function buildOrderMessage(lines, total, mode, address) {
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
    "Thank you!"
  ].filter(Boolean).join("\n");
}
function buildReservationMessage(d) {
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
    "---------------------------------"
  ].join("\n");
}
function buildRSVPMessage(d) {
  return [
    "*RSVP — Euphoria Event*",
    "---------------------------------",
    `Name: ${d.name}`,
    `Event: ${d.event}`,
    `Date: ${d.date}`,
    `Guests: ${d.guests}`,
    "---------------------------------"
  ].join("\n");
}
function buildContactMessage(d) {
  return [
    "*Contact — Euphoria Pub Food & Bar*",
    "---------------------------------",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Subject: ${d.subject}`,
    "Message:",
    d.message,
    "---------------------------------"
  ].join("\n");
}
export {
  buildOrderMessage as a,
  buildContactMessage as b,
  buildRSVPMessage as c,
  buildReservationMessage as d,
  openWhatsApp as o
};
