-- CreateTable
CREATE TABLE "invoices" (
    "id_invoices" SERIAL NOT NULL,
    "subaccount" VARCHAR(255) NOT NULL,
    "fuf" VARCHAR(255) NOT NULL,
    "uuid" VARCHAR(255) NOT NULL,
    "related_uuid" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "createData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "series" VARCHAR(255) NOT NULL,
    "folio" INTEGER NOT NULL,
    "amount_paid" MONEY NOT NULL,
    "amount_outstanding" MONEY NOT NULL,
    "pdf" VARCHAR(255) NOT NULL,
    "xml" VARCHAR(255) NOT NULL,
    "total" MONEY NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id_invoices")
);

-- CreateTable
CREATE TABLE "log_invoices" (
    "id_action" SERIAL NOT NULL,
    "user_identifier" VARCHAR(255) NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "action" VARCHAR(255) NOT NULL,

    CONSTRAINT "log_invoices_pkey" PRIMARY KEY ("id_action")
);
