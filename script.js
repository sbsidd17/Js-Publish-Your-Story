let submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
  let imgUrl = document.querySelector("#imgUrl").value;
  let storyTitle = document.querySelector("#storyTitle").value;
  let author = document.querySelector("#author").value;
  let catagory = document.querySelector("#catagory").value;
  let story = document.querySelector("#story").value;
  

  let storyField = document.querySelector(".story-field")
  storyField.innerHTML = `
  <div class="show-story">
        <div class="img-section">
          <img
            src=${imgUrl}
            alt="img"
          />
        </div>
        <div class="story-section">
          <h3>${storyTitle}</h3>
          <p><i>Catagory : ${catagory}</i></p>
          <p>${story}</p>
          <div class="author">
            <span>Written By : ${author}</span>
          </div>
        </div>
      </div>
  `

  document.querySelector(".form-fields").reset()
});
