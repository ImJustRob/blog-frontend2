     export function PhotosNew({ onCreate }) {
    
       const handleSubmit = (event) => {
         event.preventDefault();
         const params = new FormData(event.target);
         onCreate(params, () => event.target.reset());
       };
    
        return (
          <div>
            <h1>New Photo</h1>
            <form onSubmit={handleSubmit}>
              <div>
                Name: <input name="name" type="text" />
              </div>
              <div>
                Url: <input name="url" type="text" />
              </div>
              <div>
                Width: <input name="width" type="text" />
              </div>
              <div>
                Height: <input name="height" type="text" />
              </div>
              <button type="submit">Create</button>
            </form>
          </div>
        );
      }