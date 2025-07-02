'use client';
import { useSearchParams } from 'next/navigation';

export default function VrnSearchPage() {
  const searchParams = useSearchParams();
  const value = searchParams.get('value');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Results for VRN: {value}</h1>
      {/* Add logic to fetch and display matching VRN data */}
    </div>
  );
}
