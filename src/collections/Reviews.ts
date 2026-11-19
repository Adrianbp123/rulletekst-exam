import type { CollectionConfig } from "payload";

/**
 * Filmanmeldelser for Filmklubben Rulletekst.
 * Inneholder anmeldelser med terningkast og informasjon om filmene.
 */
export const Reviews: CollectionConfig = {
    slug: 'reviews',
    admin: {
        useAsTitle: 'title',
    },
    fields: [

        {
            name: 'title',
            type: 'text',
            label: 'Filmtittel',
            required: true,
        },

        {
            name: 'rating',
            type: 'select',
            label: 'Terningkast',
            required: true,
            options: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
            ]
        },

        {
            name: 'director',
            type: 'text',
            label: 'Regissør',
            required: true,
        },

        {
            name: 'runtime',
            type: 'number',
            label: 'Spilletid (minutter)',
            required: true,
            min: 1,
        },

        {
            name: 'ageRating',
            type: 'select',
            label: 'Aldersgrense',
            required: true,
            options: [
                { label: 'Tillatt for alle', value: 'A' },
                { label: '6 år', value: '6' },
                { label: '9 år', value: '9' },
                { label: '12 år', value: '12' },
                { label: '15 år', value: '15' },
                { label: '18 år', value: '18' },
            ]
        },

        {
            name: 'cast',
            type: 'array',
            label: 'Hovedrolleinnehavere',
            minRows: 1,
            required: true,
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    label: 'Skuespiller',
                    required: true,
                },
            ],
        },

        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            label: 'Forfatter',
            required: true,
        },

        {
            name: 'content',
            type: 'richText',
            label: 'Anmeldelse',
            required: true,
        },

        {
            name: 'coverImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Filmbilde',
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
