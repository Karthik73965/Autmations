export const config = {
    host: "smtp.gmail.email",
    service: "gmail",
    auth: {
        user: "karthikjidagam81@gmail.com",
        pass: "mbpj repn qkbz rgyw",
    },
    tls: {
        rejectUnauthorized: false,
    },
}


export  const mailOptions = {

    from: "noreply@gmail.com",
    to: "karthikjidagam81@gmail.com",
    subject: "Welcome to RGUKT Registration System",
    html: `
    <h1>Name :kathik</h1>
    <a href='http:/localhost:5173/yues'><button style={{width:'100px' }}>Click to register</button>
    <h1>email :</h1>
    <h1>email :</h1>
    `,
  }; 