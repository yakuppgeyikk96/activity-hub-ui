import { Button } from "@mui/material";
import { cookies } from "next/headers";

export default function Home() {
  console.log(cookies().getAll());
  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}
