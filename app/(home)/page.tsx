import { cookies } from "next/headers";
import { Button } from "primereact/button";

export default function Home() {
  console.log(cookies().getAll());
  return (
    <div className="p-inputgroup flex-1">
      <Button label="Save" />
    </div>
  );
}
