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

 // Mapping of regions to their currencies
 const regionCurrencyMap = {
     "Portugal": ["EUR"],
     "United States": ["USD"],
     "Canada": ["CAD"],
     "Germany": ["EUR"],
     // Add more region-currency pairs as needed
 };

 // Function to update currency options based on selected region
 function updateCurrencyOptions() {
     const regionSelect = document.getElementById("region");
     const currencySelect = document.getElementById("currency");
     const selectedRegion = regionSelect.value;

     // Clear existing currency options
     currencySelect.innerText = "";

     // Get the currency options for the selected region
     const currencies = regionCurrencyMap[selectedRegion];
     currencySelect.value=currencies;

     let countryName=document.getElementById("countryName").innerText=regionSelect.value
     // Enable the currency select box
     currencySelect.disabled = true;
     console.log()
 }

// --------------------------------------------Share Modal--------------------------------
// Open the popup on "Share" button click
document
  .getElementById("openCustomPopup")
  .addEventListener("click", function (event) {
    const buttonRect = event.target.getBoundingClientRect();

    // Toggle popup visibility
    const customPopupContainer = document.getElementById(
      "customPopupContainer"
    );
    if (
      customPopupContainer.style.display === "none" ||
      !customPopupContainer.style.display
    ) {
      // Show the popup below the button
      customPopupContainer.style.top = buttonRect.bottom + "px";
      customPopupContainer.style.left = buttonRect.left + "px";
      customPopupContainer.style.display = "block";
    } else {
      // Hide the popup if it's already visible
      customPopupContainer.style.display = "none";
    }
  });

// Close the popup on "Close" (×) button click
document
  .getElementById("closeCustomPopup")
  .addEventListener("click", function () {
    document.getElementById("customPopupContainer").style.display = "none";
  });

// Facebook Share Button Functionality
document
  .getElementById("customFacebookShare")
  .addEventListener("click", function (event) {
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

// Copy Link Functionality
document
  .getElementById("customCopyLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const linkToCopy = "https://example.com";

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
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

function bookmarkItemPageload() {
  let bookmark = localStorage.getItem("bookmark");
  let btnLove = document.getElementById("btn-love");
  if (bookmark) {
    btnLove.innerHTML = "<i id='bookmark-icon' class='fa-solid fa-heart'></i>";
  } else {
    btnLove.innerHTML =
      "<i id='bookmark-icon' class='fa-regular fa-heart'></i>";
  }
}
bookmarkItemPageload();
// ----------------------------------------image Slider--------------------------
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

// Open the slider modal
function openTravelSlider() {
  document.getElementById("travelSliderModal").style.display = "flex";
  showTravelImage(travelCurrentIndex);
}

// Close the slider modal
function closeTravelSlider() {
  document.getElementById("travelSliderModal").style.display = "none";
}

// Show the image at a specific index
function showTravelImage(index) {
  const imageElement = document.getElementById("travelSliderImage");
  const titleElement = document.getElementById("travelSliderTitle");
  const countElement = document.getElementById("travelSliderCount");

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
  const prevButton = document.querySelector(".travel-slider-prev-btn");
  const nextButton = document.querySelector(".travel-slider-next-btn");

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
  adults: 1,
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

  let totaltraveler =
    Number(travelCounts.adults) + Number(travelCounts.children);

  if (totaltraveler > 1) {
    document.getElementById("totalTravelers").innerText =
      totaltraveler + " travelers";
  }else{
    document.getElementById("totalTravelers").innerText =
      totaltraveler + " traveler";
  }

  let totalprice=Number(travelCounts.adults)*134+Number(travelCounts.children)*100;
  console.log(totalprice)

  document.getElementById("totalLabelTaka").innerText =
  "$ "+totalprice ;
  
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
