import html from "https://esm.sh/solid-js@1.8.1/html";
import { createSignal } from "https://esm.sh/solid-js@1.8.1";
/**
 * 
 * @param {number} nr 
 * @param {string} weekday 
 */
function Date(nr, weekday) {
    const [getText, setText] = createSignal(`${nr} ${weekday}`);
    
    /**
     * 
     * @param {HTMLDivElement} el 
     */
    const elFunc = (el) => {
        const resizeFunc = () => {
            console.log("ere");
            if (el.clientWidth < 170) {
                setText(`${nr}`);
            } else {
                setText(`${nr} ${weekday}`);
            }
        };
        resizeFunc();
        window.addEventListener("resize", resizeFunc);
    };

    return html`
        <div class="calendar-date" ref=${elFunc}>${getText}</div>
    `;
}

function calendarView() {
    return html`
        <div class="calendar-main">
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                <div>
                    <div style="
                        background-color: var(--mainBlue);
                        color: white;
                        height: 36px;
                        width: 36px;
                        border-radius: 6px;
                        display: inline-block;
                        margin: 12px;
                    ">
                        <div style="
                            position: relative;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 24px; height: 24px;
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"/></svg>
                        </div>
                    </div>
                    <span style="font-weight: 700; color: white;">Kalender</span>
                </div>

                <div class="calendar-top-bar-right">
                    <div>
                        <i>#</i> &nbsp; Anslut med ID 
                    </div>
                    <div>
                        <span style="position: relative; bottom: 3px;">📷</span> &nbsp; Möte nu
                    </div>
                    <div style="background-color: var(--mainBlue);">
                        <span style="font-size: 200%; position: relative; bottom: 3px;">+</span> &nbsp; <span style="position: relative; bottom: 8px; right: 6px;">Nytt möte</span>
                    </div>
                </div>
            </div>
            <div style="width: 100%; border-top: 1px solid black;"></div>
            <div style="margin-top: 6px;">
                <div class="day-text-calendar">
                    <span style="font-size: 150%; font-weight: 500;">Idag</span>
                    <span>&lt;</span>
                    <span>&gt;</span>
                    <b style="font-weight: 700; color: white;">April 2025</b>
                    <span style="transform: rotate(180deg); display: inline-block; margin: 0;">^</span>
                

                    <span style="
                        float: right;
                        font-size: 150%;
                        font-weight: 500;
                        margin-right: 30px;
                    " class="calendar-workweek-span">Arbetsveckan</span>
                </div>
            </div>
            <div style="width: 100%; border-top: 1px solid black;"></div>
            <div class="calendar-grid">
            
                <div></div>
                ${Date(21, "Måndag")}
                ${Date(22, "Tisdag")}
                ${Date(23, "Onsdag")}
                ${Date(24, "Torsdag")}
                ${Date(25, "Fredag")}
                            
                <div>07:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                            
                <div>08:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                                    
                <div>09:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                                    
                <div>10:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                                    
                <div>11:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                                    
                <div>12:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                                    
                <div>13:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                                    
                <div>14:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                                                      
                <div>15:00</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>  
            </div>
        </div>
    `;
}

export default calendarView;