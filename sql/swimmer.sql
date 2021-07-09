-- Table: public.swimmer

-- DROP TABLE public.swimmer;

CREATE TABLE IF NOT EXISTS public.swimmer
(
    id integer NOT NULL DEFAULT nextval('swimmer_id_seq'::regclass),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    name text COLLATE pg_catalog."default" NOT NULL,
    birthday date,
    CONSTRAINT swimmer_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.swimmer
    OWNER to sceinuzokeeddi;

-- Trigger: set_public_swimmer_updated_at

-- DROP TRIGGER set_public_swimmer_updated_at ON public.swimmer;

CREATE TRIGGER set_public_swimmer_updated_at
    BEFORE UPDATE 
    ON public.swimmer
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at();

COMMENT ON TRIGGER set_public_swimmer_updated_at ON public.swimmer
    IS 'trigger to set value of column "updated_at" to current timestamp on row update';