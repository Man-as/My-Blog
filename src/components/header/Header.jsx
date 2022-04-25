import "./header.css";

export default function Header() {
  return (
  <div className='header'>
        <div className='headertitles'>
            <span className='headertitlesm'>React & node</span>
            <span className='headertitlelg'>Blog</span>
        </div>
        <img className='headerimg' 
        src='https://i.pinimg.com/736x/d4/0c/40/d40c4013f6002ecf6f02426d6af2cc62.jpg'
        alt=''/>
  </div>
  );
}
