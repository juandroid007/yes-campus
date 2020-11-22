import { categorias } from '../pages/home/Categoria.svelte'

export default [
  {
    titulo: 'Explora',
    alt: 'Explora',
    childrens: [ ...categorias ],
  },
  {
    titulo: 'Comunidad',
    alt: 'Comunidad',
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
