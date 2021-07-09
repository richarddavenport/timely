-- Table: public.team

-- DROP TABLE public.team;

CREATE TABLE IF NOT EXISTS public.team
(
    id integer NOT NULL DEFAULT nextval('team_id_seq'::regclass),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT team_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.team
    OWNER to sceinuzokeeddi;

-- Trigger: set_public_team_updated_at

-- DROP TRIGGER set_public_team_updated_at ON public.team;

CREATE TRIGGER set_public_team_updated_at
    BEFORE UPDATE 
    ON public.team
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at();

COMMENT ON TRIGGER set_public_team_updated_at ON public.team
    IS 'trigger to set value of column "updated_at" to current timestamp on row update';