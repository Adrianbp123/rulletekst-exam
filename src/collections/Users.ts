import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
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
