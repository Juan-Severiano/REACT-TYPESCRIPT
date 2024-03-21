import Container from "../../components/container";
import ImageLogo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { Input } from "../../components/input";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string(),
})

type FormData = z.infer<typeof schema>

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode:  'onChange'
  });

  function onSubmit (data: FormData) {
    console.log('data')
    console.log(data)
  }

  return (
    <Container>
      <div>
        <Link to='/'>
          <img src={ImageLogo} alt="Logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Coloque o email aqui"
          name="email"
          error={errors.email?.message}
          register={register}
        />
        <Input
          type="password"
          placeholder="Coloque a senha aqui"
          name="password"
          error={errors.password?.message}
          register={register}
        />
        <button>Acessar</button>
      </form>
      <Link to='/register'>Ainda não possui uma conta, Cadastre-se</Link>
    </Container>
  )
}
