import { Button } from "primereact/button";
import FormTextInput from "../../Form/FormTextInput";
import { useFormState } from "react-dom";
import { signup } from "@/actions/auth/signup";

export default function SignupForm() {
  const [state, dispatch] = useFormState(signup, {});

  return (
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
        name="password1"
        placeholder="Password"
        addon={
          <span className="p-inputgroup-addon">
            <i className="pi pi-key"></i>
          </span>
        }
        errors={state?.clientStatus?.errors}
      />
      <FormTextInput
        type="password"
        name="password2"
        placeholder="Confirm Password"
        addon={
          <span className="p-inputgroup-addon">
            <i className="pi pi-key"></i>
          </span>
        }
        errors={state?.clientStatus?.errors}
      />
      <div className="py-4">
        <Button type="submit" label="Signup" className="w-full" />
      </div>
    </form>
  );
}
