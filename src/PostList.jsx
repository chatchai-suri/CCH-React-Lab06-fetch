
function PostList({ el }) {
  return (
    <>
      <div className="card w-4/5 bg-base-200 card-lg shadow-sm">
        <div className="card-body bg-sky-200">
          <h2 className="card-title">{el.title}, Post ID: {el.id}</h2>
          <p>{el.body}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Comment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostList;
