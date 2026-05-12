// Team member data
const teamData = {
  "Dominic Johnson": {
    role: "H.R. Management",
    desc: "Dominic handles employee relations, hiring, onboarding, and workplace policies. He enjoys hiking and coffee tasting on weekends.",
    image: "img/icon.jpg",
  },

  "Jenny Tarmack": {
    role: "C.E.O.",
    desc: "Jenny oversees company operations and long-term strategy. She founded GreenScape Solutions and is passionate about sustainability.",
    image: "img/icon.jpg",
  },

  "Sarah Williams": {
    role: "Marketing Director",
    desc: "Sarah manages advertising campaigns, social media, and branding efforts. She loves photography and graphic design.",
    image: "img/icon.jpg",
  },
};

// Get all title cards
const cards = document.querySelectorAll(".titlecard");
const memberSection = document.querySelector(".team-member-desc");

// Get description section elements
const memberName = document.getElementById("member-name");
const memberDesc = document.getElementById("member-desc");
const memberImage = document.getElementById("member-image");

// Add click event to each card
cards.forEach((card) => {
  card.style.cursor = "pointer";

  card.addEventListener("click", () => {
    // Get name from the last <p> inside the card
    const name = card.querySelectorAll(".employee-info")[1].textContent;

    // Get matching data
    const member = teamData[name];

    // Update content
    memberName.textContent = `${name} - ${member.role}`;
    memberDesc.textContent = member.desc;
    memberImage.src = member.image;

    memberSection.style.display = "block";
  });
});
