import "./singlepost.css";

export default function Singlepost() {
  return (
  <div className="singlepost">
        <div className="singlepostwrapper">
            <img src="https://cotamarketing.net/wp-content/uploads/2020/05/First-blog-post.jpg"
             alt="" className="singlepostimg" />
             <h1 className="singleposttitle">Why I started blogging.
            <div className="singlepostedit">
            <i className="singleposticon fa-solid fa-pen-to-square"></i>
            <i className="singleposticon fa-regular fa-trash-can"></i>
            </div>
            </h1>
           <div className="singlepostinfo">
               <span className="singlepostauthor">Author: <b>Harsh</b></span>
               <span className="singlepostdate">1 hour ago</span>
               </div> 
               <p className="singlepostdesc">
                   This is my first blog on this website. I have never been into writing 
                   but love reading the articles, blogs of other famous personalities
                   short stories and much more. But through this website I will try my hands 
                   on writing too, and try to provide u all with some interesting and valuable content.

                    
               </p>
        </div>
  </div>
  );
}
