export interface User {
  id: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  email: string;
  phone: string;
  type: number;
  cycleId: number;
  subscriptionExpirationDate: number;
  signUpDate: number;
  activationDate: number;
  packageId: number;
  packageProducts?: (number)[] | null;
  activeBusinessCount: number;
  businessId: string;
  billingBusinessId: string;
  billingBusinessName: string;
  billingEmail: string;
  debtAmount: number;
  inboundEmail: string;
  businesses?: (BusinessesEntity)[] | null;
  businessesInvitedMe?: (null)[] | null;
  documents?: (number)[] | null;
  settings: Settings;
  source: string;
  campaign: string;
  inviteLink: string;
  permissionRole: number;
  pluginTypes?: (null)[] | null;
}

interface BusinessesEntity {
  id: string;
  type: number;
  taxId: string;
  name: string;
  title: string;
  address: string;
  cityId: number;
  city: string;
  nameEn: string;
  titleEn: string;
  category: string;
  subCategory: number;
  addressEn: string;
  cityEn: string;
  phone: string;
  templateId: number;
  skinId: number;
  bankDisplay: boolean;
  bankDisplayEn: boolean;
  accountantEmails?: (null)[] | null;
  accountantDocsEmailSettings: number;
  accountantReportEmailSettings: number;
  senderEmailSettings: number;
  documentsEmailSettings: number;
  incomeReportEmailSettings: number;
  incomeReportFormatType: number;
  emailSubjectType: number;
  reportSendingDay: number;
  accountingType: number;
  deductionRate: number;
  advanceTaxRate: number;
  advanceNationalInsuranceRate: number;
  active: boolean;
  accountEmail: string;
  documentCount: number;
  settings: Settings1;
  creationDate: number;
  lastUpdateDate: number;
  exemption: boolean;
  notifyEmail: string;
}
interface Settings1 {
  documentCurrency: string;
  documentLang: string;
  documentRounding: boolean;
  documentQuantityNearPrice: boolean;
  documentCopyCurrencyRates: boolean;
  documentVatType: number;
  rowVatType: number;
  mixedVatEnabled: boolean;
  receiptIncomeEnabled: boolean;
  unsignedEnabled: boolean;
  externalCertificateEnabled: boolean;
  attachmentEnabled: boolean;
  depositDocumentsEnabled: boolean;
  selectedPaymentChannels?: (null)[] | null;
  encoding: string;
  showForeignAddress: boolean;
  emailButtonBackgroundColor: string;
  incomeLayout: number;
  journey: boolean;
  sendMonthlyReportIncome: boolean;
  sendMonthlyReportExpense: boolean;
  senderEnabled: boolean;
  defaultTerms: number;
}

interface Settings {
  popupJourneySeen: boolean;
  popupMeshulamSeen: boolean;
  popupTrialEndedSeen: boolean;
  appOnBoardingSeen: boolean;
  persona: number;
  twoFactorAuthEnabled: boolean;
  autoRenewal: boolean;
}
