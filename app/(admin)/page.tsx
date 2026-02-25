import { redirect } from "next/navigation";

export default function Home() {
  //Al entrar a la pagina principal redireccionamos a la pagina que muestra los productos por categoria
  redirect('/vehicles')
}
