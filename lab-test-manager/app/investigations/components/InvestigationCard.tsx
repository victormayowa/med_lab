// /app/investigations/components/InvestigationCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InvestigationType } from "@/lib/types";
import Link from "next/link";

export default function InvestigationCard({
  investigation,
  onDelete,
  onUpdate,
}: {
  investigation: InvestigationType;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}) {
  return (
    <Card className="bg-green-100 border-green-300">
      <CardContent className="flex justify-between items-center">
        <Link href={`/app/investigations/${investigation.id}`}>
          <div className="">
            <h2 className="text-lg font-semibold text-green-800">
              {investigation.patientName}
            </h2>
            <p className="text-sm text-green-600">
              {investigation.investigationType}
            </p>
            <p className="text-sm text-green-700">
              Result: {investigation.result}
            </p>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          <Button
            variant="destructive"
            onClick={() => onDelete(investigation.id)}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </Button>
          <Button
            variant="default"
            onClick={() => onUpdate(investigation.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Update
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
