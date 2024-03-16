import { Button } from "primereact/button";
import FormTextInput from "../../Form/FormTextInput";

export default function LoginForm() {
  return (
    <form className="w-full">
      <FormTextInput
        name="email"
        placeholder="Email"
        addon={
          <span className="p-inputgroup-addon">
            <i className="pi pi-at"></i>
          </span>
        }
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
      />
      <div className="py-4">
        <Button type="submit" label="Login" className="w-full" />
      </div>
    </form>
  );
}
