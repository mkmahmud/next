"use client";
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSkeleton } from '../skeletons';


// Create Invoice Button
export function CreateInvoice() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push('/dashboard/invoices/create');
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <span className="hidden md:block">Create Invoice</span>
          <PlusIcon className="h-5 md:ml-4" />
        </>
      )}
    </button>
  );
}

// Cancel Button
export function  CancelInvoice() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push('/dashboard/invoices');
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    >
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <span className="hidden md:block">Cancel</span> 
        </>
      )}
    </button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
