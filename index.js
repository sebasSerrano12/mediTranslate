let translations = {
    "How severe is your pain on a scale from 1 to 10?": "¿Qué tan severo es tu dolor en una escala del 1 al 10?",
    "Where is your pain?": "¿Dónde está tu dolor?", 
    "What brings you to the emergency room today?": "¿Qué te trae a la sala de emergencias hoy?",
    "Fever, nausea, or vomiting?": "¿Fiebre, náuseas o vómitos?",
    "Can you describe your symptoms?": "¿Puedes describir tus síntomas?",
    "Do you have any known allergies or medical conditions?": "¿Tienes alguna alergia o condición médica conocida?",
    "When did your symptoms start?": "¿Cuándo comenzaron tus síntomas?",
    "Have you taken any medications recently?": "¿Has tomado algún medicamento recientemente?",
    "Do you have any family history of similar conditions?": "¿Tienes antecedentes familiares de condiciones similares?"
  };
  
  function selectRandomTranslation() {
    const keys = Object.keys(translations);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const englishQuestion = randomKey;
    const spanishTranslation = translations[randomKey];
    const displayText = englishQuestion + "\n" + spanishTranslation;
    
    const translationDisplay = document.getElementById('translationDisplay');
    translationDisplay.textContent = displayText;
    translationDisplay.style.display = "block"; // Display the translation display paragraph
  }
  
  document.getElementById('selectTranslation').addEventListener('click', selectRandomTranslation);