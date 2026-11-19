import type { CollectionConfig } from "payload";



/**
 * Artikler for Filmklubben Rulletekst.
 * Inneholder artikler om film og filmbransjen.
 */
export const Articles: CollectionConfig = {
    slug: 'articles',
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
            name: 'coverImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Forsidebilde',
        },

        {
            name: 'subtitle',
            type: 'text',
            label: 'Undertittel',
            required: true,
        },

        {
            name: 'content',
            type: 'richText',
            label: 'Innhold',
            required: true,
        },

        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            label: 'Forfatter',
            required: true,
        },

        {
            name: 'publishedAt',
            type: 'date',
            label: 'Publiseringsdato',
            required: true,
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
    ],
}