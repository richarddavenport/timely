-- Table: public.meet_team

-- DROP TABLE public.meet_team;

CREATE TABLE IF NOT EXISTS public.meet_team
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    meet_id integer NOT NULL,
    team_id integer NOT NULL,
    CONSTRAINT meet_team_pkey PRIMARY KEY (meet_id, team_id),
    CONSTRAINT meet_team_team_id_fkey FOREIGN KEY (team_id)
        REFERENCES public.team (id) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
)

TABLESPACE pg_default;

ALTER TABLE public.meet_team
    OWNER to sceinuzokeeddi;

-- Trigger: set_public_meet_team_updated_at

-- DROP TRIGGER set_public_meet_team_updated_at ON public.meet_team;

CREATE TRIGGER set_public_meet_team_updated_at
    BEFORE UPDATE 
    ON public.meet_team
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at();

COMMENT ON TRIGGER set_public_meet_team_updated_at ON public.meet_team
    IS 'trigger to set value of column "updated_at" to current timestamp on row update';