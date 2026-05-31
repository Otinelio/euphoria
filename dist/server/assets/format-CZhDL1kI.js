const formatFCFA = (n) => new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
export {
  formatFCFA as f
};
