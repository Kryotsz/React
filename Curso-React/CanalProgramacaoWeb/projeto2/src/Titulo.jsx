import { useState } from "react"

export default function Titulo({nome, paragrafo, cor}) {

    const [texto, setTexto] = useState("Título inicial")
    const [inputText, setInputText] = useState("")

    // let nome = "Igor Gassen";
    // const soma = 10 + 10;
    // const urlImg = "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"

    function clicou() {
        setTexto(inputText);
    }

    return (
        <div>
            {<h1 style={{color: cor}}>
                {texto}
                {/* {nome ? nome : "Fulano"} */}
            </h1>}
            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
            {/* <button onClick={() => {setTexto("Mudei via botão")}}>Mudar</button> */}
            {/* <img width={150} src={urlImg} /> */}
            {paragrafo ?
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptate ex reprehenderit beatae saepe quas dolore voluptatum nostrum ea alias, quasi blanditiis nulla laboriosam eligendi possimus ullam aliquam mollitia sequi!</p>
                :
                <p></p>
            }
        </div>
    )
}