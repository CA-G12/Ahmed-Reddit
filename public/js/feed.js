const postsCont = document.querySelector('.posts');

const handleDom = (data) => {
  postsCont.textContent = '';

  data.forEach((e) => {
    const post = document.createElement('div');
    const user = document.createElement('div');
    const like = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h3');
    const txt = document.createElement('p');
    const closeIcon = document.createElement('i');
    const likeIcon = document.createElement('i');
    const num = document.createElement('span');

    post.classList = 'post';
    post.id = e.id;
    user.classList = 'user';
    like.classList = 'like';
    likeIcon.classList = 'fa-solid fa-thumbs-up';

    likeIcon.addEventListener('click', (event) => {
        const id = { postId: e.id };
        fetch('/post/add-like', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
          })
           .then((res) => res.json())
           .then((data) => {
            if (data.message === "unauthenticated") window.location.href = '/sign-up';
            else{
                if (event.target.style.color === 'rgb(45, 134, 255)'){
                    event.target.style.color = '#fff';
                    num.textContent =  parseInt(num.textContent) -1;
                  }
                  else{
                      event.target.style.color = '#2d86ff';
                      num.textContent =  parseInt(num.textContent) +1;
                  }
            }
           })

    });

    img.src = e.img;
    name.textContent = e.name;
    txt.textContent = e.post;
    num.textContent = e.likes;

    postsCont.appendChild(post);
    user.append(img, name);
    like.append(num, likeIcon);
    post.append(user, txt, like);
  });
};

const fetchFeed = () => {
  fetch('/user/feed')
   .then((data) => data.json())
   .then((result) => handleDom(result));
};

fetchFeed();