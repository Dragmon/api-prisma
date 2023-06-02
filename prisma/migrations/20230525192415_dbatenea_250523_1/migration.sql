-- CreateTable
CREATE TABLE "Account" (
    "id_account" SERIAL NOT NULL,
    "account" VARCHAR(255) NOT NULL,
    "business_name" VARCHAR(255) NOT NULL,
    "rfc" VARCHAR(13) NOT NULL,
    "tax_regime" VARCHAR(255) NOT NULL,
    "tax_residence" VARCHAR(255) NOT NULL,
    "unit_measure_key" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "participant_status" BOOLEAN NOT NULL,
    "evidence" BOOLEAN NOT NULL,
    "active_automation" BOOLEAN NOT NULL,
    "payment_vouchers" BOOLEAN NOT NULL,
    "payment_method" VARCHAR(255) NOT NULL,
    "addendum" BOOLEAN NOT NULL,
    "bank" VARCHAR(255) NOT NULL,
    "branch" VARCHAR(20) NOT NULL,
    "account_number" VARCHAR(20) NOT NULL,
    "interbank_key" VARCHAR(18) NOT NULL,
    "contact_number" VARCHAR(10) NOT NULL,
    "createData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id_account")
);

-- CreateTable
CREATE TABLE "Subaccount" (
    "id_subaccount" SERIAL NOT NULL,
    "business_name" VARCHAR(255) NOT NULL,
    "rfc" VARCHAR(13) NOT NULL,
    "tax_regime" VARCHAR(255) NOT NULL,
    "cfdi" VARCHAR(255) NOT NULL,
    "subaccount" VARCHAR(255) NOT NULL,
    "order_account" VARCHAR(255) NOT NULL,
    "unit_measure_key" VARCHAR(255) NOT NULL,
    "createData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subaccount_pkey" PRIMARY KEY ("id_subaccount")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_rfc_key" ON "Account"("rfc");
