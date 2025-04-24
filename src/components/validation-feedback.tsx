import { FieldError } from "react-hook-form";

type ValidationFeedbackProps = {
  fieldError?: FieldError;
};

export default function ValidationFeedback({
  fieldError,
}: ValidationFeedbackProps) {
  if (!fieldError) return null;

  return <p className="mt-2 text-sm text-red-500">{fieldError.message}</p>;
}
