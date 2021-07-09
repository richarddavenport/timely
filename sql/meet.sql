-- Table: public.meet

-- DROP TABLE public.meet;

CREATE TABLE IF NOT EXISTS public.meet
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    date date,
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    CONSTRAINT meet_pkey PRIMARY KEY (id),
    CONSTRAINT meet_id_key UNIQUE (id)
)

TABLESPACE pg_default;

ALTER TABLE public.meet
    OWNER to sceinuzokeeddi;

-- Trigger: set_public_meet_updated_at

-- DROP TRIGGER set_public_meet_updated_at ON public.meet;

CREATE TRIGGER set_public_meet_updated_at
    BEFORE UPDATE 
    ON public.meet
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at();

COMMENT ON TRIGGER set_public_meet_updated_at ON public.meet
    IS 'trigger to set value of column "updated_at" to current timestamp on row update';