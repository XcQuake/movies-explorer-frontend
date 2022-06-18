import { useState, useCallback, useEffect, useLayoutEffect } from 'react';

export function useFormWithValidation({validations, initialValues, initialErrors}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  const handleValidate = async (input) => {
    const value = input.value;
    const name = input.name;

    if (validations) {
      const newErrors = errors;
      const validation = validations[name];
      const pattern = validation?.pattern;
      const minLength = validation?.minLength;

      if (validation?.required?.value && !value) { // requirement check
        setIsValid(false);
        setErrors({...errors, [name]: validation?.required?.message});
      } else if (pattern?.value && value && !RegExp(pattern.value).test(value)) { // pattern check
        setIsValid(false);
        setErrors({...errors, [name]: pattern.message});
      } else if (minLength?.value && value && value.length < minLength.value) { // minLength check
        setIsValid(false);
        setErrors({...errors, [name]: minLength.message});
      } else {
        delete newErrors[name];
        setErrors(newErrors);
        return;
      }
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors, values])

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    handleValidate(target);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}