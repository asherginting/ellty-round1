"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";

const PageData = [
  "Page 1",
  "Page 2",
  "Page 3",
  "Page 4",
  "Page 5",
  "Page 6",
];

export default function PagesDropdown() {
  const [selectedPages, setSelectedPages] = useState<string[]>([""]);
  const allSelected = selectedPages.length === PageData.length;

  const toggleAll = () => {
    setSelectedPages(allSelected ? [] : PageData);
  };

  const togglePage = (page: string) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const handleClickDone = () => {
    console.log("Selected pages:", selectedPages);
  };

  return (
    <section className="w-92.5 rounded-md bg-white border border-gray-150 shadow-card py-2.5 px-3.75">
      <div className="flex my-3 items-center justify-between">
        <span className="text-sm text-gray-900">All pages</span>
        <Checkbox checked={allSelected} onChange={toggleAll} />
      </div>
      <div className="pt-2.5 pb-2.5">
        <div className="h-[0.7px] bg-gray-300" />
      </div>
      <div className="space-y-1 max-h-41 overflow-y-auto scrollbar-hide">
        {PageData.map((page) => (
          <div
            key={page}
            className="flex my-3 items-center justify-between cursor-pointer"
            onClick={() => togglePage(page)}
          >
            <span className="text-sm text-gray-900">{page}</span>
            <Checkbox
              checked={selectedPages.includes(page)}
              onChange={() => togglePage(page)}
            />
          </div>
        ))}
      </div>
      <div className="h-[0.7px] bg-gray-300 my-2.5" />
      <Button onClick={handleClickDone} className="my-2.5">
        Done
      </Button>
    </section>
  );
}
