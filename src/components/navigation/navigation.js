import { categorias } from '../pages/home/Categoria.svelte'

export default [
  {
    titulo: 'Cursos',
    alt: 'Categorías de nuestros cursos',
    childrens: [
      ...categorias,
      {
        titulo: 'Todas las categorías',
        href: ' https://yescampus.teachlr.com/#courses-online/',
      }
    ],
  },
  {
    titulo: 'Servicios',
    alt: '¿Qué ofrecemos?',
    childrens: [
      {
        titulo: 'Asesorías',
        href: '/asesorias',
      },
      {
        titulo: 'Mentorías',
        href: '/mentorias',
      },
      {
        titulo: 'Financiamientos',
        href: '/financiamientos',
      },
      {
        titulo: 'Diseño de proyectos',
        href: '/disenos-proyectos',
      },
    ],
  },
  {
    titulo: 'Programas',
    header: false,
    alt: 'Nuestros programas',
    childrens: [
      {
        titulo: 'Young Entrepreneur',
        href: '/young-entrepreneur',
      },
      {
        titulo: 'Young Entrepreneur Full Inclusion',
        href: '/full-inclusion',
      },
      {
        titulo: 'Young Leaders',
        href: '/leaders',
      },
    ],
  },
  {
    titulo: 'Comunidad',
    alt: 'Que impulsa',
    childrens: [
      {
        titulo: 'YES Talks',
        href: '/talks',
      },
      {
        titulo: 'Comunidad YES',
        href: '/historias',
      },
      {
        titulo: 'Aliados',
        href: '/aliados',
      },
      {
        titulo: 'Blog',
        href: '/blog',
      },
      {
        titulo: 'Nosotros',
        alt: '¿Quiénes somos?',
        href: '/nosotros',
      },
    ],
  },
]
