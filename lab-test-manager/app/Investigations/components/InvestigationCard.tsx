// /app/investigations/components/InvestigationCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { InvestigationData } from "@/lib/types";

export default function InvestigationCard({
  investigation,
}: {
  investigation: InvestigationData;
}) {
  return (
    <Card className="bg-green-100 border-green-300">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-green-800">
          {investigation.patientName}
        </h2>
        <p className="text-sm text-green-600">
          {investigation.investigationType}
        </p>
        <p className="text-sm text-green-700">Result: {investigation.result}</p>
      </CardContent>
    </Card>
  );
}