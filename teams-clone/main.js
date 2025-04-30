import { createSignal, batch, For, createEffect, createMemo } from "https://esm.sh/solid-js@1.8.1";
import { createStore } from "https://esm.sh/solid-js@1.8.1/store"
import { render } from "https://esm.sh/solid-js@1.8.1/web";
import html from "https://esm.sh/solid-js@1.8.1/html";
import TeamView from "./teamView.js";
import calendarView from "./calendarView.js";
import assignmentsView from "./assignmentsView.js";
import ActivityView from "./activityView.js";
import callView from "./callView.js";
import ChatView from "./chatView.js";
// import { createMemo } from "https://esm.sh/v135/solid-js@1.8.1/types/reactive/signal.d.ts";
// import { createEffect } from "https://esm.sh/v135/solid-js@1.8.1/types/reactive/signal.d.ts";

const [getViewName, setViewName] = createSignal(undefined);
const getView = createMemo(() => {
    const descriptions = ["Team","Kalender","Uppgifter","Aktivitet","Samtal","Chatt"];
    const views = [TeamView, calendarView, assignmentsView, ActivityView, callView, ChatView];

    for (let i = 0; i < descriptions.length; i++) {
        // console.log(descriptions[i], description);
        if (descriptions[i] != getViewName()) {
            continue;
        }
        return views[i];
    }
    return DeafultView;
});
// const [getView, setView] = createSignal(DeafultView);

/**
 * 
 * @param {string} description 
 */
function setViewByDescription(description) {
    setViewName(description);
}

function DeafultView() {
    return html`
    <div class="viewParent">
        <h1 style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        ">Please select something in the left column</h1>
    </div>
    `;
}

const [getScreenWidth, setScreenWidth] = createSignal(document.body.clientWidth);

window.addEventListener("resize", () => {
    setScreenWidth(document.body.clientWidth);
}); 

/**
 * 
 * @param {string} imageSrc 
 * @param {string} description 
 */
const SelectorButton = (imageSrc, description) => {
    const [svg, setSvg] = createSignal("");
    
    fetch(imageSrc).then(r => r.text()).then(svgSrc => {
        setSvg(svgSrc);
    });

    /**
     * 
     * @param {HTMLDivElement} el 
     */
    const svgParent = (el) => {
        createEffect(() => {
            el.innerHTML = svg();
        });
    };

    /**
     * @type {HTMLDivElement | undefined}
     */
    let element = undefined;

    createEffect(() => {
        // console.log("ere", getViewName(), description, getViewName() === description, element);
        if (getViewName() === description) {
            element.setAttribute("style", "background: linear-gradient(to left, #000, #000 95%, var(--mainBlue) 95%);");
            if (getScreenWidth() <= 800) {
                element.setAttribute("style", "background: linear-gradient(to bottom, #000, #000 95%, var(--mainBlue) 95%);");
    
            }
        } else {
            element.setAttribute("style", "");
        }
    });

    return () => {
        return html `
            <div class="navButton" ref=${/** @param {HTMLDivElement} el */(el) => {
                element = el;
                el.addEventListener("mousedown", () => {
                    setViewByDescription(description);
                });
            }}>
                <div class="svgParent" ref=${svgParent}></div>
                <div>
                    <span class="navName" style="user-select: none;">${description}</span>
                </div>
            </div>
        `;
    }
}

const MainSelector = () => {
    const buttons = [
        SelectorButton("team.svg", "Team"),
        SelectorButton("calendar.svg", "Kalender"),
        SelectorButton("backpack.svg", "Uppgifter"),
        SelectorButton("bell.svg", "Aktivitet"),
        SelectorButton("phone.svg", "Samtal"),
        SelectorButton("chat.svg", "Chatt")
    ];

    return html`
        <nav class="mainNav">
            <${For} each=${buttons}>
                ${(s) => s}
            <//>
        </nav>
    `;
};

const App = () => {
    return html`
        <div class="mainRoot">
            ${MainSelector}
            <div style="
                /*height: 100vh;*/
                overflow: auto;
            " class="viewParent">
                ${getView}
            </div>
        </div>
    `;
}
const root = document.getElementById("SolidJsRoot");
if (root === null) {
    alert("root is null");
}
render(App, root);