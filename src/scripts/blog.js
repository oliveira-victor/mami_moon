const loader = document.getElementById('loader-container');
const postsBox = document.getElementById('posts-box');
const postsMenu = document.getElementById('posts-menu');
const phoneMenu = document.getElementById('blog-phone-menu');

function shortenTitle(post) {
    if (post.length > 30) {
        return post.slice(0, 30) + "..."
    }

    return post
}

function handleTime(timeData) {

    const dateStr = timeData.date;
    const dateObj = new Date(dateStr);

    const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const formattedTime = dateObj.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    return `${formattedDate} at ${formattedTime}`
}

function posts(data) {

    loader.classList.add('disapear');

    for (let i = 0; i < data.length; i++) {
        postsBox.insertAdjacentHTML("beforeend", `
            <div class="post-container fade-in">
                <h2 id="${data[i].slug}">${data[i].title.rendered}</h2>
                <p class="post-date">${handleTime(data[i])}</p>
                <p>${data[i].content.rendered}</p>
            </div>
            <br><hr>
        `);
        postsMenu.insertAdjacentHTML("beforeend", `
            <a href="#${data[i].slug}">
                <button class="post-btn" type="button">${shortenTitle(data[i].title.rendered)}</button>
            </a>
        `);
        phoneMenu.insertAdjacentHTML("beforeend", `
            <li>
                <a href="#${data[i].slug}">
                    ${shortenTitle(data[i].title.rendered)}
                </a>
            </li>
            <li>
                ★
            </li>
        `);
    }
}

async function fetchData(postsUrl) {
    try {
        const response = await fetch(postsUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok (status: ${response.status})`);
        }

        const data = await response.json();

        posts(data)

    } catch (error) {
        postsBox.innerHTML = "<p class='error-msg'>Oops! There's an unexpected error. ;/ Try again later.</p>"
        console.error('Error fetching data:', error);
    }
}

const postsUrl = 'https://blog.doulamamimoon.com/wp-json/wp/v2/posts';
fetchData(postsUrl);
