import { categorias } from '../pages/home/Categoria.svelte'

export default [
  {
    titulo: 'Explora',
    childrens: [ ...categorias ],
  },
  {
    titulo: 'Comunidad',
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
]
