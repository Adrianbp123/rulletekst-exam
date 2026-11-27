import { create } from "zustand";
import { persist } from "zustand/middleware";

type RegistrationStore = {
    registeredEvents: number[];
    addRegistration: (eventId: number) => void;
};


/**
 * Oppretter registration store og lagrer ID-ene til
 * påmeldte filmkvelder i localStorage.
 */
export const useRegistrationStore = create<RegistrationStore>()(
    persist(
        (set) => ({
            registeredEvents: [],

            /**
             * Legger til en filmkveld i listen dersom 
             * den ikke finnes fra før av.
             * 
             * @param eventId ID-en til filmkvelden.
             */
            addRegistration: (eventId) => {
                set((state) => {
                    if (state.registeredEvents.includes(eventId)) {
                        return state;
                    }

                    return {
                        registeredEvents: [...state.registeredEvents, eventId],
                    };
                });
            },
        }),
        { name: "rulletekst-registrations" },
    ),
);