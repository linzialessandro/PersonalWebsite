import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outDir = './src/assets/Dialogues';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const dialogues = [
  {
    name: "Lovelace",
    title: "A Conversation with Ada Lovelace & Charles Babbage",
    content: `Interviewer: Lady Lovelace, Mr. Babbage, it is an honor.
    
Babbage: The pleasure is ours. Though I must say, the sheer computational power of your era would make my Difference Engine look like a mere abacus!

Interviewer: Indeed. The machines we use today owe much to your Analytical Engine. Ada, you were one of the first to realize its true potential.

Lovelace: Yes. Mr. Babbage saw a machine that could calculate numbers flawlessly. I saw something more—a machine that could manipulate any symbol, not just quantities. If one could feed it the rules of harmony, it might compose elaborate and scientific pieces of music of any degree of complexity.

Babbage: I admit, her vision extended beyond my immediate engineering concerns. I was fixated on the brass and the gears, the elimination of human error in navigation tables.

Lovelace: The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves. It is a new, vast, and powerful language for expressing the great facts of the natural world.

Interviewer: You described what we now call software. Did you ever doubt it would be realized?

Lovelace: We only saw the dawn. But we knew that a new, vast, and powerful language was being developed for the future use of analysis, in which to introduce its truths so that these may become of more speedy and accurate practical application for the purposes of mankind.`
  },
  {
    name: "Ramanujan",
    title: "A Conversation with Srinivasa Ramanujan",
    content: `Interviewer: Mr. Ramanujan, your formulas seemed to flow from an entirely different well of understanding. How did they come to you?
    
Ramanujan: An equation for me has no meaning, unless it expresses a thought of God. The goddess Namagiri would write the formulas on my tongue or in my dreams. I would simply wake up and record them.

Interviewer: G.H. Hardy, your collaborator at Cambridge, was famous for his strict rigor. How did the two of you work together, given such different approaches?

Ramanujan: Hardy was the scaffolding, and I was the architecture. I saw the patterns, the infinite series, the way numbers danced together in the void. Hardy demanded proof, the rigorous stepping stones. He often said I was a man of intuition, while he was a man of logic.

Interviewer: Did you find his insistence on proof frustrating?

Ramanujan: Sometimes. When you can see the destination so clearly from the mountaintop, it is tedious to carve a path through the dense forest below. But I understood its necessity for the Western mathematical world. 

Interviewer: Your work on partition functions and mock theta functions is now being used to understand black holes, a concept barely known in your time.

Ramanujan: Truth is eternal. The forms mathematical truths take are merely the garments we dress them in. If they describe the cosmos, it is because mathematics is the language the cosmos itself speaks.`
  },
  {
    name: "Noether",
    title: "A Conversation with Emmy Noether",
    content: `Interviewer: Dr. Noether, your work fundamentally changed both abstract algebra and theoretical physics. Yet, for much of your career, you were unpaid and unrecognized.
    
Noether: Mathematics is not a profession of titles or salaries, though those are nice to have. It is a pursuit of pure structure. When the University of Göttingen refused me an official position because of my gender, Hilbert defended me, saying, "We are a university, not a bathhouse." But the work itself—that was my true home.

Interviewer: Let's talk about Noether's Theorem. It connects symmetry with conservation laws. Did you realize its profound implications for physics?

Noether: My primary interest was always algebraic invariants. When Einstein and Hilbert were struggling with general relativity, they found that energy didn't seem to be conserved in the traditional sense. They asked for my help. 

Interviewer: And you solved it.

Noether: I showed them that every continuous symmetry of the universe has a corresponding conserved quantity. If the laws of physics do not change over time, energy is conserved. If they do not change in space, momentum is conserved. It is a beautiful, unavoidable consequence of mathematical structure.

Interviewer: Einstein called you the most significant creative mathematical genius thus far produced since the higher education of women began.

Noether: Such praise is flattering, but the beauty belongs to the mathematics. I merely uncovered what was already there—the deep, structural harmonies of reality.`
  },
  {
    name: "VonNeumann",
    title: "A Conversation with John von Neumann",
    content: `Interviewer: Professor von Neumann, you made foundational contributions to quantum mechanics, game theory, and the modern computer. Is there a unifying thread?
    
Von Neumann: The thread is logic and structure. Whether you are analyzing the bluffing in poker, the probabilistic nature of a quantum state, or the architecture of a calculating machine, you are dealing with formalized systems of rules.

Interviewer: Your architecture—the von Neumann architecture—is still the basis for almost all computers today. Programs and data stored in the same memory.

Von Neumann: It was a practical necessity. If a machine is to be truly universal, as Turing described, it must be able to modify its own instructions. The distinction between data and program is merely a matter of perspective.

Interviewer: You also worked on the Manhattan Project. Some view your contributions to game theory as a cold, calculating approach to the Cold War.

Von Neumann: Game theory is an abstraction of conflict and cooperation. The Cold War was a dangerous game, yes. Mutually Assured Destruction is a terrifying concept, but mathematically, it represents a stable equilibrium. My goal was always to understand the rational basis of decisions, even in the most irrational of human endeavors.

Interviewer: What do you think of artificial intelligence today?

Von Neumann: We built the first machines to calculate ballistic trajectories. Now, they are simulating human thought. The singularity we once hypothesized—the point where technological growth becomes uncontrollable and irreversible—seems to be approaching. It is both fascinating and perilous.`
  }
];

dialogues.forEach(dialogue => {
  const doc = new PDFDocument({ margin: 50 });
  const filePath = path.join(outDir, `${dialogue.name}.pdf`);
  
  doc.pipe(fs.createWriteStream(filePath));
  
  doc.font('Helvetica-Bold').fontSize(18).text(dialogue.title, { align: 'center' });
  doc.moveDown(2);
  
  doc.font('Helvetica').fontSize(12).text(dialogue.content, {
    align: 'justify',
    lineGap: 5
  });
  
  doc.end();
  console.log(`Created ${filePath}`);
});
