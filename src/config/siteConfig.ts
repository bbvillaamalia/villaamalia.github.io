export const siteConfig = {
    brand: "Villa Amalia",
    city: "Avellino",
    phoneIntlNoPlus: "393318037628",
    email: "info@villaamalia.it",
    addressQuery: "Avellino",
    whatsappPrefill: "Ciao! Vorrei informazioni per una prenotazione a Villa Amalia.",
    heroImage: "/img/entrate_1.JPG",
    logoImage: "/img/logo-villa-amalia.png",
    galleryImages: [
      "/img/gallery/paesaggio_VA.JPG",
      "/img/gallery/villa.jpg",
      "/img/gallery/piscina.jpg",
      "/img/gallery/piscina-1.jpg",
      "/img/gallery/porticato.jpg",
      "/img/gallery/terrazza.jpg",
      "/img/gallery/salone.jpg",
      "/img/gallery/stanza_1.jpg",
      "/img/gallery/bagno_1.jpg",
      "/img/gallery/salone-1.jpg",
    ]
  };
  
  export function getWhatsAppLink() {
    const text = encodeURIComponent(siteConfig.whatsappPrefill);
    return `https://wa.me/${siteConfig.phoneIntlNoPlus}?text=${text}`;
  }
  