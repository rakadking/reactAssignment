import  React, {useState} from 'react';
import './Postview.css';
import heartLike from './images/heartLike.svg';
import sent from './images/msgSent.png'

const date = new Date().toLocaleDateString();

const Postview=()=> {
  const [post, setpostData] = useState([]);
       React.useEffect(() => {
        fetch("http://localhost:3004/user").then(data => data.json()).then(res => setpostData(res));
       });
  return (
    <div className="site-container" >
      {post.map((post, idx) => {
        return (<div className='post-card' key = {idx}>
        <section className='name-location-option'>
          <div className='name-location'>
            <h4>{post.name}</h4>
              <p>{post.location}</p>
          </div>
          <select className ="post-option" >
          <option value="" selected disabled hidden></option>
          <option>edit the post</option>
          <option>share</option>
          <option>delete the post</option>
          </select>
        </section>
        <img className='post-image' src={post.PostImage} alt ="post" />
        <div className='image-footer'>
          <div className='likes'>
            <span><img className='likebutton' src={heartLike} alt ="likes" /><img className='sentbutton' src={sent} alt ="sent-btn" /></span>
          </div>
 
          <div>
           <p className='date'>{date}</p>
          </div>
 
        </div>
 
        <article class ="post-article">
          <h4>{post.description}</h4>
        </article>
      </div>)
      })}
       
    </div>
  );
}

export default Postview;
