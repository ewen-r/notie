/** Component to display Note. */
function Note() {

  const title = 'Note title here';
  const content = 'Note content here.';

  return <div className="note">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>;
}


export default Note;
