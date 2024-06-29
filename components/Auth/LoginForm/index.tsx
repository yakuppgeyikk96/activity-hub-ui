import { Button } from "primereact/button";
import FormTextInput from "../../Form/FormTextInput";
import { useFormState } from "react-dom";
import { login } from "@/actions/auth/login";
import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { showToast } from "@/actions/common/show-toast";

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, {});
  const toast = useRef(null);

  console.log(state);

  useEffect(() => {
    if (state && state.serverStatus) {
      console.log(state.serverStatus);
      showToast(toast, state.serverStatus.message, state.serverStatus.status);
    }
  }, [state]);

  return (
    <>
      <Toast ref={toast} />
      <form className="w-full" action={dispatch}>
        <FormTextInput
          name="email"
          placeholder="Email"
          addon={
            <span className="p-inputgroup-addon">
              <i className="pi pi-at"></i>
            </span>
          }
          errors={state?.clientStatus?.errors}
        />
        <FormTextInput
          type="password"
          name="password"
          placeholder="Password"
          addon={
            <span className="p-inputgroup-addon">
              <i className="pi pi-key"></i>
            </span>
          }
          errors={state?.clientStatus?.errors}
        />
        <div className="py-4">
          <Button type="submit" label="Login" className="w-full" />
        </div>
      </form>
    </>
  );
}
