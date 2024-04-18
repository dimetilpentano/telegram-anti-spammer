async function sendScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    let main = document.querySelector("#root");
    let textarea = main.querySelector(`div[contenteditable="true"]`);
    if(!textarea) throw new Error("No tienes una conversación abierta.")

    for(const line of lines){
        console.log(line)

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));

        setTimeout(() => {
            (main.querySelector(`button[title="Send Message"]`) || main.querySelector(`"icon icon-send"`)).click();
        }, 100);

        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}
const content = `


`
sendScript(content)
    .then(e => console.log(` Enviado ☄️, ${e} mensajes enviados 👉🏻💥💃🏻`)).catch(console.error)
