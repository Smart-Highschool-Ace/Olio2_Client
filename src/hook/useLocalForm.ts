import { useState, useCallback, useEffect, useMemo } from "react";

type FormError<T> = { [fieldname in keyof T]?: boolean };
type FormInfoText<T> = { [fieldname in keyof T]?: string };
type ConditionResult =
  | boolean
  | {
      isError: boolean;
      message?: string;
    };
type FormTouched<T> = { [fieldName in keyof T]?: boolean };
export type FormCondition<T> = {
  [fieldname in keyof T]?: ((value: any, form?: T) => ConditionResult)[];
};

function useLocalForm<T>(
  initialValue?: T,
  initialConditions?: FormCondition<T>
) {
  const [form, setForm] = useState<T>(initialValue);
  const [errors, setErrors] = useState<FormError<T>>({});
  const [infoTexts, setInfoTexts] = useState<FormInfoText<T>>({});
  const [touched, setTouched] = useState<FormTouched<T>>({});
  const [conditions] = useState<FormCondition<T>>(initialConditions);

  useEffect(() => {
    const initialErrors: FormError<T> = {};
    const initialTouched: FormTouched<T> = {};
    Object.keys(form).forEach((key) => {
      initialErrors[key] = false;
      initialTouched[key] = false;
    });
    setErrors(initialErrors);
    setTouched(initialTouched);
  }, []);

  useMemo(() => {
    if (conditions) {
      Object.keys(conditions).forEach((fieldName) => {
        conditions[fieldName].map((condition) => {
          if (form[fieldName]) {
            const res = condition(form[fieldName], form);
            setErrors((prev) => ({
              ...prev,
              [fieldName]: typeof res === "boolean" ? res : res.isError,
            }));
            setInfoTexts((prev) => ({
              ...prev,
              [fieldName]: typeof res === "boolean" ? "" : res.message,
            }));
          } else {
            setErrors((prev) => ({
              ...prev,
              [fieldName]: false,
            }));
            setInfoTexts((prev) => ({
              ...prev,
              [fieldName]: "",
            }));
          }
        });
      });
    }
  }, [form]);

  const update = useCallback(
    (fieldName: keyof T) => (value: any) => {
      setForm((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
      setTouched((prev) => ({
        ...prev,
        [fieldName]: true,
      }));
    },
    [form]
  );

  const reset = useCallback(() => {
    setForm(initialValue);
  }, [form]);

  const getInputProps = (fieldName: keyof T) => ({
    value: form[fieldName] as any,
    onChange: (e) => update(fieldName)(e.target.value),
  });

  const validate = () => {
    const result = errors
      ? Object.keys(errors).filter((r) => !!errors[r]).length
      : 0;

    return result > 0 ? false : true;
  };

  return {
    ...form,
    update,
    reset,
    getInputProps,
    infoTexts,
    validate,
  };
}

export default useLocalForm;
