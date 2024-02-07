let imageIndex = 0;
const images = ['./guaff_logo/guaff_logo_weiss.png', './guaff_logo/guaff_logo_schwarz.png'];

const toggleImage = () => {
  imageIndex = (imageIndex === 0) ? 1 : 0;
  updateImage();
};

const getBackgroundColor = () => {
  if (images[imageIndex] === './guaff_logo/guaff_logo_weiss.png') {
    return 'black';
  } else if (images[imageIndex] === './guaff_logo/guaff_logo_schwarz.png') {
    return '#018ADA'; // Change background color to pink for 'guaff_logo_schwarz.png'
  }
};

const updateImage = () => {
  const appDiv = document.getElementById('app');
  const backgroundColor = getBackgroundColor();

  appDiv.innerHTML = `
    <div class="App" style="background-color: ${backgroundColor};">
      <header class="App-header">
        <div class="content-container">
          <div class="img-container">
            <img
              src="${images[imageIndex]}"
              alt="Toggleable Image"
              style="width: 28%; margin: auto; display: block; cursor: pointer;"
              onclick="toggleImage()"
            />
          </div>
        </div>
      </header>
    </div>
  `;
};

// Initial rendering
updateImage();
