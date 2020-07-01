const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'pranayverma79@gmail.com',
        subject:'Thanks for joining',
        text:`welcome to the app, $(name).let me know hao you are going along the app`
    })
}
const sendCancellationEmail =  (email,name)=>{
    sgMail.send({
        to:email,
        from:'pranayverma79@gmail.com',
        subject:'Sorry to see you go',
        text:`Goodbye, $(name).I hope to see you in some time soon`
    })
} 
module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}