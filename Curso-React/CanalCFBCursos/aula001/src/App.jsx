export default function App() {
 
  // const canal = "CFB Cursos - youtube.com/cfbcursos"
  const canal=()=>{
    return("CFB Cursos")
  }

  // const curso = "Curso de React"
  function curso(){
    return 'Curso de React'
  }

  return (
    <section>
      <header>
        {/* <p>Canal: {canal}</p> */}
        <p>Canal: {canal()}</p>
      </header>
      <section>
        {/* <p>{"Assunto: " + curso}</p> */}
        <p>{"Assunto: " + curso()}</p>
      </section>
    </section>
  )
}