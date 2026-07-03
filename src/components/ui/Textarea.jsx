import { fieldClass } from "./inputStyles";

export default function Textarea({ error = false, className = "", ...props }) {
  return <textarea className={fieldClass({ error, className })} {...props} />;
}
