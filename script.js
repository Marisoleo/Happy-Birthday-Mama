
// PASSWORT
const SITE_PASSWORD = "MAMA50";

// 50 KLEINE GRÜNDE
const reasons = [
  "Dein Lachen", "Deine Umarmungen", "Dein Humor", "Deine Stärke", "Deine Geduld",
  "Deine Geschichten", "Deine Kochkünste", "Deine Ehrlichkeit", "Deine Energie", "Deine Herzlichkeit",
  "Wie du zuhörst", "Deine Spontanität", "Deine Ratschläge", "Dein Mut", "Deine Kreativität",
  "Deine verrückten Ideen", "Deine Fürsorge", "Deine Lebensfreude", "Deine Art zu feiern", "Deine Stimme",
  "Deine kleinen Gesten", "Dein grosses Herz", "Deine Offenheit", "Deine Wärme", "Deine Begeisterung",
  "Wie du andere aufmunterst", "Dein Durchhaltevermögen", "Deine lustigen Sprüche", "Deine Neugier", "Deine Persönlichkeit",
  "Deine Hilfsbereitschaft", "Deine Lebensweisheit", "Deine Abenteuerlust", "Deine positive Art", "Deine Erinnerungen",
  "Deine Liebe", "Dein Vertrauen", "Deine Geduld mit uns", "Dein Lächeln", "Deine Einzigartigkeit",
  "Wie du Dinge besonders machst", "Deine Lieblingslieder", "Dein mexikanisches Herz", "Deine kleinen Traditionen", "Deine Unterstützung",
  "Dein Optimismus", "Deine Grosszügigkeit", "Dein Sinn für Familie", "Einfach alles an dir", "Dass du DU bist"
];

// GRÜNDE ANZEIGEN
const reasonsGrid = document.getElementById("reasonsGrid");

if (reasonsGrid) {
  reasons.forEach((reason, i) => {
    const button = document.createElement("button");
    button.className = "reason";
    button.innerHTML = `<span>GRUND ${String(i + 1).padStart(2, "0")}</span>♡`;
    button.title = "Anklicken, um den Grund zu lesen";

    button.addEventListener("click", () => {
      const isOpen = button.classList.toggle("open");

      button.innerHTML = isOpen
        ? `<span>GRUND ${String(i + 1).padStart(2, "0")}</span>${reason}`
        : `<span>GRUND ${String(i + 1).padStart(2, "0")}</span>♡`;
    });

    reasonsGrid.appendChild(button);
  });
}

// PASSWORT-EINGANG
const gateForm = document.getElementById("gateForm");

if (gateForm) {
  gateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = document.getElementById("gatePassword");
    const error = document.getElementById("gateError");

    if (password.value === SITE_PASSWORD) {
      document.getElementById("gate").style.display = "none";
      document.getElementById("site").classList.remove("hidden");
      window.scrollTo(0, 0);
    } else {
      error.textContent = "Das Passwort stimmt noch nicht.";
      password.value = "";
    }
  });
}

// GEBURTSTAGSKÄRTCHEN
const messageCards = document.querySelectorAll(".message-card");
const messageReveal = document.getElementById("messageReveal");

messageCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (messageReveal) {
      messageReveal.textContent = card.dataset.message;
    }

    messageCards.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });

    card.classList.add("active");
  });
});

// UMSCHLÄGE
const envelopes = document.querySelectorAll(".envelope");
const letterPop = document.getElementById("letterPop");

envelopes.forEach((envelope) => {
  envelope.addEventListener("click", () => {
    if (letterPop) {
      letterPop.textContent = envelope.dataset.letter;
    }

    envelopes.forEach((otherEnvelope) => {
      otherEnvelope.classList.remove("active");
    });

    envelope.classList.add("active");
  });
});

// ÜBERRASCHUNG
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseReveal = document.getElementById("surpriseReveal");

if (surpriseBtn && surpriseReveal) {
  surpriseBtn.addEventListener("click", () => {
    surpriseReveal.hidden = false;
    surpriseBtn.hidden = true;

    surpriseReveal.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}

// MUSIK
const audio = document.querySelector("audio");
const soundToggle = document.getElementById("soundToggle");

if (audio && soundToggle) {
  soundToggle.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        soundToggle.textContent = "Ⅱ";
      } catch (error) {
        soundToggle.textContent = "♫";
      }
    } else {
      audio.pause();
      soundToggle.textContent = "♫";
    }
  });

  audio.addEventListener("ended", () => {
    soundToggle.textContent = "♫";
  });
}
