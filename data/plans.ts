export type PlanType = 'plan' | 'guide';

export interface PlanData {
  id: string;
  slug: string;
  type: PlanType;
  category: 'gymbro' | 'gymgirl' | 'all';
  nameKey: string;
  descKey: string;
  detailsKey: string;
  levelKey: string;
  link: string;
  mpLink: string;
  image: string;
  items: string[];
}

export const allPlans: PlanData[] = [
  // GYMBRO PLANS
  {
    id: 'plan-fullbody-bro',
    slug: 'inicial',
    type: 'plan',
    category: 'gymbro',
    nameKey: "plan_fullbody",
    descKey: "desc_fullbody",
    detailsKey: "desc_fullbody_detailed",
    levelKey: "level_beginner",
    link: "https://www.paypal.com/ncp/payment/M6YAGQUPCY2PA",
    mpLink: "https://mpago.la/1DMb5Eg",
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769451980/full_body_gfbxzm.webp",
    items: ["item_fullbody_1", "item_fullbody_2", "item_fullbody_3", "item_fullbody_4"]
  },
  {
    id: 'plan-ul',
    slug: 'intermedio',
    type: 'plan',
    category: 'gymbro',
    nameKey: "plan_ul",
    descKey: "desc_ul",
    detailsKey: "desc_ul_detailed",
    levelKey: "level_intermediate",
    link: "https://www.paypal.com/ncp/payment/BFTQR6PV7L7XQ",
    mpLink: "https://mpago.la/31khfXn",
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769451980/upper_lower_d17ult.webp",
    items: ["item_ul_1", "item_ul_2", "item_ul_3", "item_ul_4"]
  },
  {
    id: 'plan-ppl',
    slug: 'avanzado',
    type: 'plan',
    category: 'gymbro',
    nameKey: "plan_ppl",
    descKey: "desc_ppl",
    detailsKey: "desc_ppl_detailed",
    levelKey: "level_advanced",
    link: "https://www.paypal.com/ncp/payment/M6YAGQUPCY2PA",
    mpLink: "https://mpago.la/1ApBxuh",
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769451981/pplxul_shaubl.webp",
    items: ["item_ppl_1", "item_ppl_2", "item_ppl_3", "item_ppl_4"]
  },

  // GYMGIRL PLANS
  {
    id: 'plan-fullbody-girl',
    slug: 'inicial-intermedia',
    type: 'plan',
    category: 'gymgirl',
    nameKey: "plan_fullbody_girl",
    descKey: "desc_fullbody",
    detailsKey: "desc_fullbody_detailed",
    levelKey: "level_beginner",
    link: "https://www.paypal.com/ncp/payment/8HQQDXRDUTZYN",
    mpLink: "https://mpago.la/1EDh3kB",
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769451979/full_body_gymgirl_diimqx.webp",
    items: ["item_fullbody_girl_1", "item_fullbody_girl_2", "item_fullbody_girl_3", "item_fullbody_girl_4", "item_fullbody_girl_5"]
  },
  {
    id: 'plan-grow',
    slug: 'avanzada',
    type: 'plan',
    category: 'gymgirl',
    nameKey: "plan_grow",
    descKey: "desc_grow",
    detailsKey: "desc_grow_detailed",
    levelKey: "level_advanced",
    link: "https://www.paypal.com/ncp/payment/XGVFNANY8S8T6",
    mpLink: "https://mpago.la/2BtQ6E6",
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769451980/grow_e_glow_ypkbzi.webp",
    items: ["item_grow_1", "item_grow_2", "item_grow_3", "item_grow_4", "item_grow_5"]
  },

  // GUIDES
  {
    id: 'guide-cutting',
    slug: 'definicion',
    type: 'guide',
    category: 'all',
    nameKey: "guide_cutting_name",
    descKey: "guide_cutting_desc",
    detailsKey: "guide_cutting_detailed",
    levelKey: "level_all",
    link: "https://www.paypal.com/ncp/payment/SAFMKVCXN34NE",
    mpLink: "https://mpago.la/2PUMTjD",
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1773504712/ce4b4b93-e862-4328-b2bf-f582d89b9921_gpksae.webp",
    items: ["item_guide_cutting_1", "item_guide_cutting_2", "item_guide_cutting_3", "item_guide_cutting_4"]
  },
  {
    id: 'guide-bulking',
    slug: 'volumen',
    type: 'guide',
    category: 'all',
    nameKey: "guide_bulking_name",
    descKey: "guide_bulking_desc",
    detailsKey: "guide_bulking_detailed",
    levelKey: "level_all",
    link: "https://www.paypal.com/ncp/payment/GH2SE96AX9JRJ",
    mpLink: "https://mpago.la/2EzrGNz",
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1773490911/Dise%C3%B1o-sin-t%C3%ADtulo_ne7vdq_rjaj5o.webp",
    items: ["item_guide_bulking_1", "item_guide_bulking_2", "item_guide_bulking_3", "item_guide_bulking_4"]
  }
];

export const getPlanBySlug = (slug: string): PlanData | undefined => {
  return allPlans.find(p => p.slug === slug);
};
