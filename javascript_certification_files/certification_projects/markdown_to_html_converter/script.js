const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

function convertMarkdown() {
  const text = markdownInput.value;
  let html = text;

  // Headings
  html = html.replace(/^\s*### (.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^\s*## (.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^\s*# (.*)$/gm, "<h1>$1</h1>");

  // Blockquotes
  html = html.replace(/^\s*> (.*)$/gm, "<blockquote>$1</blockquote>");

  // Images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

   // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/_(.*?)_/g, "<em>$1</em>");

  return html;
}

markdownInput.addEventListener("input", () => {
  const converted = convertMarkdown();
  htmlOutput.textContent = converted;
  htmlPreview.innerHTML = converted;
});