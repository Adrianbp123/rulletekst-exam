type RegistrationFormProps = {
    eventId: number;
};

/**
 * Viser et påmeldingsskjema for en bestemt filmkveld.
 * 
 * @param props.eventId ID-en til filmkvelden.
 * @returns JSX for påmeldingsskjemaet.
 */

export default function RegistrationForm({ eventId }: RegistrationFormProps) {
    return (
        <section>
            <h2>Meld deg på filmkvelden</h2>

            <form>
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

                <button type="submit">Registrer påmelding</button>
            </form>
        </section>
    )
}