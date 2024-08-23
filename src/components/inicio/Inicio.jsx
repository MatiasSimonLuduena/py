import "./inicio.css"

const Inicio = () => {
  return (
    <main>
      <h1>Iniciar Sesión</h1>
      <div className="container_form">
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Contraseña"/>
        <button>Iniciar Sesión</button>
      </div>
      <p>Versión:v1.116.0</p>
    </main>
  )
}

export default Inicio