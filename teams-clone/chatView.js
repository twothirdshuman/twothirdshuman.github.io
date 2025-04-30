import html from "https://esm.sh/solid-js@1.8.1/html";

/**
 * 
 * @param {string} who 
 * @param {string} when 
 * @param {string} subheading  
 * @returns 
 */
function Chat(who, when, subheading) {
    return html`
        <div style="margin: 12px;">
            <span style="display: block; float: right;">${when}</span>
            <span style="color: white; display: block;">${who}</span>
            <span style="display: block;">${subheading}</span>
        </div>
    `;
}

function ChatView() {
    const chats = [
        Chat("Someone", "08:19", "Glöm inte skoluppgiften!"),    
        Chat("username :D", "08:20", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:21", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:22", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:23", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:24", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:25", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:26", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:27", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:29", ":3 :3 :3 :3 :3 :3"),    
        Chat("evil username D:", "08:30", ":3c :3c :3c :3c :3c :3c"),
        Chat("username :D", "08:31", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:32", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:33", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:34", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:35", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:36", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:37", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:38", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:39", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:40", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:41", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:42", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:43", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:44", ":3 :3 :3 :3 :3 :3"),    
        Chat("username :D", "08:45", ":3 :3 :3 :3 :3 :3")
    ];

    return html`
        <div class="activity-view-main">
            <div style="padding: 10px;"> 
                <h2 style="width: 1px; display: inline-block; color: white;">Chatt</h2>
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
                ${chats}
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

export default ChatView;