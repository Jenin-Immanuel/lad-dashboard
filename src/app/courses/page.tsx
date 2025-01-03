"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { TopBar } from "@/components/Dashboard/TopBar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { CoursesDashboard } from "./CoursesDashboard";

const courses = [
  { label: "Introduction to Programming", value: "intro-prog" },
  { label: "Data Structures", value: "data-struct" },
  { label: "Algorithms", value: "algo" },
];

const units = {
  "intro-prog": [
    { label: "Basic Syntax", value: "basic-syntax" },
    { label: "Control Flow", value: "control-flow" },
    { label: "Functions", value: "functions" },
  ],
  "data-struct": [
    { label: "Arrays", value: "arrays" },
    { label: "Linked Lists", value: "linked-lists" },
    { label: "Trees", value: "trees" },
  ],
  algo: [
    { label: "Sorting", value: "sorting" },
    { label: "Searching", value: "searching" },
    { label: "Graph Algorithms", value: "graphs" },
  ],
};

const content = {
  "basic-syntax": [
    { label: "Variables Lecture", value: "variables-lecture", type: "lecture" },
    { label: "Data Types Quiz", value: "datatypes-quiz", type: "test" },
  ],
  arrays: [
    { label: "Array Operations", value: "array-ops", type: "lecture" },
    { label: "Array Practice Test", value: "array-test", type: "test" },
  ],
  sorting: [
    { label: "Bubble Sort", value: "bubble-sort", type: "lecture" },
    { label: "Sorting Algorithms Test", value: "sorting-test", type: "test" },
  ],
};

const FormSchema = z.object({
  course: z.string({
    required_error: "Please select a course.",
  }),
  unit: z.string({
    required_error: "Please select a unit.",
  }),
  content: z.string({
    required_error: "Please select a content.",
  }),
});

export default function Page() {
  const [open, setOpen] = useState({
    course: false,
    unit: false,
    content: false,
  });

  const [data, setData] = useState<z.infer<typeof FormSchema> | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const selectedCourse = form.watch("course");
  const selectedUnit = form.watch("unit");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setData(data);
  }

  return (
    <div className="bg-gray rounded-lg pb-4">
      <TopBar />
      <div className="col-span-12 bg-white rounded-lg border border-stone-200 p-4 mx-4">
        <h2 className="text-lg font-semibold mb-4">Course Filters</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-3 gap-4"
          >
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <Popover
                    open={open.course}
                    onOpenChange={(o) => {
                      setOpen({ ...open, course: o });
                    }}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        type="button"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? courses.find(
                              (course) => course.value === field.value
                            )?.label
                          : "Select course"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search courses..." />
                        <CommandEmpty>No course found.</CommandEmpty>
                        <CommandList>
                          <CommandGroup>
                            {courses.map((course) => {
                              return (
                                <CommandItem
                                  key={course.value}
                                  value={course.value}
                                  onSelect={() => {
                                    form.setValue("course", course.value);
                                    form.setValue("unit", "");
                                    form.setValue("content", "");
                                    setOpen({ ...open, course: false });
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      course.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {course.label}
                                </CommandItem>
                              );
                            })}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit</FormLabel>
                  <Popover
                    open={open.unit}
                    onOpenChange={(o) => setOpen({ ...open, unit: o })}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                        disabled={!selectedCourse}
                      >
                        {field.value
                          ? units[selectedCourse as keyof typeof units]?.find(
                              (unit) => unit.value === field.value
                            )?.label
                          : "Select unit"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search units..." />
                        <CommandEmpty>No unit found.</CommandEmpty>
                        <CommandList>
                          <CommandGroup>
                            {selectedCourse &&
                              units[selectedCourse as keyof typeof units]?.map(
                                (unit) => (
                                  <CommandItem
                                    key={unit.value}
                                    value={unit.value}
                                    onSelect={() => {
                                      form.setValue("unit", unit.value);
                                      form.setValue("content", "");
                                      setOpen({ ...open, unit: false });
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        unit.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {unit.label}
                                  </CommandItem>
                                )
                              )}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lecture/Test</FormLabel>
                  <Popover
                    open={open.content}
                    onOpenChange={(o) => setOpen({ ...open, content: o })}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                        disabled={!selectedUnit}
                      >
                        {field.value
                          ? content[selectedUnit as keyof typeof content]?.find(
                              (item) => item.value === field.value
                            )?.label
                          : "Select content"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search content..." />
                        <CommandEmpty>No content found.</CommandEmpty>
                        <CommandList>
                          <CommandGroup>
                            {selectedUnit &&
                              content[
                                selectedUnit as keyof typeof content
                              ]?.map((item) => (
                                <CommandItem
                                  key={item.value}
                                  value={item.value}
                                  onSelect={() => {
                                    form.setValue("content", item.value);
                                    setOpen({ ...open, content: false });
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      item.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {item.label}
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <div className="col-span-3">
              <Button type="submit" className="w-full">
                Apply Filters
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {data && <CoursesDashboard />}
    </div>
  );
}
