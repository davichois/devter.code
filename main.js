import "./style.css";

const getEl = (selector) => document.querySelector(selector);

const $html = getEl("#html");
const $css = getEl("#css");
const $js = getEl("#js");

$html.addEventListener("input", update);

$css.addEventListener("input", update);

$js.addEventListener("input", update);

function update() {
  const html = createHtml();

  getEl("iframe").setAttribute("srcdoc", html);
}

const createHtml = () => {
  const html = $html.value;
  const css = $css.value;
  const js = $js.value;

  return `
        <!DOCTYPE html>
        <html lang="es">
    
        <head>
            <style>${css}</style>
        </head>

        <body>
            ${html}
            <script>${js}</script>
        </body>

        </html>
    `;
};
