const loader = document.getElementById('loader-container');
const postsBox = document.getElementById('posts-box');

function posts(data) {
    loader.classList.add('disapear')
    for (let i = 0; i < data.length; i++) {
        postsBox.insertAdjacentHTML("beforeend", `
            <div class="post-container fade-in">
                <h2>${data[i].title.rendered}</h2>
                <p>${data[i].content.rendered}</p>
            </div>
            <br><hr>
        `)
    }
}

async function fetchData(postsUrl) {
    try {
        const response = await fetch(postsUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok (status: ${response.status})`);
        }

        const data = await response.json();

        console.log(data);
        posts(data)

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const postsUrl = 'https://blog.doulamamimoon.com/wp-json/wp/v2/posts';
fetchData(postsUrl);
