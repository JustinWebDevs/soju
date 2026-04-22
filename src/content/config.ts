import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    precio: z.number(),
    categoria: z.enum(['macramé', 'chaquiras', 'cuero', 'mixtas', 'cuarzos']),
    imagen: z.string(),
    imagenes: z.array(z.string()).optional(),
  }),
});

export const collections = { productos };
