
import { Plan, Testimonial } from './types';

export const TRAINING_PLANS: Plan[] = [
  {
    id: 1,
    name: "Hypertrophy Master",
    description: "Enfoque científico en el crecimiento muscular máximo.",
    price: "$49",
    features: ["Rutina 5 días", "Guía de suplementación", "Cálculo de macros"],
  },
  {
    id: 2,
    name: "Powerlifting Base",
    description: "Construye fuerza real en los tres grandes levantamientos.",
    price: "$59",
    features: ["Periodización RPE", "Técnica avanzada", "Acceso a comunidad"],
  },
  {
    id: 3,
    name: "Cutting Phase",
    description: "Pierde grasa manteniendo el tejido muscular ganado.",
    highlighted: true,
    price: "$69",
    features: ["Déficit controlado", "Protocolo Cardio", "Check-ins semanales"],
  },
  {
    id: 4,
    name: "Home Athlete",
    description: "Resultados profesionales sin necesidad de gimnasio comercial.",
    price: "$39",
    features: ["Mínimo equipo", "Video tutoriales", "Flexibilidad total"],
  },
  {
    id: 5,
    name: "Elite Performance",
    description: "Combinación de fuerza, resistencia y movilidad.",
    price: "$79",
    features: ["Programación híbrida", "Nutrición avanzada", "Soporte VIP"],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Lucia",
    transformation: "6 meses de recomposicion corporal",
    quote: '"El enfoque científico de Julian cambió mi perspectiva sobre el entrenamiento. Dejé de adivinar y empecé a ver cambios reales en semanas. Sus puntos fuertes son la precisión técnica y la programación lógica."',
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769481998/cambio_1_ojm03t.webp"
  },
  {
    id: 2,
    name: "Ariel",
    transformation: "12 meses de transformación",
    quote: '"Increíble proceso de aprendizaje. No es solo una rutina, es entender el porqué de cada ejercicio. Sus puntos fuertes son el seguimiento constante y su gran conocimiento académico."',
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769490649/ari_dn1zxm.webp"
  },
  {
    id: 3,
    name: "Micaela",
    transformation: "4 meses de déficit controlado",
    quote: '"Logré mi mejor versión sin pasar hambre ni hacer locuras. Ciencia pura aplicada al cuerpo. Sus puntos fuertes son la optimización nutricional y la claridad en objetivos."',
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769481998/cambio_4_uavfej.webp"
  },
  {
    id: 4,
    name: "Yatel",
    transformation: "8 meses de recomposición",
    quote: '"Julian ajustó cada detalle de mi técnica para evitar lesiones y maximizar ganancias. Sus puntos fuertes son la bio-mecánica aplicada y la motivación real."',
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769490649/yate_i71b1o.webp"
  },
  {
    id: 5,
    name: "Juan",
    transformation: "10 meses de volumen limpio",
    quote: '"Por fin un sistema que se adapta a mi vida y no al revés. Resultados verificables y duraderos. Sus puntos fuertes son su honestidad profesional y la eficiencia del tiempo."',
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769481999/cambio_2_mmelc4.webp"
  },
  {
    id: 6,
    name: "Sofia",
    transformation: "14 meses de entrenamiento",
    quote: '"La periodización es de otro planeta. Nunca me estanqué en este proceso. Sus puntos fuertes son la periodización avanzada y su atención obsesiva al detalle."',
    image: "https://res.cloudinary.com/deb7eunq3/image/upload/f_auto,q_auto/v1769482000/cambio_3_jkfyln.webp"
  }
];
