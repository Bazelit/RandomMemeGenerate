const memeImage = document.querySelector(".meme__image");

async function randomMeme() {
  try {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();
    memeImage.src = data.preview[1];
  } catch (error) {
    console.error(error);
  }
}

randomMeme();
