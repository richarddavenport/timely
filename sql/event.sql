-- Table: public.event

-- DROP TABLE public.event;

CREATE TABLE IF NOT EXISTS public.event
(
    id integer NOT NULL DEFAULT nextval('event_id_seq'::regclass),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    meet_id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    age_range text COLLATE pg_catalog."default" NOT NULL,
    "number" integer,
    CONSTRAINT event_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.event
    OWNER to sceinuzokeeddi;

-- Trigger: set_public_event_updated_at

-- DROP TRIGGER set_public_event_updated_at ON public.event;

CREATE TRIGGER set_public_event_updated_at
    BEFORE UPDATE 
    ON public.event
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at();

COMMENT ON TRIGGER set_public_event_updated_at ON public.event
    IS 'trigger to set value of column "updated_at" to current timestamp on row update';