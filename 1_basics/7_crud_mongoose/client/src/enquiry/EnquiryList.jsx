import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function EnquiryList() {
  return (
    <div className="bg-gray-200 p-4 ">
      <h2 className="text-[20px] font-bold mb-4">Enquiry Form</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr no</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell>Edit</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                1
              </TableCell>
              <TableCell>Bruce Wayne</TableCell>
              <TableCell>bruce@Wayne.com</TableCell>
              <TableCell>3242999</TableCell>
              <TableCell>HELLOO</TableCell>
              <TableCell>
                <a
                  href="/"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </TableCell>
              <TableCell>
                <a
                  href="/"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Delete
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
