export const siteConfig = {
    brand: "Villa Amalia",
    city: "Avellino",
    phoneIntlNoPlus: "393318037628",
    email: "info@villaamalia.it",
    addressQuery: "Avellino",
    whatsappPrefill: "Ciao! Vorrei informazioni per una prenotazione a Villa Amalia.",
    heroImage: "/public/img/entrate_1.JPG",
    logoImage: "/public/img/logo-villa-amalia.png",
    galleryImages: [
      "/public/img/gallery/paesaggio_VA.JPG",
      "/public/img/gallery/villa.jpg",
      "/public/img/gallery/piscina.jpg",
      "/public/img/gallery/piscina-1.jpg",
      "/public/img/gallery/porticato.jpg",
      "/public/img/gallery/terrazza.jpg",
      "/public/img/gallery/salone.jpg",
      "/public/img/gallery/stanza_1.jpg",
      "/public/img/gallery/bagno_1.jpg",
      "/public/img/gallery/salone-1.jpg",
    ]
  };
  
  export function getWhatsAppLink() {
    const text = encodeURIComponent(siteConfig.whatsappPrefill);
    return `https://wa.me/${siteConfig.phoneIntlNoPlus}?text=${text}`;
  }
  