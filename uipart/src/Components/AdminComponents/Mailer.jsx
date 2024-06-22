import emailjs from 'emailjs-com';
const Mailer =() => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_ey832km','template_4r6jl66',e.target,'-IoGkXstYJmGWIQrg'
        ).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return(
        <div className ="container border"
        style={{marginTop:"50px",
        width:'50px',
        backgroundImage:`url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dmumbai&psig=AOvVaw3nCP9jzopZzXKnel1j8OL4&ust=1666023845510000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCX29KU5foCFQAAAAAdAAAAABAE')`,
        backgroundPosition:"center",
        backgroundSize:"cover",      
    }}
        >
            <h1 style={{marginTop:'25px'}}>Do connect form</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label>name</label>
                <input type="text" name ="name" className="form-control"/>
                <label>Email</label>
                <input type="email" name="email" className="form-control"/>
                <label>Message</label>
                <textarea name="message" rows="4" className="form-control"/>
                <input type="submit" 
                value="Send" 
                 className="form-control btn btn-primary"
                 style={{marginTop:"30px"}}
                 />
            </form>
        </div>
    )
}

export default Mailer;