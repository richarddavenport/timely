-- Table: public.heat

-- DROP TABLE public.heat;

CREATE TABLE IF NOT EXISTS public.heat
(
    id integer NOT NULL DEFAULT nextval('heat_id_seq'::regclass),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    event_id integer NOT NULL,
    "number" integer NOT NULL,
    CONSTRAINT heat_pkey PRIMARY KEY (id),
    CONSTRAINT heat_event_id_fkey FOREIGN KEY (event_id)
        REFERENCES public.event (id) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
)

TABLESPACE pg_default;

ALTER TABLE public.heat
    OWNER to sceinuzokeeddi;

-- Trigger: set_public_heat_updated_at

-- DROP TRIGGER set_public_heat_updated_at ON public.heat;

CREATE TRIGGER set_public_heat_updated_at
    BEFORE UPDATE 
    ON public.heat
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at();

COMMENT ON TRIGGER set_public_heat_updated_at ON public.heat
    IS 'trigger to set value of column "updated_at" to current timestamp on row update';