import type { CollectionConfig } from 'payload'

/**
 * Brukere for Filmklubben Rulletekst.
 * Håndterer innlogging og lagrer navn og profilbilde.
 */
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
    name: 'name',
    type: 'text',
    label: 'Navn',
    required: true,
    },
    {
      name: 'profileImage',
      type: 'upload',
      label: 'Profilbilde',
      relationTo: 'media',
    },
  ],
}
