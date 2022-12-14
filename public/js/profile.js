const userName = document.querySelector('.user h3');
const userImg = document.querySelector('.user img');
const postContent = document.querySelector('#postContent');
const submit = document.querySelector('#submit');
const allPosts = document.querySelector('.allPosts');

const createEle = (ele, className) => {
  const e = document.createElement(ele);
  e.classList.add(className);
  return e;
}

const deletePost = (e) =>{
  const { id } = e;
  fetch(`/post/delete-post/${id}`)
    .then((res) => { fetchProfile() })
};

const handleDom = (data) => {
  allPosts.textContent = '';
  userName.textContent = data.name;
  userImg.src = data.img;
  for(let i = data.posts.length - 1; i >= 0 ; i--) {
    const post = createEle('div', 'post');
    const xmarkIcon = createEle('i', 'fa-solid');
    xmarkIcon.classList.add('fa-xmark');
    const p = createEle('p', 'p');
    const like = createEle('div', 'like');
    const span = createEle('span', 'span');
    const thumbsIcon = createEle('i', 'fa-solid');
    thumbsIcon.classList.add('fa-thumbs-up');
    p.textContent = data.posts[i].post;
    span.textContent = data.posts[i].likes;
    post.appendChild(xmarkIcon);
    post.appendChild(p);
    like.appendChild(span);
    like.appendChild(thumbsIcon);
    post.appendChild(like);
    allPosts.appendChild(post);
    xmarkIcon.addEventListener('click' ,() => {
      deletePost(data.posts[i])
    })
}
}

const fetchProfile = () => {
  fetch('/user/profile')
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "unauthenticated") window.location.href = '/sign-up';
      else handleDom(data);
    });
};

fetchProfile();

// add post

submit.addEventListener('click', () => {
  const post = { post: postContent.value };
  postContent.value = '';

  fetch('/post/add-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((res) => {
      fetchProfile();
    });
});


/// log out

const logOut = document.querySelector('.fa-right-from-bracket');

logOut.addEventListener('click', () => {
  fetch('/user/sign-out')
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'redirect') window.location.href = '/';
    });
});