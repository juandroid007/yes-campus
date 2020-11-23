import { categorias } from '../pages/home/Categoria.svelte'

export default [
  {
    titulo: 'Explora',
    alt: 'Al máximo',
    childrens: [ ...categorias ],
  },
  {
    titulo: 'Comunidad',
    alt: 'Que impulsa',
    childrens: [
      {
        titulo: 'YES Campus for Business',
        href: '/business',
      },
      {
        titulo: 'Historias',
        href: '/historias',
      },
      {
        titulo: 'Membresías',
        href: '/membresías',
      },
      {
        titulo: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    titulo: 'Nosotros',
    alt: 'Acerca de YES Campus',
    href: '/nosotros',
  }
]
