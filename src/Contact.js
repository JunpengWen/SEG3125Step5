const Contact = () => {
    return ( 
        <div className="contact">
            <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>Contact</h1>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" required />
                <label htmlFor="">Email</label>
                <input type="text" required />
                <label htmlFor="">Question</label>
                <textarea name="" id="" cols="20" rows="5"></textarea>
                <button>Send</button>
            </form>
        </div>
     );
}
 
export default Contact;