function addPost() {

    let name = document.getElementById("username").value;
    let text = document.getElementById("postText").value;

    if (name == "" || text == "") {
        alert("Please enter your name and post!");
        return;
    }

    let post = document.createElement("div");

    post.className = "post";

    post.innerHTML =
        "<div class='username'>👤 " + name + "</div>" +
        "<p class='postText'>" + text + "</p>" +

        "<button class='like' onclick='likePost(this)'>" +
        "❤️ Like (0)</button>" +

        "<button class='comment' onclick='addComment(this)'>" +
        "💬 Comment</button>" +

        "<div class='commentText'></div>";

    document.getElementById("posts").prepend(post);

    document.getElementById("username").value = "";
    document.getElementById("postText").value = "";
}


function likePost(button) {

    let count = button.getAttribute("data-count");

    if (count == null) {
        count = 0;
    }

    count++;

    button.setAttribute("data-count", count);

    button.innerHTML = "❤️ Like (" + count + ")";
}


function addComment(button) {

    let comment = prompt("Enter your comment:");

    if (comment != null && comment != "") {

        button.parentElement.querySelector(".commentText").innerHTML =
            "<b>💬 Comment:</b> " + comment;
    }
}
