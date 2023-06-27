// utils.ts
const eventFormPipe = {
    from: (eventResponseDto: EventResponseDto): EventForm => {
        return {
            // ...
        };
    },
    toCreate: (eventForm: EventForm): EventCreateDto => {
        return {
            // ...
        };
    },
    toUpdate: (eventForm: Partial<EventForm>): EventUpdateDto => {
        return {
            // ...
        };
    },
};

// pages/eventPage.ts
const EventPage = () => {
    const { response: eventResponseDto } = useGetEvent("id");

    const handleSubmit = (form: EventForm) => {
        api.post({
            id: response.id,
            changes: eventFormPipe.toUpdate(form),
        });
    };

    return <EventForm defaultValue={eventFormPipe.from(eventResponseDto)} onSubmit={handleSubmit} />;
};

// service/hooks/useDelta.ts
const useDelta = (props: { pipe: () => any }) => {};

// components/eventForm.ts
const EventForm = (props: { defaultValue: EventForm; onSubmit: (form: EventForm) => void }) => {
    const [formValues, setFormValues] = useState<EventForm>(props.defaultValue);

    const { hasChanges, changes } = useDelta({
        defaultValue: props.defaultValue,
        formValues,
    });

    const handleFormValuesChanges = (newFormValues: EventForm) => {
        // ...
        setFormValues(newFormValues);
    };

    const handleSubmit = () => {
        props.onSubmit(changes);
    };

    return (
        <form onChange={handleFormValuesChanges}>
            {/* ... */}
            {/* ... */}
            {/* ... */}
            <button disable={hasChanges} onClick={handleSubmit}>
                submit
            </button>
        </form>
    );
};
