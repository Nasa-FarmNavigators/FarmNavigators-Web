import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import MultiSelect from "../MultiSelect";

export default function SelectInputs() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const multiOptions = [
    { value: "1", text: "Todos", selected: false },
    { value: "2", text: "Benguela", selected: false },
    { value: "3", text: "Cabinda", selected: false },
    { value: "4", text: "Malanje", selected: false },
    { value: "5", text: "Luanda", selected: false },
  ];
  return (
    <ComponentCard title="Select Inputs">
      <div className="space-y-6">
        <div>
          <MultiSelect
            label="Multiple Select Options"
            options={multiOptions}
            defaultSelected={["5", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            Selected Values: {selectedValues.join(", ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
