import html from "https://esm.sh/solid-js@1.8.1/html";

function assignmentsView() {
    return html`
        <div style="display: flex; flex-direction: column;">
            <div class="assignment-sort children-margin children-white">
                <div style="font-weight: 600; border-bottom: 1px solid var(--mainBlue);">
                    Kommande
                </div>

                <div>
                    Förfallodagen har passerat
                </div>

                <div>
                    Slutförd
                </div>
            </div>
            <div style="width: 100%; border-top: 1px solid black;"></div>
            <div style="margin: 24px;">
                <span style="margin: 12px;"><b>29 maj</b> torsdag</span>
                <div class="single-assignment">
                    <h4>Träningsdagbok</h4>
                    <span>förfaller 23:59</span>
                    <span>IDRIDR01TE2B IDRIDR01</span>
                </div>
                <span style="margin: 12px;"><b>5 juni</b> torsdag</span>
                <div class="single-assignment">
                    <h4>Kap  7 Kroppen i funktion - Del 3 & 4</h4>
                    <span>förfaller 23:59</span>
                    <span>NAKNAK02IND2-2 NAKNAK02</span>
                </div>
            </div>
        </div>
    `;
}

export default assignmentsView;
