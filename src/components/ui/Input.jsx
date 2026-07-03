import { fieldClass } from "./inputStyles";

export default function Input({ error = false, className = "", ...props }) {
  return <input className={fieldClass({ error, className })} {...props} />;
}
