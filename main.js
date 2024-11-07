//   --------------------- Country MODAL-----------------
// Get the modal container
let modalContainer = document.getElementById("modalContainer");

// Function to open modal
function openCountryModal() {
  modalContainer.classList.add("show");
}

// Function to close modal
function closeCountryModal() {
  modalContainer.classList.remove("show");
}

// Close modal when clicking outside
modalContainer.addEventListener("click", function (event) {
  if (event.target === modalContainer) {
    closeCountryModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modalContainer.classList.contains("show")) {
    closeCountryModal();
  }
});

// ----------------------------------------  bookmark-btn-----------------------------------
function bookmarkItem() {
  let bookmarkIcon = document.getElementById("bookmark-icon");
  let bookmark = localStorage.getItem("bookmark");

  if (bookmark) {
    bookmarkIcon.classList.remove("fa-solid");
    bookmarkIcon.classList.add("fa-regular");
    localStorage.removeItem("bookmark");
  } else {
    bookmarkIcon.classList.remove("fa-regular");
    bookmarkIcon.classList.add("fa-solid");
    localStorage.setItem("bookmark", "marked");
  }
}

// ----------------------------------------image Slider--------------------------
const  travelImages  = [
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
];

let travelCurrentIndex = 0;

// Open the slider modal
function openTravelSlider() {
    document.getElementById('travelSliderModal').style.display = 'flex';
    showTravelImage(travelCurrentIndex);
}

// Close the slider modal
function closeTravelSlider() {
    document.getElementById('travelSliderModal').style.display = 'none';
}

// Show the image at a specific index
function showTravelImage(index) {
    const imageElement = document.getElementById('travelSliderImage');
    const titleElement = document.getElementById('travelSliderTitle');
    const countElement = document.getElementById('travelSliderCount');

    imageElement.src = travelImages[index].src;
    titleElement.textContent = travelImages[index].title;
    countElement.textContent = `${index + 1} / ${travelImages.length}`;

    // Update button states
    updateButtonStates();
}

// Change image with next/previous buttons
function changeTravelImage(direction) {
    travelCurrentIndex += direction;

    // Wrap around when reaching end or beginning
    if (travelCurrentIndex < 0) {
        travelCurrentIndex = 0;
    } else if (travelCurrentIndex >= travelImages.length) {
        travelCurrentIndex = travelImages.length - 1;
    }

    showTravelImage(travelCurrentIndex);
}

// Update the state (enabled/disabled) of the Previous and Next buttons
function updateButtonStates() {
    const prevButton = document.querySelector('.travel-slider-prev-btn');
    const nextButton = document.querySelector('.travel-slider-next-btn');

    // Disable the "Previous" button if showing the first image
    if (travelCurrentIndex === 0) {
        prevButton.disabled = true;
        prevButton.style.opacity = 0.5; // Optional styling to indicate disabled
    } else {
        prevButton.disabled = false;
        prevButton.style.opacity = 1;
    }

    // Disable the "Next" button if showing the last image
    if (travelCurrentIndex === travelImages.length - 1) {
        nextButton.disabled = true;
        nextButton.style.opacity = 0.5; // Optional styling to indicate disabled
    } else {
        nextButton.disabled = false;
        nextButton.style.opacity = 1;
    }
}

// ----------------------------------------travelers Modal-----------------------
const travelCounts = {
  adults: 2,
  children: 0,
};

const travelMinCounts = {
  adults: 1,
  children: 0,
};

const travelMaxCounts = {
  adults: 8,
  children: 8,
};

function updateTravelCount(type, delta) {
  const newCount = travelCounts[type] + delta;
  if (newCount >= travelMinCounts[type] && newCount <= travelMaxCounts[type]) {
    travelCounts[type] = newCount;
    document.getElementById(
      `travel${type.charAt(0).toUpperCase() + type.slice(1)}Count`
    ).textContent = newCount;
    updateTravelButtonStates();
  }
}

function updateTravelButtonStates() {
  ["adults", "children"].forEach((type) => {
    const minusButton = document.getElementById(
      `travel${type.charAt(0).toUpperCase() + type.slice(1)}Minus`
    );
    minusButton.disabled = travelCounts[type] <= travelMinCounts[type];
  });
}

function positionTravelModal() {
  const button = document.getElementById("travelTriggerButton");
  const modal = document.getElementById("travelModalContainer");
  const buttonRect = button.getBoundingClientRect();

  modal.style.left = buttonRect.left + "px";
  modal.style.top = buttonRect.bottom + window.scrollY + "px";
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

function handleTravelOutsideClick(e) {
  const modal = document.getElementById("travelModalContainer");
  const button = document.getElementById("travelTriggerButton");

  if (!modal.contains(e.target) && e.target !== button) {
    closeTravelModal();
  }
}

// Update modal position on window resize
window.addEventListener("resize", () => {
  if (
    document.getElementById("travelModalContainer").classList.contains("show")
  ) {
    positionTravelModal();
  }
});

// Initialize button states
updateTravelButtonStates();
// ----------------------------------------travelers Modal-----------------------
