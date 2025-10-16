"use client";
import dynamic from "next/dynamic";

const RequestsTable = dynamic(() => import("../../../../../components/RequestsTableClient"), {
  ssr: false,
});

export default function ClientRequestsWrapper(props) {
  return <RequestsTable {...props} />;
}
