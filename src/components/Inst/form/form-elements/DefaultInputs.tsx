import ComponentCard from "../../common/ComponentCard";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";

export default function DefaultInputs() {

  return (
    <ComponentCard title="Título">
      <div className="space-y-6">
        <div>
          <Label htmlFor="inputTwo">Título do aviso</Label>
          <Input type="text" id="inputTwo" placeholder="Ex: Campanha de Vacinação contra Malária" />
        </div>
      </div>
    </ComponentCard>
  );
}
