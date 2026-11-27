"use server";

import config from "@payload-config";
import { getPayload } from "payload";

export type RegistrationState = {
    success: boolean;
    message: string;
};


/**
 * Kontrollerer skjemadata og oppretter 
 * påmelding til en bestemt filmkveld i Payload.
 * 
 * @param previousState Forrige tilstand til påmeldingsskjemaet.
 * @param formData Data fra påmeldingsskjemaet.
 * @returns Promise som fullføres når påmeldingen er lagret.
 */
export async function createRegistration(
    previousState: RegistrationState,
    formData: FormData
 ): Promise<RegistrationState> {
    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");
    const eventId = formData.get("event");

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof age !== "string" ||
        typeof eventId !== "string" ||
        !name.trim() ||
        !email.trim()

    ) {
        return {
            success: false,
            message: "Sjekk at alle feltene er fylt ut riktig.",
        };    
    }

    const ageNumber = Number(age);
    const eventIdNumber = Number(eventId);

    if (
        !Number.isInteger(ageNumber) ||
        ageNumber < 1 ||
        !Number.isInteger(eventIdNumber) ||
        eventIdNumber < 1
    ) {
        return {
            success: false,
            message: "Ugyldig alder eller filmkveld.",
        }
    }

try {
    const payload = await getPayload({ config });

    const exsistingRegistration = await payload.find({
    collection: "registrations",
    where: {
        and: [
            {
                email: {
                    equals: email.trim().toLowerCase(),
                },
            },
            {
                event: {
                    equals: eventIdNumber,
                },
            },
        ],
    },
    limit: 1,
    });

    if (exsistingRegistration.docs.length > 0) {
        return {
            success: false,
            message: "Du er allerede påmeldt denne filmkvelden."
        }
    }
    
    await payload.create({
        collection: "registrations",
        data: {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            age: ageNumber,
            event: eventIdNumber,
        },
        overrideAccess: false,
    });


    return {
        success: true,
        message: "Du er meldt på!",
    };
} catch (error) {
    console.error("Kunne ikke lagre påmeldingen:", error);

    return {
        success: false,
        message: "Kunne ikke registrere påmeldingen. Prøv igjen."
    }
}


}
