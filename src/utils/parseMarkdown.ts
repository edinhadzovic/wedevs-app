import {marked} from "marked";

const headingClass = (level: number) => {
    switch (level) {
        case 1: return "text-2xl font-bold";
        case 2: return "text-xl font-light";
        case 3: return "text font-bold";
        default: return "";
    }
}

marked.use({
    renderer: {
        
        heading(text: string, level: number) {
            return `<h${level} class='${headingClass(level)}'">${text}</h${level}>`;
        },
        code(code: string, lang: string, escaped: boolean) {
            if (lang) {
                return `<pre class="language-${lang} m-0 p-0"><code class="language-${lang}">${code}</code></pre>`;
            }
            return `<pre class="m-0 p-0 bg-gray-100 px-2 py-3"><code>${code}</code></pre>`;
        },
    }
})

const parseMarkdown = (markdown: string) => marked.parse(markdown);
export default parseMarkdown;