"use client";

import { createRegistration } from "@/app/(frontend)/actions";
import { useActionState } from "react";
import type { RegistrationState } from "@/app/(frontend)/actions";

type RegistrationFormProps = {
    eventId: number;
    eventTitle: string;
};

const initialState: RegistrationState = {
    success: false,
    message: "",
};

/**
 * Viser et påmeldingsskjema for en bestemt filmkveld.
 * 
 * @param props.eventId ID-en til filmkvelden.
 * @param props.eventTitle Tittelen på filmkvelden.
 * @returns JSX for påmeldingsskjemaet.
 */

export default function RegistrationForm({ eventId, eventTitle }: RegistrationFormProps) {
    const [state, formAction, isPending] = useActionState(
        createRegistration,
        initialState
    );

    if (state.success) {
        return (
            <section>
                <h2>{state.message}</h2>
                <p>Vi gleder oss til å se deg på filmkvelden!</p>
            </section>
        );
    }

    return (
        <section>
            <h2>Meld deg på {eventTitle}</h2>

            <form action={formAction}>
                <input type="hidden" name="event" value={eventId} />

                <div>
                    <label htmlFor="name">Navn</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div>
                    <label htmlFor="email">E-post</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div>
                    <label htmlFor="age">Alder</label>
                    <input type="number" id="age" name="age" min={1} required />
                </div>

                {state.message && (
                    <p role="alert">{state.message}</p>
                )}

                <button type="submit" disabled={isPending}>
                    {isPending ? "Registrerer..." : "Registrer påmelding"}
                    </button>
            </form>
        </section>
    )
}