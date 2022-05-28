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
interface GetInputPropsResult<T> {
  value: T[keyof T];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function useLocalForm<T>(
  initialValue?: T,
  initialConditions?: FormCondition<T>
) {
  const [form, setForm] = useState<T>(initialValue);
  const [errors, setErrors] = useState<FormError<T>>({});
  const [infoTexts, setInfoTexts] = useState<FormInfoText<T>>({});
  const [, setTouched] = useState<FormTouched<T>>({});
  const [conditions] = useState<FormCondition<T>>(initialConditions);

  useEffect(() => {
    const initialErrors: FormError<T> = {};
    const initialTouched: FormTouched<T> = {};
    Object.keys(form).forEach(key => {
      initialErrors[key] = false;
      initialTouched[key] = false;
    });
    setErrors(initialErrors);
    setTouched(initialTouched);
  }, [form]);

  useMemo(() => {
    if (conditions) {
      Object.keys(conditions).forEach(fieldName => {
        conditions[fieldName].forEach(condition => {
          if (form[fieldName]) {
            const res = condition(form[fieldName], form);
            setErrors(prev => ({
              ...prev,
              [fieldName]: typeof res === "boolean" ? res : res.isError,
            }));
            setInfoTexts(prev => ({
              ...prev,
              [fieldName]: typeof res === "boolean" ? "" : res.message,
            }));
          } else {
            setErrors(prev => ({
              ...prev,
              [fieldName]: false,
            }));
            setInfoTexts(prev => ({
              ...prev,
              [fieldName]: "",
            }));
          }
        });
      });
    }
  }, [conditions, form]);

  const update = useCallback(
    (fieldName: keyof T) => (value: any) => {
      setForm(prev => ({
        ...prev,
        [fieldName]: value,
      }));
      setTouched(prev => ({
        ...prev,
        [fieldName]: true,
      }));
    },
    []
  );

  const reset = useCallback(() => {
    setForm(initialValue);
  }, [initialValue]);

  const getInputProps = (fieldName: keyof T): GetInputPropsResult<T> => ({
    value: form[fieldName],
    onChange: e => update(fieldName)(e.target.value),
  });

  const validate = () => {
    const result = errors
      ? Object.keys(errors).filter(r => !!errors[r]).length
      : 0;

    return !(result > 0);
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
