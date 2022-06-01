--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Expense_category; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public."Expense_category" (
    id integer NOT NULL,
    "expenseCategoryType" character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    deleted_at timestamp(0) without time zone
);


ALTER TABLE public."Expense_category" OWNER TO mac;

--
-- Name: Expense_category_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public."Expense_category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Expense_category_id_seq" OWNER TO mac;

--
-- Name: Expense_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public."Expense_category_id_seq" OWNED BY public."Expense_category".id;


--
-- Name: Expenses; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public."Expenses" (
    id integer NOT NULL,
    "transactionId" character varying(255) NOT NULL,
    "expenseCategory" character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    amount character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    deleted_at timestamp(0) without time zone
);


ALTER TABLE public."Expenses" OWNER TO mac;

--
-- Name: Expenses_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public."Expenses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Expenses_id_seq" OWNER TO mac;

--
-- Name: Expenses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public."Expenses_id_seq" OWNED BY public."Expenses".id;


--
-- Name: Failed_jobs; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public."Failed_jobs" (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Failed_jobs" OWNER TO mac;

--
-- Name: Failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public."Failed_jobs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Failed_jobs_id_seq" OWNER TO mac;

--
-- Name: Failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public."Failed_jobs_id_seq" OWNED BY public."Failed_jobs".id;


--
-- Name: Income; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public."Income" (
    id integer NOT NULL,
    "incomeId" character varying(255) NOT NULL,
    "incomeCategory" character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    amount character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    deleted_at timestamp(0) without time zone
);


ALTER TABLE public."Income" OWNER TO mac;

--
-- Name: Income_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public."Income_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Income_id_seq" OWNER TO mac;

--
-- Name: Income_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public."Income_id_seq" OWNED BY public."Income".id;


--
-- Name: Password_resets; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public."Password_resets" (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);


ALTER TABLE public."Password_resets" OWNER TO mac;

--
-- Name: Personal_access_tokens; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public."Personal_access_tokens" (
    id bigint NOT NULL,
    tokenable_type character varying(255) NOT NULL,
    tokenable_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    token character varying(64) NOT NULL,
    abilities text,
    last_used_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public."Personal_access_tokens" OWNER TO mac;

--
-- Name: Personal_access_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public."Personal_access_tokens_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Personal_access_tokens_id_seq" OWNER TO mac;

--
-- Name: Personal_access_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public."Personal_access_tokens_id_seq" OWNED BY public."Personal_access_tokens".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public."Users" (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public."Users" OWNER TO mac;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public."Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO mac;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO mac;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO mac;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: oauth_access_tokens; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public.oauth_access_tokens (
    id character varying(100) NOT NULL,
    user_id bigint,
    client_id bigint NOT NULL,
    name character varying(255),
    scopes text,
    revoked boolean NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    expires_at timestamp(0) without time zone
);


ALTER TABLE public.oauth_access_tokens OWNER TO mac;

--
-- Name: oauth_auth_codes; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public.oauth_auth_codes (
    id character varying(100) NOT NULL,
    user_id bigint NOT NULL,
    client_id bigint NOT NULL,
    scopes text,
    revoked boolean NOT NULL,
    expires_at timestamp(0) without time zone
);


ALTER TABLE public.oauth_auth_codes OWNER TO mac;

--
-- Name: oauth_clients; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public.oauth_clients (
    id bigint NOT NULL,
    user_id bigint,
    name character varying(255) NOT NULL,
    secret character varying(100),
    provider character varying(255),
    redirect text NOT NULL,
    personal_access_client boolean NOT NULL,
    password_client boolean NOT NULL,
    revoked boolean NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.oauth_clients OWNER TO mac;

--
-- Name: oauth_clients_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public.oauth_clients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oauth_clients_id_seq OWNER TO mac;

--
-- Name: oauth_clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public.oauth_clients_id_seq OWNED BY public.oauth_clients.id;


--
-- Name: oauth_personal_access_clients; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public.oauth_personal_access_clients (
    id bigint NOT NULL,
    client_id bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.oauth_personal_access_clients OWNER TO mac;

--
-- Name: oauth_personal_access_clients_id_seq; Type: SEQUENCE; Schema: public; Owner: mac
--

CREATE SEQUENCE public.oauth_personal_access_clients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.oauth_personal_access_clients_id_seq OWNER TO mac;

--
-- Name: oauth_personal_access_clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mac
--

ALTER SEQUENCE public.oauth_personal_access_clients_id_seq OWNED BY public.oauth_personal_access_clients.id;


--
-- Name: oauth_refresh_tokens; Type: TABLE; Schema: public; Owner: mac
--

CREATE TABLE public.oauth_refresh_tokens (
    id character varying(100) NOT NULL,
    access_token_id character varying(100) NOT NULL,
    revoked boolean NOT NULL,
    expires_at timestamp(0) without time zone
);


ALTER TABLE public.oauth_refresh_tokens OWNER TO mac;

--
-- Name: Expense_category id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Expense_category" ALTER COLUMN id SET DEFAULT nextval('public."Expense_category_id_seq"'::regclass);


--
-- Name: Expenses id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Expenses" ALTER COLUMN id SET DEFAULT nextval('public."Expenses_id_seq"'::regclass);


--
-- Name: Failed_jobs id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Failed_jobs" ALTER COLUMN id SET DEFAULT nextval('public."Failed_jobs_id_seq"'::regclass);


--
-- Name: Income id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Income" ALTER COLUMN id SET DEFAULT nextval('public."Income_id_seq"'::regclass);


--
-- Name: Personal_access_tokens id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Personal_access_tokens" ALTER COLUMN id SET DEFAULT nextval('public."Personal_access_tokens_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: oauth_clients id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.oauth_clients ALTER COLUMN id SET DEFAULT nextval('public.oauth_clients_id_seq'::regclass);


--
-- Name: oauth_personal_access_clients id; Type: DEFAULT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.oauth_personal_access_clients ALTER COLUMN id SET DEFAULT nextval('public.oauth_personal_access_clients_id_seq'::regclass);


--
-- Data for Name: Expense_category; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public."Expense_category" (id, "expenseCategoryType", description, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: Expenses; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public."Expenses" (id, "transactionId", "expenseCategory", description, amount, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: Failed_jobs; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public."Failed_jobs" (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
\.


--
-- Data for Name: Income; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public."Income" (id, "incomeId", "incomeCategory", description, amount, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: Password_resets; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public."Password_resets" (email, token, created_at) FROM stdin;
\.


--
-- Data for Name: Personal_access_tokens; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public."Personal_access_tokens" (id, tokenable_type, tokenable_id, name, token, abilities, last_used_at, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public."Users" (id, name, email, email_verified_at, password, remember_token, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public.migrations (id, migration, batch) FROM stdin;
1	2014_10_12_000000_create_users_table	1
2	2014_10_12_100000_create_password_resets_table	1
3	2016_06_01_000001_create_oauth_auth_codes_table	1
4	2016_06_01_000002_create_oauth_access_tokens_table	1
5	2016_06_01_000003_create_oauth_refresh_tokens_table	1
6	2016_06_01_000004_create_oauth_clients_table	1
7	2016_06_01_000005_create_oauth_personal_access_clients_table	1
8	2019_08_19_000000_create_failed_jobs_table	1
9	2019_12_14_000001_create_personal_access_tokens_table	1
10	2022_05_21_044227_expenses	1
11	2022_05_21_052105_income	1
12	2022_05_21_054559_expense_category	1
\.


--
-- Data for Name: oauth_access_tokens; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public.oauth_access_tokens (id, user_id, client_id, name, scopes, revoked, created_at, updated_at, expires_at) FROM stdin;
\.


--
-- Data for Name: oauth_auth_codes; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public.oauth_auth_codes (id, user_id, client_id, scopes, revoked, expires_at) FROM stdin;
\.


--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public.oauth_clients (id, user_id, name, secret, provider, redirect, personal_access_client, password_client, revoked, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: oauth_personal_access_clients; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public.oauth_personal_access_clients (id, client_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: oauth_refresh_tokens; Type: TABLE DATA; Schema: public; Owner: mac
--

COPY public.oauth_refresh_tokens (id, access_token_id, revoked, expires_at) FROM stdin;
\.


--
-- Name: Expense_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public."Expense_category_id_seq"', 1, false);


--
-- Name: Expenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public."Expenses_id_seq"', 1, false);


--
-- Name: Failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public."Failed_jobs_id_seq"', 1, false);


--
-- Name: Income_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public."Income_id_seq"', 1, false);


--
-- Name: Personal_access_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public."Personal_access_tokens_id_seq"', 1, false);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, false);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public.migrations_id_seq', 12, true);


--
-- Name: oauth_clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public.oauth_clients_id_seq', 1, false);


--
-- Name: oauth_personal_access_clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mac
--

SELECT pg_catalog.setval('public.oauth_personal_access_clients_id_seq', 1, false);


--
-- Name: Expense_category Expense_category_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Expense_category"
    ADD CONSTRAINT "Expense_category_pkey" PRIMARY KEY (id);


--
-- Name: Expenses Expenses_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Expenses"
    ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY (id);


--
-- Name: Failed_jobs Failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Failed_jobs"
    ADD CONSTRAINT "Failed_jobs_pkey" PRIMARY KEY (id);


--
-- Name: Income Income_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Income"
    ADD CONSTRAINT "Income_pkey" PRIMARY KEY (id);


--
-- Name: Personal_access_tokens Personal_access_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Personal_access_tokens"
    ADD CONSTRAINT "Personal_access_tokens_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Failed_jobs failed_jobs_uuid_unique; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Failed_jobs"
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: oauth_access_tokens oauth_access_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.oauth_access_tokens
    ADD CONSTRAINT oauth_access_tokens_pkey PRIMARY KEY (id);


--
-- Name: oauth_auth_codes oauth_auth_codes_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.oauth_auth_codes
    ADD CONSTRAINT oauth_auth_codes_pkey PRIMARY KEY (id);


--
-- Name: oauth_clients oauth_clients_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.oauth_clients
    ADD CONSTRAINT oauth_clients_pkey PRIMARY KEY (id);


--
-- Name: oauth_personal_access_clients oauth_personal_access_clients_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.oauth_personal_access_clients
    ADD CONSTRAINT oauth_personal_access_clients_pkey PRIMARY KEY (id);


--
-- Name: oauth_refresh_tokens oauth_refresh_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public.oauth_refresh_tokens
    ADD CONSTRAINT oauth_refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: Personal_access_tokens personal_access_tokens_token_unique; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Personal_access_tokens"
    ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE (token);


--
-- Name: Users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: mac
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: oauth_access_tokens_user_id_index; Type: INDEX; Schema: public; Owner: mac
--

CREATE INDEX oauth_access_tokens_user_id_index ON public.oauth_access_tokens USING btree (user_id);


--
-- Name: oauth_auth_codes_user_id_index; Type: INDEX; Schema: public; Owner: mac
--

CREATE INDEX oauth_auth_codes_user_id_index ON public.oauth_auth_codes USING btree (user_id);


--
-- Name: oauth_clients_user_id_index; Type: INDEX; Schema: public; Owner: mac
--

CREATE INDEX oauth_clients_user_id_index ON public.oauth_clients USING btree (user_id);


--
-- Name: oauth_refresh_tokens_access_token_id_index; Type: INDEX; Schema: public; Owner: mac
--

CREATE INDEX oauth_refresh_tokens_access_token_id_index ON public.oauth_refresh_tokens USING btree (access_token_id);


--
-- Name: password_resets_email_index; Type: INDEX; Schema: public; Owner: mac
--

CREATE INDEX password_resets_email_index ON public."Password_resets" USING btree (email);


--
-- Name: personal_access_tokens_tokenable_type_tokenable_id_index; Type: INDEX; Schema: public; Owner: mac
--

CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON public."Personal_access_tokens" USING btree (tokenable_type, tokenable_id);


--
-- PostgreSQL database dump complete
--

