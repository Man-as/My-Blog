import "./write.css";

export default function Write() {
  return (
  <div className="write">
      <img className="writeimg" src="https://daniellemareeblog.files.wordpress.com/2018/08/blog-welcome1.jpg" alt=""></img>
        <form className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                <i class="writeicon fa-solid fa-circle-plus"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
                <input type="text" placeholder="Title"
                 className="writeinput" autoFocus={true}/>
            </div>
            <div className="writeformgroup">
                <textarea
                placeholder="Tell your story...."
                type="text"
                className="writeinput writetext">
                </textarea>
            </div>
            <button className="writesubmit">Publish</button>
        </form>
  </div>
  );
}
