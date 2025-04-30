import html from "https://esm.sh/solid-js@1.8.1/html";

/**
 * 
 * @param {string} who 
 * @param {string} what 
 * @param {string} when 
 * @param {string} subheading 
 * @param {string} where 
 * @returns 
 */
function Notification(who, what, when, subheading, where) {
    return html`
        <div style="margin: 12px;">
            <span style="display: block; float: right;">${when}</span>
            <span style="color: white; display: block;">${who} Nämnde ${what}</span>
            <span style="display: block;">${subheading}</span>
            <span style="display: block;">${where}</span>
        </div>
    `;
}

function ActivityView() {
    const notifications = [
        Notification("Fredrik Elemalm", "NAKNAK02", "04-28", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("awawawawawa", ":3 class", "04-26", ">.< :3 :3c xD :D", ":3 class > Allmänt"),
        Notification("Aaa Aason", "AAAAAA", "04-22", "provet om AAAAAAAAAAAA", "AAAAAA > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt"),
        Notification("Fredrik Elemalm", "NAKNAK02", "04-20", "provet om människokroppen", "NAKNAK02 > Allmänt")
    ];

    return html`
        <div class="activity-view-main">
            <div style="padding: 10px;"> 
                <h2 style="width: 1px; display: inline-block; color: white;">Aktivitet</h2>
                <div style="float: right; font-size: 150%;">
                    <span style="margin-right: 16px; position: relative; bottom: 5px;">...</span>
                    <span>🔍</span>
                </div>
            </div>

            <div> 
                <h4 style="margin: 0;">Rubrik, men jag orka inte</h4>
                <span>idk, subheading</span>
            </div>

            <div style="height: 100%; overflow-y: auto;"> 
                ${notifications}
            </div>

            <div> 
                <div style="
                    position: relative; 
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                ">
                    Här hade du sett en chatt om jag hade orkat implementera en chatt   
                </div>
            </div>
        </div>
    `;
}

export default ActivityView;