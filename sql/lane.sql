-- Table: public.lane

-- DROP TABLE public.lane;

CREATE TABLE IF NOT EXISTS public.lane
(
    id integer NOT NULL DEFAULT nextval('lane_id_seq'::regclass),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    "number" integer NOT NULL,
    heat_id integer NOT NULL,
    swimmer_id integer,
    CONSTRAINT lane_pkey PRIMARY KEY (id),
    CONSTRAINT lane_heat_id_fkey FOREIGN KEY (heat_id)
        REFERENCES public.heat (id) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    CONSTRAINT lane_swimmer_id_fkey FOREIGN KEY (swimmer_id)
        REFERENCES public.swimmer (id) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
)

TABLESPACE pg_default;

ALTER TABLE public.lane
    OWNER to sceinuzokeeddi;

-- Trigger: set_public_lane_updated_at

-- DROP TRIGGER set_public_lane_updated_at ON public.lane;

CREATE TRIGGER set_public_lane_updated_at
    BEFORE UPDATE 
    ON public.lane
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at();

COMMENT ON TRIGGER set_public_lane_updated_at ON public.lane
    IS 'trigger to set value of column "updated_at" to current timestamp on row update';