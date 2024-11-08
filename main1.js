// -------------------- Country Modal --------------------

// Get the modal container
const modalContainer = document.getElementById("modalContainer");

// Open modal
function openCountryModal() {
  modalContainer.classList.add("show");
}

// Close modal
function closeCountryModal() {
  modalContainer.classList.remove("show");
}

// Close modal when clicking outside of it
modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    closeCountryModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalContainer.classList.contains("show")) {
    closeCountryModal();
  }
});

// Region-currency mapping
const regionCurrencyMap = {
  Portugal: ["EUR"],
  "United States": ["USD"],
  Canada: ["CAD"],
  Germany: ["EUR"],
  // Add more region-currency pairs as needed
};

// Update currency options based on selected region
function updateCurrencyOptions() {
  const regionSelect = document.getElementById("region");
  const currencySelect = document.getElementById("currency");
  const selectedRegion = regionSelect.value;

  //   const currencies = regionCurrencyMap[selectedRegion];
  //   currencySelect.value=currencies;

  // Update currency options
  currencySelect.value = regionCurrencyMap[selectedRegion];
  currencySelect.disabled = true;
  document.getElementById("countryName").innerText = regionSelect.value;
}

// ------------------- Share Modal -------------------

// Toggle popup on "Share" button click
document
  .getElementById("openCustomPopup")
  .addEventListener("click", (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    const customPopupContainer = document.getElementById(
      "customPopupContainer"
    );

    if (
      !customPopupContainer.style.display ||
      customPopupContainer.style.display === "none"
    ) {
      customPopupContainer.style.top = `${buttonRect.bottom}px`;
      customPopupContainer.style.left = `${buttonRect.left}px`;
      customPopupContainer.style.display = "block";
    } else {
      customPopupContainer.style.display = "none";
    }
  });

// Close the popup on "Close" button click
document.getElementById("closeCustomPopup").addEventListener("click", () => {
  document.getElementById("customPopupContainer").style.display = "none";
});

// Facebook share functionality
document
  .getElementById("customFacebookShare")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const linkToShare = "https://example.com";
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      linkToShare
    )}`;
    window.open(
      facebookShareUrl,
      "facebook-share-dialog",
      "width=800,height=600"
    );
  });

// Copy link functionality
document.getElementById("customCopyLink").addEventListener("click", (event) => {
  event.preventDefault();
  const linkToCopy = "https://example.com";

  navigator.clipboard
    .writeText(linkToCopy)
    .then(() => alert("Link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy:", err));
});

// ------------------- Bookmark Functionality -------------------

// Toggle bookmark
function bookmarkItem() {
  const bookmarkIcon = document.getElementById("bookmark-icon");
  const bookmark = localStorage.getItem("bookmark");

  if (bookmark) {
    bookmarkIcon.classList.replace("fa-solid", "fa-regular");
    localStorage.removeItem("bookmark");
  } else {
    bookmarkIcon.classList.replace("fa-regular", "fa-solid");
    localStorage.setItem("bookmark", "marked");
  }
}

// Load bookmark status on page load
function bookmarkItemPageload() {
  const bookmark = localStorage.getItem("bookmark");
  const btnLove = document.getElementById("btn-love");

  btnLove.innerHTML = bookmark
    ? "<i id='bookmark-icon' class='fa-solid fa-heart'></i>"
    : "<i id='bookmark-icon' class='fa-regular fa-heart'></i>";
}

bookmarkItemPageload();

// ------------------- Image Slider -------------------

const travelImages = [
  {
    src: "https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    title: "Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required",
  },
  {
    src: "https://images.unsplash.com/photo-1730829807497-9c5b8c9c41c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    title: "Juneau Vacation Rental | Cozy Lake View",
  },
  {
    src: "https://images.unsplash.com/photo-1730774487035-05673e0c5747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    title: "Juneau Vacation Rental | Peaceful Environment",
  },
  {
    src: "https://images.unsplash.com/photo-1726610930930-0e1af5f2d038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    title: "A Land Rover SUV Parked on the Side of the Road",
  },
];

let travelCurrentIndex = 0;

function openTravelSlider() {
  document.getElementById("travelSliderModal").style.display = "flex";
  showTravelImage(travelCurrentIndex);
}

function closeTravelSlider() {
  document.getElementById("travelSliderModal").style.display = "none";
}

function showTravelImage(index) {
  const imageElement = document.getElementById("travelSliderImage");
  const titleElement = document.getElementById("travelSliderTitle");
  const countElement = document.getElementById("travelSliderCount");

  imageElement.src = travelImages[index].src;
  titleElement.textContent = travelImages[index].title;
  countElement.textContent = `${index + 1} / ${travelImages.length}`;
  updateButtonStates();
}

function changeTravelImage(direction) {
  travelCurrentIndex = Math.min(
    Math.max(0, travelCurrentIndex + direction),
    travelImages.length - 1
  );
  showTravelImage(travelCurrentIndex);
}

function updateButtonStates() {
  const prevButton = document.querySelector(".travel-slider-prev-btn");
  const nextButton = document.querySelector(".travel-slider-next-btn");

  // Disable the "Previous" button if showing the first image
  if (travelCurrentIndex === 0) {
    prevButton.disabled = true;
    prevButton.style.opacity = 0.5;
  } else {
    prevButton.disabled = false;
    prevButton.style.opacity = 1;
  }

  // Disable the "Next" button if showing the last image
  if (travelCurrentIndex === travelImages.length - 1) {
    nextButton.disabled = true;
    nextButton.style.opacity = 0.5; 
  } else {
    nextButton.disabled = false;
    nextButton.style.opacity = 1;
  }
}

// ------------------- Travelers Modal -------------------

const travelCounts = { adults: 1, children: 0 };
const travelLimits = { adults: [1, 8], children: [0, 8] };

function updateTravelCount(type, delta) {
  const newCount = travelCounts[type] + delta;
  if (newCount >= travelLimits[type][0] && newCount <= travelLimits[type][1]) {
    travelCounts[type] = newCount;
    document.getElementById(`travel${capitalize(type)}Count`).textContent =
      newCount;
    updateTravelButtonStates();
  }

  const totalTravelers = travelCounts.adults + travelCounts.children;
  document.getElementById(
    "totalTravelers"
  ).innerText = `${totalTravelers} traveler${totalTravelers > 1 ? "s" : ""}`;

  const totalPrice = travelCounts.adults * 134 + travelCounts.children * 100;
  document.getElementById("totalLabelTaka").innerText = `$ ${totalPrice}`;
}

function updateTravelButtonStates() {
  ["adults", "children"].forEach((type) => {
    const minusButton = document.getElementById(
      `travel${capitalize(type)}Minus`
    );
    minusButton.disabled = travelCounts[type] <= travelLimits[type][0];
  });
}

function positionTravelModal() {
  const buttonRect = document
    .getElementById("travelTriggerButton")
    .getBoundingClientRect();
  const modal = document.getElementById("travelModalContainer");

  modal.style.left = `${buttonRect.left}px`;
  modal.style.top = `${buttonRect.bottom + window.scrollY}px`;
}

function toggleTravelModal() {
  const modal = document.getElementById("travelModalContainer");
  const isVisible = modal.classList.contains("show");

  if (!isVisible) {
    positionTravelModal();
    modal.classList.add("show");
    document.addEventListener("click", handleTravelOutsideClick);
  } else {
    closeTravelModal();
  }
}

function closeTravelModal() {
  const modal = document.getElementById("travelModalContainer");
  modal.classList.remove("show");
  document.removeEventListener("click", handleTravelOutsideClick);
}

function handleTravelOutsideClick(event) {
  const modal = document.getElementById("travelModalContainer");
  const button = document.getElementById("travelTriggerButton");

  if (!modal.contains(event.target) && event.target !== button) {
    closeTravelModal();
  }
}

window.addEventListener("resize", () => {
  if (
    document.getElementById("travelModalContainer").classList.contains("show")
  ) {
    positionTravelModal();
  }
});

updateTravelButtonStates();

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
