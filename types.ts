
export interface Plan {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  transformation: string;
  quote: string;
  image: string;
}
