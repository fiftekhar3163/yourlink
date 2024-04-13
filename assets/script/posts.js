import { Subscriber } from "./class.js";

// Dummy data for subscriber
const subscriberData = {
  id: 1,
  name: "John Doe",
  userName: "johndoe123",
  email: "johndoe@example.com",
  pages: ["Page1", "Page2"],
  groups: ["Group1", "Group2"],
  canMonetize: true,
};

const subscriber = new Subscriber(
  subscriberData.id,
  subscriberData.name,
  subscriberData.userName,
  subscriberData.email,
  subscriberData.pages,
  subscriberData.groups,
  subscriberData.canMonetize
);

function clearForm() {
  document.getElementById("postForm").reset();
  document.getElementById("selectedFileName").textContent = "";
}

// Handle form submission
document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const postText = document.getElementById("postText").value;
    const imageFile = document.getElementById("imageUpload").files[0]; // You can handle image upload here
    const post = createPost(postText, imageFile);
    const postsContainer = document.getElementById("posts");
    const firstPost = postsContainer.firstElementChild;
    postsContainer.insertBefore(post, firstPost);
    clearForm();
  });

document.getElementById("imageUpload").addEventListener("change", function () {
  const fileName = this.files[0].name;
  document.getElementById("selectedFileName").textContent = fileName;
});

function imageUrl(file) {
  const imageUrl = URL.createObjectURL(file);
  return imageUrl;
}

// Function to create a post element
function createPost(text, image) {
  console.log(image);
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");
  postHeader.innerHTML = `
        <div class='flex gap-2'>
        <img class='icon'>
        <i class="fa-solid fa-circle-user"></i>
        <span class="user-name">${subscriber.name}</span>
        </div>
        <div class="post-info">
            <span class="post-date">${getCurrentDate()}</span>
        </div>`;
  const postContent = document.createElement("div");
  postContent.classList.add("post-content");
  postContent.innerHTML = `<p>${text}</p>`;
  if (image) {
    const img = document.createElement("img");
    img.src = imageUrl(image);
    postContent.appendChild(img);
  }
  postDiv.appendChild(postHeader);
  postDiv.appendChild(postContent);
  return postDiv;
}

function getCurrentDate() {
  const date = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
