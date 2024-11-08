Responsive Image Carousel Slider
This is a simple and responsive image carousel slider that can be used on small devices. It is built using HTML, CSS, and JavaScript.
Features

Responsive design that adapts to the width of the device
Automatically cycles through the slides every 5 seconds
Allows users to manually select a slide using navigation dots
Smooth transition animation between slides
Uses the object-fit property to ensure images fill the container while maintaining aspect ratio

Usage

Copy the HTML, CSS, and JavaScript code from the provided artifact.
Replace the image URLs with your own images.
Customize the styles and timing as needed to fit your design requirements.
Add the HTML code to your web page where you want the carousel to appear.
Include the CSS and JavaScript files (or embed the code directly) in your HTML file.

Example
Here's an example of how to use the carousel:
htmlCopy<div class="gallery-right">
  <div class="gallery-slides">
    <!-- Slide 1 -->
    <div class="gallery-slide active">
      <img src="https://example.com/image1.jpg" alt="Interior view 1">
    </div>
    <!-- Slide 2 -->
    <div class="gallery-slide">
      <img src="https://example.com/image2.jpg" alt="Interior view 2">
    </div>
    <!-- Slide 3 -->
    <div class="gallery-slide">
      <img src="https://example.com/image3.jpg" alt="Interior view 3">
    </div>
    <!-- Slide 4 -->
    <div class="gallery-slide">
      <img src="https://example.com/image4.jpg" alt="Interior view 4">
    </div>
  </div>

  <!-- Navigation Dots (Radio Buttons) -->
  <div class="gallery-slider-nav">
    <input type="radio" name="gallery" id="slide1" checked>
    <label for="slide1"></label>
    <input type="radio" name="gallery" id="slide2">
    <label for="slide2"></label>
    <input type="radio" name="gallery" id="slide3">
    <label for="slide3"></label>
    <input type="radio" name="gallery" id="slide4">
    <label for="slide4"></label>
  </div>
</div>
Customization
You can customize the following aspects of the carousel:

Images: Replace the image URLs with your own images.
Timing: Adjust the setInterval() function to change the time between automatic slide transitions.
Styles: Modify the CSS styles to change the appearance of the carousel, such as the size, colors, and navigation dots.

Contributing
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

project link : git clone https://github.com/tanvir-alam-sk/assignment2