import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const srcDir = "./src/data/dialogues";
const outDir = "./src/assets/Dialogues";

if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Beautiful XeLaTeX Template for Dialogues
const generateLatex = (title, content) => {
  // Format content for LaTeX:
  // Replace "Speaker: text" with "\textbf{Speaker:} text"
  let formattedContent = content
    .split("\n")
    .map((line) => {
      // Bold speaker names
      const match = line.match(/^([A-Za-z\s\.]+):\s(.*)/);
      if (match) {
        return `\\textbf{${match[1]}:} ${match[2]}`;
      }
      return line;
    })
    .join("\n\n"); // Add extra newlines for paragraph breaks

  // Escape some common LaTeX special characters in the text if any exist (like &)
  // Our current dialogues have '&' in the title, which needs escaping
  const escapeLatex = (text) => text.replace(/&/g, "\\&").replace(/—/g, "---");

  const safeTitle = escapeLatex(title);
  formattedContent = escapeLatex(formattedContent);

  return `\\documentclass[11pt,a4paper]{article}
\\usepackage{fontspec}
\\setmainfont{Palatino} % Classic, elegant serif font
\\usepackage{geometry}
\\geometry{
  a4paper,
  left=35mm,
  right=35mm,
  top=40mm,
  bottom=40mm,
}
\\usepackage{microtype}
\\usepackage{parskip}
\\usepackage{titlesec}
\\usepackage{xcolor}
\\usepackage{fancyhdr}

\\definecolor{darkgray}{RGB}{40, 40, 40}
\\definecolor{accent}{RGB}{44, 62, 80}

\\titleformat{\\section}[block]{\\Large\\bfseries\\color{accent}\\filcenter}{}{0pt}{}

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\cfoot{\\color{gray}\\thepage}

\\begin{document}

\\vspace*{2em}
\\section*{${safeTitle}}
\\vspace{2em}

\\color{darkgray}
\\setlength{\\parskip}{1.2em}
\\linespread{1.15}\\selectfont

${formattedContent}

\\end{document}
`;
};

console.log("Starting dialogue PDF generation via XeLaTeX...");

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const filePath = path.join(srcDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const texContent = generateLatex(data.title, data.content);
  const texFilePath = path.join(outDir, `${data.name}.tex`);

  fs.writeFileSync(texFilePath, texContent);

  console.log(`Compiling ${data.name}...`);
  try {
    // Run xelatex twice for any potential references (though none exist here, it's good practice, but once is enough for this simple template)
    execSync(
      `xelatex -interaction=nonstopmode -output-directory="${outDir}" "${texFilePath}"`,
      { stdio: "pipe" }
    );
    console.log(`\\tSuccessfully generated ${data.name}.pdf`);
  } catch (error) {
    console.error(`\\tFailed to compile ${data.name}.tex`);
    console.error(error.stdout ? error.stdout.toString() : error.message);
  }

  // Cleanup auxiliary files
  const base = path.join(outDir, data.name);
  [".tex", ".aux", ".log"].forEach((ext) => {
    if (fs.existsSync(base + ext)) {
      try {
        fs.unlinkSync(base + ext);
      } catch (e) {
        // ignore cleanup errors
      }
    }
  });
}

console.log("All dialogues processed!");
