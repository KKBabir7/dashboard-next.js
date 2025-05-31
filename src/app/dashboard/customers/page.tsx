import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  {
    id: 'USR-010',
    name: 'Tanvir Hasan',
    avatar: '/assets/avatar-10.png',
    email: 'tanvir.hasan@example.com',
    phone: '01711223344',
    address: { city: 'Dhaka', country: 'Bangladesh', state: 'Mirpur', street: 'Road 12, Block C' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-009',
    name: 'Rasheda Akter',
    avatar: '/assets/avatar-9.png',
    email: 'rasheda.akter@example.com',
    phone: '01833445566',
    address: { city: 'Chittagong', country: 'Bangladesh', state: 'Pahartali', street: 'Lake View Road' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-008',
    name: 'Mohammad Rezaul',
    avatar: '/assets/avatar-8.png',
    email: 'rezaul.m@example.com',
    phone: '01999887766',
    address: { city: 'Khulna', country: 'Bangladesh', state: 'Sonadanga', street: 'Ward No 5, House 22' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-007',
    name: 'Farhana Yeasmin',
    avatar: '/assets/avatar-7.png',
    email: 'farhana.yeasmin@example.com',
    phone: '01611224455',
    address: { city: 'Rajshahi', country: 'Bangladesh', state: 'Shah Makhdum', street: 'Azimpur Colony' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-006',
    name: 'Rakibul Islam',
    avatar: '/assets/avatar-6.png',
    email: 'rakibul.islam@example.com',
    phone: '01755667788',
    address: { city: 'Sylhet', country: 'Bangladesh', state: 'Zindabazar', street: 'Holding No 14, East Side' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-005',
    name: 'Shamima Nasrin',
    avatar: '/assets/avatar-5.png',
    email: 'shamima.nasrin@example.com',
    phone: '01814567890',
    address: { city: 'Barisal', country: 'Bangladesh', state: 'Nathullabad', street: 'Main Road, Block A' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-004',
    name: 'Asif Mahmud',
    avatar: '/assets/avatar-4.png',
    email: 'asif.mahmud@example.com',
    phone: '01511223344',
    address: { city: 'Mymensingh', country: 'Bangladesh', state: 'Town Hall', street: 'Holding 19, Main Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-003',
    name: 'Sadia Rahman',
    avatar: '/assets/avatar-3.png',
    email: 'sadia.rahman@example.com',
    phone: '01333445566',
    address: { city: 'Rangpur', country: 'Bangladesh', state: 'Jahaj Company More', street: 'Building 7, Lane 2' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-002',
    name: 'Jahidul Karim',
    avatar: '/assets/avatar-2.png',
    email: 'jahid.karim@example.com',
    phone: '01777665544',
    address: { city: 'Dhaka', country: 'Bangladesh', state: 'Badda', street: 'Middle Badda, Road 4' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-001',
    name: 'Nusrat Jahan',
    avatar: '/assets/avatar-1.png',
    email: 'nusrat.jahan@example.com',
    phone: '01922334455',
    address: { city: 'Dhaka', country: 'Bangladesh', state: 'Gulshan', street: 'House 33, Avenue 5' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Customers</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
