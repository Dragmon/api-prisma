-- CreateTable
CREATE TABLE "table_uuid" (
    "id_uuid" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "date_issue" TIMESTAMP(3) NOT NULL,
    "issuer_company_name" VARCHAR(255) NOT NULL,
    "recipient_business_name" VARCHAR(255) NOT NULL,
    "series" INTEGER NOT NULL,
    "invoice" INTEGER NOT NULL,
    "original_total" MONEY NOT NULL,
    "fiscal_folio_uuid" INTEGER NOT NULL,
    "fuf" VARCHAR(255) NOT NULL,
    "record_creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "table_uuid_pkey" PRIMARY KEY ("id_uuid")
);
