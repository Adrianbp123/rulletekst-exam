import type { CollectionConfig } from "payload";

/**
 * Filmkvelder for Filmklubben Rulletekst.
 * Inneholder informasjon om kommende filmkvelder.
 */
export const Events: CollectionConfig = {
    slug: 'events',
    admin: {
        useAsTitle: 'title',
    },
    fields: [

        {
            name: 'title',
            type: 'text',
            label: 'Tittel',
            required: true,
        },

        {
            name: 'eventDate',
            type: 'date',
            label: 'Dato og klokkeslett',
            required: true,
            admin: {
                date: {
                    pickerAppearance: "dayAndTime",
                },
            },
        },

        {
            name: 'description',
            type: 'richText',
            label: 'Beskrivelse',
            required: true,
        },

        {
            name: 'location',
            type: 'text',
            label: 'Sted',
            required: true,
        },

        {
            name: 'coverImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Filmbilde',
        },

        {
            name: 'organizer',
            type: 'relationship',
            relationTo: 'users',
            label: 'Arrangør',
            required: false,
        }
    ],
};