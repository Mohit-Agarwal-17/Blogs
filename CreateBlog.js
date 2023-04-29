import { useEffect, useState } from "react";
import axios from 'axios';

const CreateBlog = () => {

    const token = localStorage.getItem('token');

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/api/blogs/compose", {
                title,
                content,
            },
                { headers: { Authorization: `Bearer ${token}` } });

            // Handle successful response
            console.log(response.data);
        } catch (error) {
            // Handle error
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="title"
                        placeholder="title"
                        required
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        type="content"
                        placeholder="content"
                        required
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" onClick={handleSubmit}
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateBlog;
