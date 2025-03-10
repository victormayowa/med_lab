"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { investigationSchema } from "@/lib/validation";
import { z } from "zod";

export type InvestigationFormData = z.infer<typeof investigationSchema>;

export interface InvestigationFormProps {
  onSubmit: (data: InvestigationFormData) => void;
  isLoading: boolean;
  isEdit: boolean;
  defaultValues?: InvestigationFormData;
}
export default function InvestigationForm({
  onSubmit,
  isLoading,
  isEdit,
  defaultValues,
}: InvestigationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestigationFormData>({
    resolver: zodResolver(investigationSchema),
    defaultValues, // Set default values here
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="patientName">Patient Name</Label>
        <Input id="patientName" {...register("patientName")} />
        {errors.patientName && (
          <p className="text-red-500">{errors.patientName.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="investigationType">Test Type</Label>
        <Input id="investigationType" {...register("investigationType")} />
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
        <Label htmlFor="investigationDate">Test Date</Label>
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
        className={`w-full text-white ${
          isEdit
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
        disabled={isLoading}
      >
        {isLoading
          ? isEdit
            ? "Updating..."
            : "Saving..."
          : isEdit
          ? "Update Investigation"
          : "Save Investigation"}
      </Button>
    </form>
  );
}