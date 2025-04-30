import html from "https://esm.sh/solid-js@1.8.1/html";

/**
 * 
 * @param {string} name 
 */
function TeamButton(name) {
    let logoText = name.split(" ")[0][0];
    if (typeof name.split(" ")[1] === "string") {
        logoText = logoText + name.split(" ")[1][0]
    }

    const color = `hsl(${Math.floor(Math.random() * 360)}deg 80% 40%)`;

    const buttonLogoStyle = `
        width: 72px;
        height: 72px;
        background-color: ${color};
        border-radius: 6px;
        flex-shrink: 0;
    `;

    return html`
        <div style="
            display: flex;
            flex-direction: column;
            background-color: var(--panel);
            width: 250px;
            border-radius: 6px;
        ">
            <div style="
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 6px;
            ">
                <div style="
                    display: flex;
                ">
                    <div class="team-button-logo" style=${buttonLogoStyle}>
                        <span style="
                            user-select: none;
                            text-align: center;
                            vertical-align: middle;
                            color: white;
                            font-size: 250%;
                            width: 100%;
                            margin-top: 6px;
                            display: inline-block;
                        ">${logoText}</span>
                    </div>
                    <div style="
                        text-align: center;
                        height: 72px;
                        margin-left: 12px;
                    ">
                        <span style="
                            color: white;
                            vertical-align: middle;
                            display: inline-block;
                            position: relative;
                            top: 50%;
                            transform: translate(0, -50%);
                        ">${name}</span>
                    </div>
                </div>
                <div>
                    <span style="
                        user-select: none;
                        position: relative;
                        top: 15%;
                        margin: 8px;
                        font-size: 40px;
                        color: white;
                    ">...</span>
                </div>
            </div>
            <div style="
                display: flex;
                flex-direction: row;
                margin: 6px;
            ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.942 19q-.728 0-1.22-.462q-.491-.463-.491-1.153V8.846L3.106 6.323Q3 6.193 2.96 6.068q-.04-.124-.04-.26q0-.304.217-.556T3.727 5h15.562q.728 0 1.22.463q.491.462.491 1.153v10.769q0 .69-.491 1.153q-.492.462-1.22.462zM4.146 6l2.085 2.462v8.923q0 .23.221.423t.49.192H19.29q.269 0 .49-.192t.221-.423V6.615q0-.23-.221-.423T19.289 6zm7.404 8.192h4.816q.213 0 .356-.143q.144-.143.144-.357t-.144-.356t-.357-.144h-5.96q-.366 0-.494.324q-.128.325.135.569l2.196 2.08q.14.14.344.14q.205 0 .345-.14q.16-.16.16-.373t-.16-.353zm2.9-4.384H9.616q-.214 0-.357.143t-.143.357t.143.357t.357.143h5.959q.367 0 .495-.324t-.135-.568l-2.177-2.081q-.14-.14-.344-.14t-.345.14q-.16.16-.16.373t.16.354zM12.073 12"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-1.4.85-2.45T7 4.15V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4T20 8v12q0 .825-.587 1.413T18 22zm8.5-6h2v-4h-9v2h7z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.05 17.775q-.5-.275-.775-.737T5 16v-4.8L2.6 9.875q-.275-.15-.4-.375T2.075 9t.125-.5t.4-.375l8.45-4.6q.225-.125.463-.188T12 3.275t.488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17t-.712-.288T21 16v-5.9l-2 1.1V16q0 .575-.275 1.038t-.775.737l-5 2.7q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188zM12 12.7L18.85 9L12 5.3L5.15 9zm0 6.025l5-2.7V12.25l-4.025 2.225q-.225.125-.475.188t-.5.062t-.5-.062t-.475-.188L7 12.25v3.775zm0-3"/></svg>
            </div>
        </div>
    `
}

function TeamView() {

    const classes = ["Scientolgy class", "Fairy n' studies", "Pipebombing", "hyperencabulator", 
        "post-apoctalyptic survival", "Your mom", ":3 class", "professional reel scrolling", 
        "tiktok-inator class", "Mentor class", "avacodo scanning", "computer charger class"].map((s) => TeamButton(s));

    const teams = ["Apeture Science", "Lockheed Martin"].map((s) => TeamButton(s));
    return html`
        <div style="
            background-color: var(--main-bg);
            width: 100%;
        ">
            <h2 style="margin: 12px;">Klasser</h2>
                <div style="
                    display: flex;
                    flex-direction: row;
                    gap: 6px;
                    flex-wrap: wrap;
                    margin: 16px;
                "> 
                    ${classes}
                </div>
            <h2 style="margin: 12px;">Team</h2>
                <div style="
                    display: flex;
                    flex-direction: row;
                    gap: 6px;
                    flex-wrap: wrap;
                    margin: 16px;
                "> 
                    ${teams}
                </div>
        </div>
    `;
}

export default TeamView;