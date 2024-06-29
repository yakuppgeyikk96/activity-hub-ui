"use client";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import AuthDialogContent from "./AuthDialogContent";

export default function AuthDialog() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Login"
        size="small"
        icon="pi pi-sign-in"
        onClick={() => setVisible(true)}
      />
      <Dialog
        modal
        visible={visible}
        style={{ width: "fit-content" }}
        onHide={() => setVisible(false)}
        content={({ hide }) => <AuthDialogContent hide={hide} />}
      />
    </div>
  );
}
