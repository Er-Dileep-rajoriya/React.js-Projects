import { useState, useRef, useEffect} from "react";
import {db} from '../firebaseInit';
import { collection, addDoc, onSnapshot, deleteDoc, doc} from "firebase/firestore";


// function blogReducer(state, action)
// {
//     switch(action.type)
//     {
//         case 'ADD':
//             return [action.blog, ...state];
//         case 'REMOVE':
//             return state.filter((blog, i) => action.index !== i);
//         default:
//             return [];
//     }
// }

function BlogApp()
{

    const [formData, setFormData] = useState({title:'', content:''});
    const [blogs, setBlogs] = useState([]);
    // const [blogs, dispatch] = useReducer(blogReducer, []);
    const titleRef = useRef(null);

    // setting focus on initial rendering
    useEffect(() => {
        titleRef.current.focus();
    }, []);

    // setting title
    useEffect(() => {

        if(blogs.length && blogs[0].title)
        {
            document.title = blogs[0].title;
        }
        else {
            document.title = 'No Blogs!!';
        }
    }, [blogs]);

    useEffect(() => {

        async function fetchData()
        {
            // getting data from database
            // const querySnapshot = await getDocs(collection(db, "blogs"));

            // const blogs = querySnapshot.docs.map((doc) => {
            //         return {
            //             id:doc.id,
            //             ...doc.data()
            //         }
            //     });

            // setBlogs(blogs);

            await onSnapshot(collection(db, 'blogs'), (snapShot) => {
                const blogs = snapShot.docs.map((doc) => {
                    return {
                        id:doc.id,
                        ...doc.data()
                    }
                })

                setBlogs(blogs);
            });
        }

        fetchData();

    }, []);

    async function handleSubmit(e)
    {
        e.preventDefault();

        setBlogs([{title:formData.title, content:formData.content}, ...blogs]);

        // dispatch({type:'ADD', blog:{title:formData.title, content:formData.content}});

        // using database to save the data
        // Add a new document with a generated id.
        await addDoc(collection(db, "blogs"), {
            title:formData.title,
            content:formData.content,
            createdOn: new Date()
        });
        // console.log("Document written with ID: ", docRef.id);

        setFormData({title:'', content:''});
        titleRef.current.focus();

    }

    async function handleDeleteBlog(id)
    {
        // const updatedBlogs = [...blogs.slice(0, index), ...blogs.slice(index + 1)];

        // setBlogs(updatedBlogs);

        // setBlogs(blogs.filter((blog, i) => i !== index));

        // dispatch({type:'REMOVE', index:index});

        // deleting blogs using database

        await deleteDoc(doc(db, 'blogs', id));

    }

    return(
        <div className="app-container">
            <h1 className="blog-heading">Write a Blog !</h1>
            <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h2 className="title">Title :</h2>
                        <input className="title-input" type="text" 
                        placeholder="Enter the Title here...." 
                        value={formData.title}
                        ref={titleRef}
                        onChange={(e) => setFormData({title:e.target.value, content:formData.content})}/>
                        <hr />

                        <h2 className="content">Content :</h2>
                        <textarea placeholder="Enter the Content here" 
                        className="content-input" cols='20' rows='10'
                        value={formData.content}
                        required
                        onChange={(e) => setFormData({title:formData.title, content:e.target.value})}></textarea>
                        <hr />

                        <button className="add-btn">ADD</button>
                    </form>
            </div>
            <hr/>
            <h1 className="blog-heading">Blogs</h1>
            {
                blogs.map((blog, index) => (
                    <div className="blog-container" key={index}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        <h2 className="delete-btn" onClick={() => handleDeleteBlog(blog.id)}>X</h2>
                    </div>
                ))

            }
        </div>
    )
}

export default BlogApp;