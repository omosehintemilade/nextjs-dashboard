import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { InvoiceRoute } from '@/app/utils/constants';

interface Prop {
  params: { id: string };
}
export default async function Page({ params }: Prop) {
  <main>
    <Breadcrumbs
      breadcrumbs={[
        { label: 'Invoices', href: InvoiceRoute.ROOT },
        {
          label: 'Edit Invoice',
          href: InvoiceRoute.DELETE('id'),
          active: true,
        },
      ]}
    />
    {/* <Form invoice={invoice} customers={customers} /> */}
  </main>;
}
