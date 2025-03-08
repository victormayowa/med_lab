"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { createInvestigation } from "../services/investigationService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { investigationSchema } from "@/lib/validation";

type InvestigationFormData = z.infer<typeof investigationSchema>;

export default function NewInvestigationPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestigationFormData>({
    resolver: zodResolver(investigationSchema),
  });

  const mutation = useMutation({
    mutationFn: createInvestigation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investigations"] });
      router.push("/investigations");
    },
  });

  const onSubmit = (data: InvestigationFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        New Investigation
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="patientName">Patient Name</Label>
          <Input id="patientName" {...register("patientName")} />
          {errors.patientName && (
            <p className="text-red-500">{errors.patientName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="testType">Test Type</Label>
          <Input id="testType" {...register("investigationType")} />
          {errors.investigationType && (
            <p className="text-red-500">{errors.investigationType.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="result">Result</Label>
          <Input id="result" {...register("result")} />
          {errors.result && (
            <p className="text-red-500">{errors.result.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="testDate">Test Date</Label>
          <Input
            id="investigationDate"
            type="date"
            {...register("investigationDate")}
          />
          {errors.investigationDate && (
            <p className="text-red-500">{errors.investigationDate.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="notes">Notes (Optional)</Label>
          <Textarea id="notes" {...register("notes")} />
        </div>

        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          {mutation.status === "pending" ? "Saving..." : "Save Investigation"}
        </Button>
      </form>
    </div>
  );
}
