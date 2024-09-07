const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/images/avatar-vangogh.jpg",
        post: "/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        avatar_alt: "portrait of a young Vangogh",
        post_alt: "portrait of a young Vangogh",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/images/avatar-courbet.jpg",
        post: "/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        avatar_alt: "",
        post_alt: "",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "/images/avatar-ducreux.jpg",
        post: "/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        avatar_alt: "",
        post_alt: "",
        likes: 152,
        liked: false
    }
]

const timelineEl = document.getElementById('timeline-el')
let timelineTemplate = ''

function updateLike(i) {
    const likeCountEl = document.getElementById(`post-likes-count-${i}`)
    const heartIconEl = document.getElementById(`post-heart-icon-${i}`)
    if (posts[i].liked === false) {
        posts[i].likes += 1
        likeCountEl.innerText = posts[i].likes
        posts[i].liked = true
    } else {
        posts[i].likes -= 1
        likeCountEl.innerText = posts[i].likes
        posts[i].liked = false
    }
    heartIconEl.classList.toggle('heart-icon-liked')
}

for(let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const articleTemplate = `
    <article class="post-article">
        <section class="post-content-section">
            <div class="post-details">
                <img class="post-avatar" src="${post.avatar}" alt="${post.avatar_alt}">
                <div>
                    <p class="post-username">${post.name}</p>
                    <p class="post-location">${post.location}</p>
                </div>
            </div>
            <img class="post-image" src="${post.post}" alt="${post.post_alt}">
        </section>
        <section class="post-engagement-section">
            <div class="post-icons-wrapper">
                <img class="post-icon post-icon-heart" id="post-heart-icon-${i}" src="/images/icon-heart.png" alt="heart icon">
                <img class="post-icon post-icon-comment" src="/images/icon-comment.png" alt="comment icon">
                <img class="post-icon post-icon-share" src="/images/icon-dm.png" alt="share icon">
            </div>

            <p class="post-likes-text"><span class="post-likes-count" id="post-likes-count-${i}">${post.likes}</span> likes</p>
            <p class="post-comment-text"><span class="post-comment-username" id="post-comment-username">${post.username}</span> ${post.comment}</p>
        </section>
    </article>
    `
    timelineTemplate += articleTemplate
}

timelineEl.innerHTML = timelineTemplate

for (let i = 0; i < posts.length; i++) {
    const heartIconEl =  document.getElementById(`post-heart-icon-${i}`)
    heartIconEl.addEventListener("click", function() {
        updateLike(i)
    })
}