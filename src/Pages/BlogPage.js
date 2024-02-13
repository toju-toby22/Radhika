import React , {useState} from "react";
// import "../Styling/articlepage.css"
import { useParams} from 'react-router-dom';
import fb from "../firebase";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
const DB =fb.firestore()

const Financeblogs = DB.collection('Financeblogs');


const BlogPage = () => {
    const {id} = useParams();
  const[blogs, Setblogs] = useState([]);
  Financeblogs.doc(id).get().then((snapshot) => {
      const data = snapshot.data()
      Setblogs(data);
  });
  const body = blogs.Body;


  return (
    <div>

        <NavigationBar/>

<div className="blogpage">
<div  dangerouslySetInnerHTML={{__html: body}} />

</div>



<Footer/>

    </div>
  )
}

export default BlogPage