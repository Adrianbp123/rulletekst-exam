import type { CollectionConfig } from "payload";




/**
 * Påmeldinger til filmkvelder for Filmklubben Rulletekst.
 * Lagrer deltagerinformasjon og hindrer dobbeltpåmelding.
 */
export const Registrations: CollectionConfig = {
    slug: 'registrations',
    admin: {
        useAsTitle: 'name',
    },

    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Navn',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            label: 'E-post',
            required: true,
        },
        {
            name: 'age',
            type: 'number',
            label: 'Alder',
            required: true,
            min: 1,
        },
        {
            name: 'event',
            type: 'relationship',
            relationTo: 'events',
            label: 'Filmkveld',
            required: true,
        },
    ],
};