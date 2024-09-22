export function PhotosShow({ photo, onUpdate, onDestroy }) {
        
     const handleSubmit = (event) => {
       event.preventDefault();
       const params = new FormData(event.target);
       onUpdate(photo.id, params, () => event.target.reset());
     };
  
  return (
    <div>
      <h1>blog information</h1>
      <p>Title: {photo.title}</p>
      <p>Image: {photo.image}</p>
      <p>Body: {photo.body}</p>
      <form onSubmit={handleSubmit}>
         <div>
           Title: <input defaultValue={photo.title} name="title" type="text" />
         </div>
         <div>
           Image: <input defaultValue={photo.image} name="image" type="text" />
         </div>
         <div>
           Body: <input defaultValue={photo.body} name="body" type="text" />
         </div>
         <button type="submit">Update</button>
       </form>
       <button onClick={() => onDestroy(photo.id)}>Destroy</button>
    </div>
  );
}