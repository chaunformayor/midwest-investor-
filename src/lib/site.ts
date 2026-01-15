export const SITE = {
  name: "Midwest Investor Services",
  domain: "midwestinvestorservices.com",
  url: "https://midwestinvestorservices.com",
  phone: "636-201-1239",
  email: "info@midwestinvestorservices.com",
  city: "St. Louis",
  region: "Missouri",
  tagline: "Acquire and operate Midwest rental real estate with a local execution team."
};

export const FORMSPREE = {
  // Put your Formspree form ID in .env.local as NEXT_PUBLIC_FORMSPREE_FORM_ID
  endpoint: () => {
    const id = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    return id ? `https://formspree.io/f/${id}` : "";
  }
};

export const FORMSPREE_DEAL = {
  // Put your Deal Submission Formspree form ID in .env.local as NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID
  endpoint: () => {
    const id = process.env.NEXT_PUBLIC_FORMSPREE_DEAL_FORM_ID;
    return id ? `https://formspree.io/f/${id}` : "";
  }
};
