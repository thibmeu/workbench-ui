import shajs from 'sha.js';

export default function ScriptElement(props) {
    handleScriptContent(props.content);
    handleScriptSrc(props.element.src);
    return (null);
}

function getElementByHash(value) {
    const scriptContentHash = shajs('sha256').update(value).digest('hex');
    const doesAlreadyExist = document.getElementById(scriptContentHash);
    return {hash: scriptContentHash, exists: doesAlreadyExist}
}

function handleScriptContent(content) {
    if (content) {
        content.forEach((itm) => {
            if (itm !== "") {
                const element = getElementByHash(itm);
                if (!element.exists) {
                    const script = document.createElement("script");
                    script.id = element.hash;
                    script.innerHTML = itm;
                    document.body.appendChild(script);
                }
            }
        });
    }
}

function handleScriptSrc(src) {
    if (src) {
        const element = getElementByHash(src);
        if (!element.exists) {
            const script = document.createElement("script");
            script.id = element.hash;
            script.src = src;
            document.body.appendChild(script);
        }
    }
}