import "./Contact.css";
import { useState } from "react";

function Contact(){
    
         const [name, setName] = useState("");

         const [email, setEmail] = useState("");

         const [message, setMessage] = useState("");


         const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;
    }

    alert("Message sent successfully!");

    console.log({
        name,
        email,
        message
    });

    setName("");
    setEmail("");
    setMessage("");
};
    return(

<section className="contact" id="contact">

    <h2>Contact Me</h2>

    <form onSubmit={handleSubmit}>

        <input

        type="text"

        placeholder="Your Name"

        value={name}

        onChange={(e)=>setName(e.target.value)}

         />

        <input

       type="email"

       placeholder="Your Email"

       value={email}

       onChange={(e)=>setEmail(e.target.value)}

         />

        <textarea

           placeholder="Your Message"

           value={message}

           onChange={(e)=>setMessage(e.target.value)}

          ></textarea>

        <button>

            Send Message

        </button>

    </form>

</section>

    )
  
}

export default Contact;