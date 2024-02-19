// export class RouteConstants {
//   static CREATE_INVOICE: '/dashboard/invoices/create';
//   static INVOICES: '/dashboard/invoices';
// }

export const RouteConstants = {
  CREATE_INVOICE: '/dashboard/invoices/create',
  INVOICES: '/dashboard/invoices',
};

export const InvoiceRoute = {
  ROOT: '/dashboard/invoices',
  CREATE: 'dashnboard/create',
  EDIT: (id: string) => `/dashboard/invoices/${id}/edit`,
  DELETE: (id: string) => `/dashboard/invoices/${id}/edit`,
};
