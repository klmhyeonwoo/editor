let state = true;

const Delete = (post_id) => {
  event.stopPropagation();
  if (window.confirm(`정말로 게시물을 삭제하시겠어요?`)) {
    location.href = `/posts/destroy/${post_id}`;
  }
};

const Edit = (post_id) => {
  event.stopPropagation();
  location.href = `/posts/edit/${post_id}`;
};

const Show = (post_id) => {
  location.href = `/posts/show/${post_id}`;
};

const Post = () => {
  location.href = `/posts/new`;
};
