import { Dropdown, Icon, IconButton } from "@/components";
import { makeData } from "@/constants";
import { Activity, ActivityStatus, DropdownBase, TransactionType } from "@/types";
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import dayjs from "dayjs";
import { useState } from "react";

const columnHelper = createColumnHelper<Activity>();

const columns = [
  columnHelper.accessor("coin", {
    id: "coin",
    header: () => <span>Coin</span>,
    cell: (info) => <span className="text-sm font-bold text-white">{info.getValue()}</span>,
  }),
  columnHelper.accessor("transaction", {
    id: "transaction",
    header: () => <span>Transaction</span>,
    cell: (info) => (
      <div className="flex flex-col gap-[2px]">
        <p className="text-base font-semibold">${info.getValue().amount}</p>
        <p className="text-xs capitalize text-secondary">{TransactionType[info.getValue().type]}</p>
      </div>
    ),
  }),
  columnHelper.accessor("id", {
    id: "id",
    header: () => <span>ID</span>,
    cell: (info) => <p className="text-sm font-normal text-white">{info.getValue()}</p>,
  }),
  columnHelper.accessor("date", {
    id: "date",
    header: () => <span>Date</span>,
    cell: (info) => <p className="text-sm font-normal text-white">{dayjs(info.getValue()).format("MMM DD, YYYY")}</p>,
  }),
  columnHelper.accessor("status", {
    id: "status",
    header: () => <span>Status</span>,
    cell: (info) => (
      <span
        className={classNames("text-sm font-normal px-3 py-1 rounded-lg", {
          "text-primary bg-primary/10": info.getValue() === ActivityStatus.completed,
          "text-red bg-red/10": info.getValue() === ActivityStatus.declined,
          "text-orange bg-orange/10": info.getValue() === ActivityStatus.pending,
        })}
      >
        {ActivityStatus[info.getValue()]}
      </span>
    ),
  }),
  columnHelper.accessor("fee", {
    id: "fee",
    header: () => <span>Fee</span>,
    cell: (info) => <p className="text-xs font-normal text-white">{info.getValue()}</p>,
  }),
];

const durationList: DropdownBase[] = [
  { name: "Last 30 Days", value: "30" },
  { name: "Last 10 Days", value: "10" },
  { name: "Last 1 Days", value: "1" },
];

const timeList: DropdownBase[] = [{ name: "Aug 2023", value: "9" }];

export const Activities = () => {
  const [duration, setDuration] = useState<DropdownBase>(durationList[0]);
  const [time, setTime] = useState<DropdownBase>(timeList[0]);
  const [data] = useState(() => makeData(3));
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <section className="px-5 py-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Recent Activities</h4>
        <div className="items-center gap-3 hidden xl:flex">
          <Dropdown handleClick={(value) => setDuration(value)} items={durationList} className="h-14">
            {duration.name}
          </Dropdown>
          <Dropdown handleClick={(value) => setTime(value)} items={timeList} className="h-14">
            {time.name}
          </Dropdown>
          <div className="flex items-center bg-gray-800 border border-gray-600 py-1  rounded-primary pl-5 pr-1">
            <Icon icon="search" className="h-5 w-5" />
            <input type="text" placeholder="Search" className="text-sm ml-4" />
            <IconButton icon="solid-sort-descending" size="sm" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-scroll mt-7">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-600 pb-4 pr-3 text-start"
                    >
                      <div className="flex items-center justify-center gap-1 text-xs font-normal text-white w-fit group">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <Icon
                          icon={
                            header.column.getIsSorted() === "desc"
                              ? "solid-caret-down"
                              : header.column.getIsSorted() === "asc"
                              ? "solid-caret-up"
                              : "solid-sort"
                          }
                          className="w-4 h-4 text-secondary group-hover:text-white"
                        />
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <tr key={row.id} className="mb-[10px]">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id} className="py-3 pr-4">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
