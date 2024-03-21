import Container from "../../components/container";
import ImageLogo from '../../assets/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase-connection";

const schema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string(),
  name: z.string()
})

type FormData = z.infer<typeof schema>

export function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode:  'onChange'
  });

  async function onSubmit (data: FormData) {
    console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async user => {
        await updateProfile(user.user, {
          displayName: data.name
        })
        console.log('Cadastro realizado com sucesso !!!')
        navigate('/dashboard', { replace: true })
      })
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
          type="text"
          placeholder="Coloque o name aqui"
          name="name"
          error={errors.name?.message}
          register={register}
        />
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
      <Link to='/register'>Já possui uma conta, Login</Link>
    </Container>
  )
}
