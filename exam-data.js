// Question bank for all subjects.
// Each question: q (text), options (A-D), answer (correct letter)
window.EXAM_DATA = {

  maths: {
    name: "Mathematics",
    duration: 900,
    questions: [
      { q: "What is the derivative of f(x) = x<sup>x</sup> for x &gt; 0?", options: { A: "x<sup>x</sup>", B: "x<sup>x</sup>(ln x + 1)", C: "x &middot; x<sup>(x-1)</sup>", D: "x<sup>x</sup> ln x" }, answer: "B" },
      { q: "If the roots of x<sup>3</sup> - 6x<sup>2</sup> + 11x - 6 = 0 are &alpha;, &beta;, &gamma;, what is &alpha;&sup2; + &beta;&sup2; + &gamma;&sup2;?", options: { A: "11", B: "14", C: "36", D: "22" }, answer: "B" },
      { q: "Evaluate lim<sub>x&rarr;0</sub> (sin3x - 3sinx) / x&sup3;.", options: { A: "-4", B: "-1", C: "0", D: "4" }, answer: "A" },
      { q: "What is the modulus of the complex number z = (3 - 4i) / (1 + 2i)?", options: { A: "&radic;5", B: "5", C: "25", D: "&radic;3" }, answer: "A" },
      { q: "The coefficient of x<sup>5</sup> in the binomial expansion of (2x&sup2; - 1/x)<sup>7</sup> is:", options: { A: "-280", B: "280", C: "-560", D: "560" }, answer: "C" },
      { q: "What is the sum to infinity of the series 1 + 2/3 + 3/9 + 4/27 + ...?", options: { A: "9/4", B: "3/2", C: "27/8", D: "4/3" }, answer: "A" },
      { q: "Find the area bounded by the curve y = x&sup2; and the line y = 4.", options: { A: "16/3", B: "32/3", C: "8/3", D: "8" }, answer: "B" },
      { q: "What is the eccentricity of the ellipse 9x&sup2; + 16y&sup2; = 144?", options: { A: "3/4", B: "&radic;7 / 4", C: "4/5", D: "&radic;5 / 4" }, answer: "B" },
      { q: "The number of ways to arrange the word \"PARALLEL\" is:", options: { A: "40320", B: "10080", C: "5040", D: "20160" }, answer: "C" },
      { q: "If y = e<sup>2x</sup> sin(3x), what is dy/dx at x = 0?", options: { A: "2", B: "3", C: "0", D: "5" }, answer: "B" },
      { q: "What is the value of i<sup>2026</sup> where i = &radic;-1?", options: { A: "1", B: "-1", C: "i", D: "-i" }, answer: "B" },
      { q: "The system of equations kx + y = 1 and x + ky = 1 has infinitely many solutions if k equals:", options: { A: "-1", B: "1", C: "2", D: "0" }, answer: "B" },
      { q: "If a &middot; b = |a||b|, the angle between a and b is:", options: { A: "0&deg;", B: "45&deg;", C: "90&deg;", D: "60&deg;" }, answer: "A" },
      { q: "If f(x) = x<sup>5</sup> + 5x, find the value of f<sup>-1</sup>(6).", options: { A: "1", B: "2", C: "0", D: "6" }, answer: "A" },
      { q: "The variance of the first n natural numbers is given by:", options: { A: "(n&sup2;-1)/12", B: "(n&sup2;-1)/6", C: "n(n+1)/2", D: "n&sup2;/4" }, answer: "A" },
      { q: "What is the rank of a 3 &times; 3 identity matrix?", options: { A: "0", B: "1", C: "2", D: "3" }, answer: "D" },
      { q: "The maximum value of f(x) = x&sup3; - 3x in [-2, 2] is:", options: { A: "2", B: "-2", C: "5", D: "9" }, answer: "D" },
      { q: "The radius of the circle x&sup2; + y&sup2; - 4x + 6y - 12 = 0 is:", options: { A: "4", B: "5", C: "6", D: "&radic;12" }, answer: "B" },
      { q: "What is the sum of the infinite geometric series 3 + 1 + 1/3 + 1/9 + ...?", options: { A: "4", B: "4.5", C: "5", D: "6" }, answer: "B" },
      { q: "If A and B are independent events with P(A) = 0.4 and P(A &cup; B) = 0.7, find P(B).", options: { A: "0.3", B: "0.5", C: "0.6", D: "0.58" }, answer: "B" }
    ]
  },

  english: {
    name: "English Language",
    duration: 900,
    questions: [
      { q: "Identify the word with the correct spelling:", options: { A: "Accomodate", B: "Accommodate", C: "Acomodate", D: "Acommodate" }, answer: "B" },
      { q: "Choose the option that best completes the sentence: \"Hardly had he entered the room ___ the phone rang.\"", options: { A: "than", B: "then", C: "when", D: "after" }, answer: "C" },
      { q: "What is the meaning of the idiom \"to throw the baby out with the bathwater\"?", options: { A: "To discard something valuable while eliminating unwanted elements", B: "To clean up a messy situation carelessly", C: "To cry over spilled milk", D: "To act prematurely" }, answer: "A" },
      { q: "Identify the grammatical function of \"Running quickly\" in: \"Running quickly, she caught the bus.\"", options: { A: "Gerund phrase", B: "Participial phrase", C: "Infinitive phrase", D: "Prepositional phrase" }, answer: "B" },
      { q: "Choose the antonym of \"EPHEMERAL\".", options: { A: "Transient", B: "Fleeting", C: "Perpetual", D: "Fragile" }, answer: "C" },
      { q: "Choose the synonym of \"PUNCTILIOUS\".", options: { A: "Careless", B: "Meticulous", C: "Prompt", D: "Angry" }, answer: "B" },
      { q: "Which sentence is in the subjunctive mood?", options: { A: "If I was rich, I would travel.", B: "If I were you, I would accept the offer.", C: "He goes to school every day.", D: "She will win the contest." }, answer: "B" },
      { q: "Fill in the blank: \"The committee ___ divided in their opinions.\"", options: { A: "is", B: "are", C: "has", D: "was" }, answer: "B" },
      { q: "What figure of speech is used in \"The silence was deafening\"?", options: { A: "Metaphor", B: "Oxymoron", C: "Hyperbole", D: "Personification" }, answer: "B" },
      { q: "Choose the correct preposition: \"He is proficient ___ mathematics.\"", options: { A: "in", B: "at", C: "on", D: "with" }, answer: "B" },
      { q: "Identify the sentence with a dangling modifier:", options: { A: "Walking down the street, the trees looked beautiful to me.", B: "While walking down the street, I admired the beautiful trees.", C: "She walked down the street and admired the trees.", D: "The trees were beautiful as I walked down the street." }, answer: "A" },
      { q: "What does the Latin root \"belli-\" mean?", options: { A: "War", B: "Beauty", C: "Good", D: "Small" }, answer: "A" },
      { q: "Choose the correct passive form of \"Who wrote this book?\"", options: { A: "By whom was this book written?", B: "Who was this book written by him?", C: "Whom was written this book?", D: "This book was written by who?" }, answer: "A" },
      { q: "What is the meaning of \"GOSSAMER\"?", options: { A: "Rough and coarse", B: "Extremely light, thin, and delicate", C: "Gloomy and dark", D: "Noisy and chaotic" }, answer: "B" },
      { q: "Choose the word that does not belong in the group:", options: { A: "Enervate", B: "Exhaust", C: "Invigorate", D: "Fatigue" }, answer: "C" },
      { q: "Identify the correct plural form of \"criterion\".", options: { A: "Criterions", B: "Criterias", C: "Criteria", D: "Criterion" }, answer: "C" },
      { q: "Choose the sentence with correct punctuation:", options: { A: "Its a nice day, however, I am busy.", B: "It's a nice day; however, I am busy.", C: "It's a nice day, however I am busy.", D: "Its a nice day; however I am busy." }, answer: "B" },
      { q: "What is a \"CACOPHONY\"?", options: { A: "A sweet melody", B: "A harsh, discordant mixture of sounds", C: "A grand speech", D: "A type of plant" }, answer: "B" },
      { q: "Fill in the blank: \"Neither the teacher nor the students ___ present.\"", options: { A: "was", B: "were", C: "is", D: "has been" }, answer: "B" },
      { q: "What is the noun form of \"persevering\"?", options: { A: "Persevere", B: "Perseverance", C: "Perseverant", D: "Perseveringly" }, answer: "B" }
    ]
  },

  chemistry: {
    name: "Chemistry",
    duration: 900,
    questions: [
      { q: "What is the hybridization of carbon in acetylene C<sub>2</sub>H<sub>2</sub>?", options: { A: "sp&sup3;", B: "sp&sup2;", C: "sp", D: "sp&sup3;d" }, answer: "C" },
      { q: "Which of the following has the highest lattice energy?", options: { A: "NaCl", B: "MgO", C: "KCl", D: "CaO" }, answer: "B" },
      { q: "Which law states that the partial pressure of a gas in a mixture is proportional to its mole fraction?", options: { A: "Boyle's Law", B: "Dalton's Law", C: "Henry's Law", D: "Raoult's Law" }, answer: "D" },
      { q: "What is the pH of a 0.01 M solution of NaOH at 25&deg;C?", options: { A: "2", B: "12", C: "10", D: "14" }, answer: "B" },
      { q: "Which compound gives a positive Tollens' test?", options: { A: "Acetone", B: "Acetaldehyde", C: "Diethyl ether", D: "Ethanol" }, answer: "B" },
      { q: "The rate constant of a first-order reaction has units of:", options: { A: "s<sup>-1</sup>", B: "mol L<sup>-1</sup>s<sup>-1</sup>", C: "L mol<sup>-1</sup>s<sup>-1</sup>", D: "L&sup2;mol<sup>-2</sup>s<sup>-1</sup>" }, answer: "A" },
      { q: "Which element has the highest electron gain enthalpy (most negative)?", options: { A: "Fluorine", B: "Chlorine", C: "Oxygen", D: "Nitrogen" }, answer: "B" },
      { q: "What is the product of the reaction between an alkene and B<sub>2</sub>H<sub>6</sub> followed by alkaline H<sub>2</sub>O<sub>2</sub>?", options: { A: "Markovnikov alcohol", B: "Anti-Markovnikov alcohol", C: "Alkane", D: "Alkyl halide" }, answer: "B" },
      { q: "Which of the following is an intensive property?", options: { A: "Enthalpy", B: "Mass", C: "Temperature", D: "Volume" }, answer: "C" },
      { q: "Which transition metal ion is colorless in aqueous solution?", options: { A: "Ti<sup>3+</sup>", B: "Sc<sup>3+</sup>", C: "Cu<sup>2+</sup>", D: "Fe<sup>2+</sup>" }, answer: "B" },
      { q: "What type of semiconductor is obtained when Silicon is doped with Boron?", options: { A: "n-type", B: "p-type", C: "Intrinsic", D: "Insulator" }, answer: "B" },
      { q: "The standard cell potential (E&deg; cell) for a spontaneous galvanic cell must be:", options: { A: "Positive", B: "Negative", C: "Zero", D: "One" }, answer: "A" },
      { q: "Which of the following gases deviates most from ideal behavior at high pressure?", options: { A: "He", B: "H2", C: "NH3", D: "N2" }, answer: "C" },
      { q: "What is the main product of the Friedel-Crafts acylation of benzene with acetyl chloride?", options: { A: "Toluene", B: "Acetophenone", C: "Benzophenone", D: "Chlorobenzene" }, answer: "C" },
      { q: "What is the number of atoms per unit cell in a face-centered cubic (FCC) lattice?", options: { A: "1", B: "2", C: "4", D: "8" }, answer: "B" },
      { q: "Which compound shows geometrical isomerism?", options: { A: "1-butene", B: "2-butene", C: "2-methyl-2-butene", D: "1-pentene" }, answer: "C" },
      { q: "The depression in freezing point (&Delta;Tf) is proportional to:", options: { A: "Molarity", B: "Molality", C: "Mole fraction", D: "Normality" }, answer: "B" },
      { q: "What is the catalyst used in the Haber process for ammonia synthesis?", options: { A: "Finely divided iron", B: "V2O5", C: "Nickel", D: "Pt/Rh" }, answer: "A" },
      { q: "The entropy of the universe during a spontaneous process:", options: { A: "Decreases", B: "Increases", C: "Remains constant", D: "Becomes zero" }, answer: "B" },
      { q: "Which functional group has the highest priority in IUPAC nomenclature?", options: { A: "Alcohol", B: "Aldehyde", C: "Carboxylic acid", D: "Ketone" }, answer: "C" }
    ]
  },

  physics: {
    name: "Physics",
    duration: 900,
    questions: [
      { q: "Which particle has zero rest mass and unit spin?", options: { A: "Electron", B: "Photon", C: "Proton", D: "Neutron" }, answer: "B" },
      { q: "In an adiabatic process for an ideal gas, which relation holds true?", options: { A: "PV = constant", B: "PV<sup>&gamma;</sup> = constant", C: "P/V = constant", D: "TV = constant" }, answer: "B" },
      { q: "What is the moment of inertia of a uniform thin rod of mass M and length L about an axis through its center, perpendicular to its length?", options: { A: "1/3 ML&sup2;", B: "1/12 ML&sup2;", C: "1/2 ML&sup2;", D: "1/4 ML&sup2;" }, answer: "B" },
      { q: "The displacement current is produced by:", options: { A: "Constant magnetic field", B: "Time-varying electric field", C: "Moving charges only", D: "Ohmic resistance" }, answer: "B" },
      { q: "The Poynting vector represents:", options: { A: "Energy density of electric field", B: "Energy flow per unit area per unit time in an electromagnetic wave", C: "Momentum of a photon", D: "Magnetic flux" }, answer: "B" },
      { q: "The work function of a metal is 2.0 eV. What is the threshold frequency?", options: { A: "4.8 &times; 10<sup>14</sup> Hz", B: "3.0 &times; 10<sup>15</sup> Hz", C: "1.0 &times; 10<sup>14</sup> Hz", D: "2.0 &times; 10<sup>15</sup> Hz" }, answer: "A" },
      { q: "The half-life of a radioactive substance is 10 days. What fraction remains after 30 days?", options: { A: "1/2", B: "1/4", C: "1/8", D: "1/16" }, answer: "C" },
      { q: "In a p-n junction diode under reverse bias, the depletion layer:", options: { A: "Widens", B: "Narrows", C: "Disappears", D: "Remains same" }, answer: "A" },
      { q: "What is the unit of magnetic flux?", options: { A: "Tesla", B: "Weber", C: "Henry", D: "Gauss" }, answer: "B" },
      { q: "A concave mirror produces a real image magnified 4 times at a distance of 80cm from the mirror. What is the focal length?", options: { A: "-16cm", B: "-20cm", C: "-64cm", D: "-32cm" }, answer: "A" },
      { q: "The total energy of an orbiting satellite is:", options: { A: "Positive", B: "Negative", C: "Zero", D: "Equal to potential energy" }, answer: "B" },
      { q: "Pressure exerted by an ideal gas is equal to:", options: { A: "1/3 &times; density &times; (rms speed)&sup2;", B: "2/3 &times; kinetic energy per unit volume", C: "Both A and B", D: "None of the above" }, answer: "C" },
      { q: "The barrier potential of a silicon p-n junction diode is approximately:", options: { A: "0.3V", B: "0.7V", C: "1.1V", D: "0.0V" }, answer: "B" },
      { q: "The magnetic moment of a current loop is proportional to:", options: { A: "Current only", B: "Area only", C: "Product of current and area", D: "Square of area" }, answer: "C" },
      { q: "If the momentum of a particle is increased by 100%, its kinetic energy increases by:", options: { A: "100%", B: "200%", C: "300%", D: "400%" }, answer: "C" },
      { q: "The angle of dip at the magnetic equator is:", options: { A: "0&deg;", B: "90&deg;", C: "45&deg;", D: "180&deg;" }, answer: "A" },
      { q: "The electric potential at a distance r from an electric dipole along its axis varies as:", options: { A: "1/r", B: "1/r&sup2;", C: "1/r&sup3;", D: "1/r&#8308;" }, answer: "B" },
      { q: "A beam of unpolarized light passes through three ideal polarizing filters. The first and third are perpendicular to each other; the second is at 45&deg; to the first. What fraction of the initial intensity emerges?", options: { A: "0", B: "&frac14;", C: "1/8", D: "1/16" }, answer: "C" },
      { q: "An electron in a hydrogen atom drops from n<sub>i</sub> to n<sub>f</sub>. If the recoil energy of the atom is accounted for, the frequency of the emitted photon is:", options: { A: "Exactly equal to the energy gap divided by h", B: "Slightly higher than the energy gap divided by h", C: "Slightly lower than the energy gap divided by h", D: "Zero due to momentum conservation match" }, answer: "C" },
      { q: "Two identical relativistic particles move directly toward each other, each with speed 0.6c in the lab frame. What is the speed of one particle relative to the other?", options: { A: "1.2c", B: "0.88c", C: "0.94c", D: "0.75c" }, answer: "B" }
    ]
  }

};
