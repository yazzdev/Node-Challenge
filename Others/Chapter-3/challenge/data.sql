--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

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
-- Name: komponen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.komponen (
    id_komponen integer NOT NULL,
    nama character varying(50) NOT NULL,
    deskripsi character varying(250) NOT NULL
);


ALTER TABLE public.komponen OWNER TO postgres;

--
-- Name: komponen_id_komponen_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.komponen_id_komponen_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.komponen_id_komponen_seq OWNER TO postgres;

--
-- Name: komponen_id_komponen_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.komponen_id_komponen_seq OWNED BY public.komponen.id_komponen;


--
-- Name: olahan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.olahan (
    id_olahan integer NOT NULL,
    id_produk integer,
    id_komponen integer NOT NULL
);


ALTER TABLE public.olahan OWNER TO postgres;

--
-- Name: olahan_id_olahan_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.olahan_id_olahan_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.olahan_id_olahan_seq OWNER TO postgres;

--
-- Name: olahan_id_olahan_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.olahan_id_olahan_seq OWNED BY public.olahan.id_olahan;


--
-- Name: pasokan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pasokan (
    id_pasokan integer NOT NULL,
    id_pemasok integer,
    id_komponen integer
);


ALTER TABLE public.pasokan OWNER TO postgres;

--
-- Name: pasokan_id_pasokan_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pasokan_id_pasokan_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pasokan_id_pasokan_seq OWNER TO postgres;

--
-- Name: pasokan_id_pasokan_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pasokan_id_pasokan_seq OWNED BY public.pasokan.id_pasokan;


--
-- Name: pemasok; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pemasok (
    id_pemasok integer NOT NULL,
    nama character varying(50) NOT NULL,
    telp character varying(12) NOT NULL,
    alamat text NOT NULL
);


ALTER TABLE public.pemasok OWNER TO postgres;

--
-- Name: pemasok_id_pemasok_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pemasok_id_pemasok_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pemasok_id_pemasok_seq OWNER TO postgres;

--
-- Name: pemasok_id_pemasok_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pemasok_id_pemasok_seq OWNED BY public.pemasok.id_pemasok;


--
-- Name: produk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produk (
    id_produk integer NOT NULL,
    nama character varying(50) NOT NULL,
    kuantitas integer
);


ALTER TABLE public.produk OWNER TO postgres;

--
-- Name: produk_id_produk_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produk_id_produk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.produk_id_produk_seq OWNER TO postgres;

--
-- Name: produk_id_produk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produk_id_produk_seq OWNED BY public.produk.id_produk;


--
-- Name: komponen id_komponen; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen ALTER COLUMN id_komponen SET DEFAULT nextval('public.komponen_id_komponen_seq'::regclass);


--
-- Name: olahan id_olahan; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.olahan ALTER COLUMN id_olahan SET DEFAULT nextval('public.olahan_id_olahan_seq'::regclass);


--
-- Name: pasokan id_pasokan; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasokan ALTER COLUMN id_pasokan SET DEFAULT nextval('public.pasokan_id_pasokan_seq'::regclass);


--
-- Name: pemasok id_pemasok; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pemasok ALTER COLUMN id_pemasok SET DEFAULT nextval('public.pemasok_id_pemasok_seq'::regclass);


--
-- Name: produk id_produk; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produk ALTER COLUMN id_produk SET DEFAULT nextval('public.produk_id_produk_seq'::regclass);


--
-- Data for Name: komponen; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.komponen (id_komponen, nama, deskripsi) FROM stdin;
1	Coklat	Olahan dasar
2	Krim Susu	Toping
3	Singkong	Olahan dasar
4	Kacang almond	Toping
5	Minyak Goreng	Untuk menggoreng
6	Penyedap Rasa	Untuk memberi rasa
\.


--
-- Data for Name: olahan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.olahan (id_olahan, id_produk, id_komponen) FROM stdin;
1	1	1
2	1	2
3	2	3
4	2	5
5	2	6
6	3	1
7	3	2
8	3	4
\.


--
-- Data for Name: pasokan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pasokan (id_pasokan, id_pemasok, id_komponen) FROM stdin;
1	1	1
2	1	2
3	1	5
4	2	3
5	2	4
6	2	5
\.


--
-- Data for Name: pemasok; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pemasok (id_pemasok, nama, telp, alamat) FROM stdin;
2	Sabrina	082112345678	Tangerang
1	Dyaz Amrullah	082100112233	Jakarta
\.


--
-- Data for Name: produk; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produk (id_produk, nama, kuantitas) FROM stdin;
1	Oreo	50
3	beng-beng	100
2	Qtela Singkong	100
\.


--
-- Name: komponen_id_komponen_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.komponen_id_komponen_seq', 6, true);


--
-- Name: olahan_id_olahan_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.olahan_id_olahan_seq', 8, true);


--
-- Name: pasokan_id_pasokan_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pasokan_id_pasokan_seq', 6, true);


--
-- Name: pemasok_id_pemasok_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pemasok_id_pemasok_seq', 3, true);


--
-- Name: produk_id_produk_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produk_id_produk_seq', 4, true);


--
-- Name: komponen komponen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen
    ADD CONSTRAINT komponen_pkey PRIMARY KEY (id_komponen);


--
-- Name: olahan olahan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.olahan
    ADD CONSTRAINT olahan_pkey PRIMARY KEY (id_olahan);


--
-- Name: pasokan pasokan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasokan
    ADD CONSTRAINT pasokan_pkey PRIMARY KEY (id_pasokan);


--
-- Name: pemasok pemasok_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pemasok
    ADD CONSTRAINT pemasok_pkey PRIMARY KEY (id_pemasok);


--
-- Name: produk produk_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produk
    ADD CONSTRAINT produk_pkey PRIMARY KEY (id_produk);


--
-- Name: olahan FK_olahan.id_komponen; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.olahan
    ADD CONSTRAINT "FK_olahan.id_komponen" FOREIGN KEY (id_komponen) REFERENCES public.komponen(id_komponen);


--
-- Name: olahan FK_olahan.id_produk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.olahan
    ADD CONSTRAINT "FK_olahan.id_produk" FOREIGN KEY (id_produk) REFERENCES public.produk(id_produk);


--
-- Name: pasokan FK_pasokan.id_komponen; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasokan
    ADD CONSTRAINT "FK_pasokan.id_komponen" FOREIGN KEY (id_komponen) REFERENCES public.komponen(id_komponen);


--
-- Name: pasokan FK_pasokan.id_pemasok; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasokan
    ADD CONSTRAINT "FK_pasokan.id_pemasok" FOREIGN KEY (id_pemasok) REFERENCES public.pemasok(id_pemasok);


--
-- PostgreSQL database dump complete
--

