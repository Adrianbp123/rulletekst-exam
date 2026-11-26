"use server";

import config from "@payload-config";
import { getPayload } from "payload";


/**
 * Kontrollerer skjemadata og oppretter 
 * påmelding til en bestemt filmkveld i Payload.
 * 
 * @param formData Data fra påmeldingsskjemaet.
 * @returns Promise som fullføres når påmeldingen er lagret.
 * @throws Error dersom skjemadataene er ugyldige.
 */
export async function createRegistration(formData: FormData) {
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
        throw new Error("Feil format på data");
    }

    const ageNumber = Number(age);
    const eventIdNumber = Number(eventId);

    if (
        !Number.isInteger(ageNumber) ||
        ageNumber < 1 ||
        !Number.isInteger(eventIdNumber) ||
        eventIdNumber < 1
    ) {
        throw new Error("Ugyldig alder eller filmkveld");
    }

    const payload = await getPayload({ config });
    
    await payload.create({
        collection: "registrations",
        data: {
            name: name.trim(),
            email: email.trim(),
            age: ageNumber,
            event: eventIdNumber,
        },
        overrideAccess: false,
    });
}
