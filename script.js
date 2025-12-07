function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


function toggleChapter() {
  const subject = document.getElementById("subject").value;
  const chapterContainer = document.getElementById("chapterContainer");
  const chapterSelect = document.getElementById("chapter");

  // Clear previous options
  chapterSelect.innerHTML = "";

  if (subject === "Physics") {
    chapterContainer.style.display = "block";
    chapterSelect.innerHTML += '<option value="Magnetism">Magnetism</option>';
    chapterSelect.innerHTML += '<option value="Light">Light</option>';
  } else if (subject === "Chemistry") {
    chapterContainer.style.display = "block";
    chapterSelect.innerHTML += '<option value="MetalsAndNonMetals">Metals and Non-Metals</option>';
    chapterSelect.innerHTML += '<option value="ChemicalReactions">Chemical Reactions and Equations</option>';
    chapterSelect.innerHTML += '<option value="AcidsBasesSalts">Acids, Bases and Salts</option>';
    chapterSelect.innerHTML += '<option value="CarbonCompounds">Carbon and Its Compounds</option>';
  } else if (subject === "Maths") {
    chapterContainer.style.display = "block";
    chapterSelect.innerHTML += '<option value="Algebra">Algebra</option>';
    chapterSelect.innerHTML += '<option value="Geometry">Geometry</option>';
    chapterSelect.innerHTML += '<option value="Trigonometry">Trigonometry</option>';
    chapterSelect.innerHTML += '<option value="StatisticsProbability">Statistics and Probability</option>';
  } else {
    chapterContainer.style.display = "none";
  }
}
function generatePaper() {
  const subject = document.getElementById("subject").value;
  const mcqCount = parseInt(document.getElementById("mcqCount").value);
  const shortCount = parseInt(document.getElementById("shortCount").value);
  const nameCount = parseInt(document.getElementById("nameCount").value);
  const longCount = parseInt(document.getElementById("longCount").value);

  let q;
  if (subject === "Physics") {
    const chapter = document.getElementById("chapter").value;
    q = questionBank.Physics[chapter];
  } else if (subject === "Chemistry") {
    const chapter = document.getElementById("chapter").value;
    q = questionBank.Chemistry[chapter];
  } else if (subject === "Maths") {
    const chapter = document.getElementById("chapter").value;
    q = questionBank.Maths[chapter];
  } else {
    q = null;
  }

  if (!q) {
    document.getElementById("paper").textContent = "Please select a subject and chapter.";
    return;
  }

  let paper = "==============================\n";
  paper += "        CLASS 10 QUESTION PAPER\n";
  paper += "Subject: " + subject + "\n";
  paper += "Chapter: " + document.getElementById("chapter").value + "\n";
  paper += "==============================\n\n";

  if (mcqCount > 0) {
    paper += "Section A: Multiple Choice Questions (1 mark each)\n";
    const mcqs = shuffleArray(q.MCQ).slice(0, mcqCount);
    mcqs.forEach((question, i) => {
      paper += (i+1) + ". " + question + "\n";
    });
    paper += "\n";
  }

  if (shortCount > 0) {
    paper += "Section B: Short Answer Questions (2 marks each)\n";
    const shorts = shuffleArray(q.Short).slice(0, shortCount);
    shorts.forEach((question, i) => {
      paper += (i+1) + ". " + question + "\n";
    });
    paper += "\n";
  }

  if (nameCount > 0) {
    paper += "Section C: Name the Following (1 mark each)\n";
    const names = shuffleArray(q.Name).slice(0, nameCount);
    names.forEach((question, i) => {
      paper += (i+1) + ". " + question + "\n";
    });
    paper += "\n";
  }

  if (longCount > 0) {
    paper += "Section D: Long Answer Questions (5 marks each)\n";
    const longs = shuffleArray(q.Long).slice(0, longCount);
    longs.forEach((question, i) => {
      paper += (i+1) + ". " + question + "\n";
    });
    paper += "\n";
  }

  paper += "==============================\nEND OF PAPER\n==============================";
  document.getElementById("paper").textContent = paper;
}

