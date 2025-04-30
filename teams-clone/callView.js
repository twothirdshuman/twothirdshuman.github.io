import html from "https://esm.sh/solid-js@1.8.1/html";

function callView() {
    return html`
        <div style="
            text-align: center; 
            position: relative; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
        ">
            Jag gav upp :( 
        </div>
    `;
}

export default callView;