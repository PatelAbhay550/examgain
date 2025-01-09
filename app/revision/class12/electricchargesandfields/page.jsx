import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export const metadata = {
  title: "Electric Charges and Fields Notes Class 12 CBSE",
  description:
    "Prepare for the Class 12 CBSE Board Exams with well-structured, concise, and high-quality notes in PDF and image formats on Electric Charges and Fields. Download now!",
  keywords:
    "Electric Charges cbse class 12 notes, Electric Fields class 12 pdf, Class 12 pdf notes, Physics class 12 notes, CBSE class 12 physics tags, Notes, Chapter 1 Electriccharges and fields",
  openGraph: {
    title: "Electric Charges and Fields Notes Class 12 CBSE",
    description:
      "Prepare for the Class 12 CBSE Board Exams with well-structured, concise, and high-quality notes in PDF and image formats on Electric Charges and Fields. Download now!",
    url: "https://examgain.vercel.app/revision/class12/electricchargesandfields",
    type: "article",
  },
};
const markdown = `

## Electric Charges and Fields Notes Class 12 CBSE
Are you preparing for the  **Class 12 CBSE Board Exams**? 
The chapter on **Electric Charges and Fields** is fundamental, as it forms the basis for many advanced topics in physics. To help you excel, we've compiled well-structured, concise, and high-quality notes in **PDF and image formats**.
## Image Format![](https://firebasestorage.googleapis.com/v0/b/newz-60631.appspot.com/o/cvibq_image.png?alt=media&token=621d1cfe-4e03-4a27-8bd6-aef51ae57564)![](https://firebasestorage.googleapis.com/v0/b/newz-60631.appspot.com/o/wmg3u_image.png?alt=media&token=8a86ce75-5a20-4177-8749-f2c9e45cb745)
## PDF Download
[Click to Download Pdf](https://www.dropbox.com/scl/fi/2itihys35m0tzacyw2uoj/ec1.pdf?rlkey=8pel03mvur4aqqrzproehacd9&st=55558k9l&dl=0)

### Why Are These Notes Crucial for Your Success?
- **CBSE Exam-Focused**: The content is aligned with the CBSE syllabus and exam pattern, ensuring you're prepared for every key topic.
- - **Clarity and Simplicity**: Complex concepts are broken down into simple explanations, making them easy to understand and remember.
- - **High-Quality Visuals**: Included diagrams and solved examples enhance your grasp of concepts like Coulomb's Law, Electric Field, Electric Flux, and Gauss's Law.
### What Do These Notes Cover?
Our notes comprehensively cover the following topics in **Electric Charges and Fields**:
1. **Basic Concepts of Electric Charge**: Properties, types, and quantization.

2.  **Coulomb’s Law**: Force between two charges and its applications.

3. **Electric Field and Electric Lines of Force**: Field due to point charges and dipoles.

4. **Gauss's Law**: Applications for symmetrical charge distributions.

5. **Electric Flux**: Concept and significance in physics.

6. **Dipole in a Uniform Electric Field**: Torque and potential energy.

### Features of the Notes- 
**Concise and Exam-Oriented**: Saves time while covering all important points.- **PDF and Image Formats**: Downloadable and accessible for offline study.- **Illustrative Diagrams**: Improve conceptual understanding and retention.- **Solved Numerical Problems**: Practice questions with step-by-step solutions for better clarity.
### How to Use These Notes?
1. **Start with the Basics**: Go through each topic in order to build a strong foundation.
2. **Revise Important Concepts**: Focus on definitions, formulas, and key points for quick recall.
3. **Practice Numericals**: Use solved examples to enhance your problem-solving skills.
4. **Download and Save**: Keep the PDF and images handy for on-the-go revision.
`;

// Initialize Firebase once

const Page = async () => {
  const tagsall = {
    tags: [
      "Electric Charges cbse class 12 notes",
      "Electric Fields class 12 pdf",
      "Class 12 pdf notes",
      "Physics class 12 notes",
      "CBSE class 12 physics tags",
      "Notes",
      "Chapter 1 Electriccharges and fields",
    ],
  };
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Electric Charges and Fields Notes Class 12 CBSE",
    description:
      "Prepare for the Class 12 CBSE Board Exams with well-structured, concise, and high-quality notes in PDF and image formats on Electric Charges and Fields. Download now!",
    datePublished: "2025-01-02",
    dateModified: "2025-01-02",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://examgain.vercel.app/revision/class12/electricchargesandfields",
    },
  };
  return (
    <div className="min-h-screen mt-20 bg-gray-50 text-gray-800">
      {/* Header Section */}
      <script type="application/ld+json">{JSON.stringify(jsonld)}</script>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Electric Charges and Fields Class 12 Notes Chapter 1
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

export default Page;
