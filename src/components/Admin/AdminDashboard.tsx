import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Grid as StudentDetails } from "../Dashboard/Grid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { faker } from "@faker-js/faker";

export const AdminDashboard = () => {
  const [currentRollNumber, setCurrentRollNumber] = useState<string | null>(
    null
  );
  const form = useForm({
    defaultValues: {
      rollNumber: "",
    },
  });

  const handleGetDetails = (data: { rollNumber: string }) => {
    setCurrentRollNumber(data.rollNumber);
  };
  return (
    <main className="flex flex-col gap-4">
      <div className="px-4">
        <div className="bg-white col-span-12 overflow-hidden rounded border border-stone-300">
          <div className="px-4 py-4 flex gap-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleGetDetails)}
                className="flex gap-2 w-full"
              >
                <FormField
                  control={form.control}
                  name="rollNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          className="outline-none w-full"
                          placeholder="Enter roll number"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">Get Details</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      {currentRollNumber && (
        <div className="flex flex-col gap-4">
          <div className="px-4 flex items-center gap-2 mb-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Roll Number</span>
              <span className="font-medium">{currentRollNumber}</span>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Student Name</span>
              <span className="font-medium">{faker.person.fullName()}</span>
            </div>
          </div>
          <StudentDetails />
        </div>
      )}
    </main>
  );
};
