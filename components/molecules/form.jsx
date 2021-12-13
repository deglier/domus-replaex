import { useFormik } from "formik";
import { useState } from "react";

import Image from "next/image"
import Button from "../atoms/Button";

import isValidTelephone from "../../utils/is-valid-phone-number";

import IconCheck from "../../assets/images/icn-check.png";


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Obrigatório';
  } else if (values.name.length < 3) {
    errors.name = 'Precisa ser o nome completo';
  }

  if (!values.telefone.length) {
    errors.telefone = 'Obrigatório';
  } else if (!isValidTelephone(values.telefone)) {
    errors.telefone = 'Telefone inválido';
  }

  if (!values.email) {
    errors.email = 'Obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail inválido';
  }
  console.log(errors);
  return errors;
};

const fields = [
  {
    name: 'name',
    label: 'Nome',
    type: 'text',
    placeholder: 'Digite seu nome',
  },
  {
    name: 'telefone',
    label: 'Telefone',
    type: 'tel',
    placeholder: 'Digite seu telefone',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'Digite seu e-mail',
  },
]
export default function Form(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    const request = await fetch('https://formsubmit.co/ajax/degliersa@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }); 
    const response = await request.json();
    console.log(response);
    setIsLoading(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      resetForm();
    }
    , 8000);

  };

  const formik = useFormik({
    initialValues: {
      name: "",
      telefone: "",
      email: "",
    },
    validate,
    onSubmit: handleSubmit,
  });
  

  return (
    <div {...props}>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-16 h-16 rounded-full border-brand-complementary-up border-4 border-b-transparent animate-spin"></div>
        </div>
      ) : isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center h-full w-full">
          <Image src={IconCheck} width={64} height={64} />
          <h2 className="mt-6 text-2xl leading-none text-brand-primary-pure">Recebemos seu contato!</h2>
          <p className="mt-3 text-base leading-normal font-light text-neutral-dark-down">Em breve nossa equipe vai entrar em contato com você para tirar todas as suas dúvidas.</p>
        </div>
      ) : ( 
        <form onSubmit={formik.handleSubmit}>
          {fields.map((field, index) => (
            <div key={index} className="form-group mb-4">
              <label htmlFor={field.name} className="block text-sm leading-tight mb-2 text-neutral-dark-down">{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                className={`border rounded text-base leading-none p-4 w-full outline-none  ${formik.errors[field.name] ? "hocus:border-status-error placeholder-shown:border-status-error not-placeholder-shown:border-status-error" : "hocus:border-brand-complementary-pure not-placeholder-shown:border-brand-primary-down"}`}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
              />
              {formik.errors[field.name] ? <div className="mt-1 text-xs leading-tight text-status-error">{formik.errors[field.name]}</div> : null}
            </div>
          ))}
          <Button className="mt-6 w-full" type="submit" >Solicitar um contato</Button>
        </form>
      )}
    </div>
  );
}