import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export const metadata = {
  title: "Amines Class 12 Notes Free Download PDF",
  description:
    "Free Amines notes for Class 12 CBSE Board Exams. Download PDFformat. Prepare for your exams with ExamGains!",
  keywords:
    "Amines class 12 notes, Amines class 12 pdf, Amines class 12  , Amines class 12 notes pdf, Amines class 12 notes  , Amines class 12 notes free download",
  openGraph: {
    title: "Amines Class 12 Notes Free Download PDF and  ",
    description:
      "Free Amines notes for Class 12 CBSE Board Exams. Download PDF format. Prepare for your exams with ExamGains!",
    url: "https://examgain.vercel.app/revision/class12/aminesnotes",
    type: "article",
  },
};
const markdown = `

## Amines Class 12 Notes Free Download PDF
Are you preparing for the  **Class 12 CBSE Board Exams**? 
The chapter on **Amines** is fundamental, as it forms the basis for many advanced topics in chemistry. To help you excel, we've compiled well-structured, concise, and high-quality notes in **PDF format**.
## PDF Download
[Click to Download Pdf](https://www.dropbox.com/scl/fi/uq96hylb2fyx9ps15jitm/amines.pdf?rlkey=jxslpbr13yh6i4v31kx651ufv&st=h1dentv4&dl=0)

### Why Are These Notes Crucial for Your Success?
- **CBSE Exam-Focused**: The content is aligned with the CBSE syllabus and exam pattern, ensuring you're prepared for every key topic.
- - **Clarity and Simplicity**: Complex concepts are broken down into simple explanations, making them easy to understand and remember.
- - **High-Quality Visuals**: Included diagrams and solved examples enhance your grasp of concepts like basic concepts, chemical reactions, physical properties, classification, and preparation of amines.
### What Do These Notes Cover?
Our notes comprehensively cover the following topics in **Amines**:
1. **Basic Concepts of Amines**: Prepration, properties, and nomenclature.
2. **Chemical Reactions of Amines**: Alkylation, acylation, and carbylamine reactions.
3. **Physical Properties of Amines**: Boiling point, solubility, and basicity.
4. **Classification of Amines**: Primary, secondary, and tertiary amines.
5. **Preparation of Amines**: Hoffmann bromamide reaction, reduction of nitro compounds, and Gabriel phthalimide synthesis.

### Features of the Notes- 
**Concise and Exam-Oriented**: Saves time while covering all important points.
- **PDF Formatt**: Downloadable and accessible for offline study.
- **Illustrative Diagrams**: Improve conceptual understanding and retention.
- **Solved Numerical Problems**: Practice questions with step-by-step solutions for better clarity.
### How to Use These Notes?
1. **Start with the Basics**: Go through each topic in order to build a strong foundation.
2. **Revise Important Concepts**: Focus on definitions, formulas, and key points for quick recall.
3. **Practice Numericals**: Use solved examples to enhance your problem-solving skills.
4. **Download and Save**: Keep the PDF and handy for on-the-go revision.
`;

// Initialize Firebase once

const AminesNotes = async () => {
  const tagsall = {
    tags: [
      "Amines class 12 notes",
      "Amines class 12 pdf",
      "Amines class 12  ",
      "Amines class 12 notes pdf",
      "Amines class 12 notes  ",
      "Amines class 12 notes free download",
    ],
  };
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Amines Class 12 Notes Free Download PDF",
    description:
      "Free Amines notes for Class 12 CBSE Board Exams. Download PDF  format. Prepare for your exams with ExamGains!",
    datePublished: "2025-01-02",
    dateModified: "2025-01-02",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://examgain.vercel.app/revision/class12/aminesnotes",
    },
  };
  return (
    <div className="min-h-screen mt-20 bg-gray-50 text-gray-800">
      {/* Header Section */}
      <script type="application/ld+json">{JSON.stringify(jsonld)}</script>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Amines Class 12 Notes Free Download PDF
        </h1>

        <p className="text-green-600 font-medium mb-2">✔ Reviewed</p>

        <p className="text-sm text-gray-500 mb-6">Published on: 2/1/2025</p>

        {/* Render Content */}
        <div className="prose max-w-none">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>

        {/* Tags Section */}
        {tagsall && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Tags:</h2>
            <ul className="flex flex-wrap gap-2">
              {tagsall.tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AminesNotes;
