import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'

export default function sendmail(req: NextApiRequest, res: NextApiResponse) {

    let nodemailer = require("nodemailer")

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD,
        },
        secure: true,
    })

    // Mail for Host
    const toHostMailData = {
        from: `${req.body.email}`,
        to: "x-aaaaia4zliwqdghouzmeos5x3e@cosmgate.slack.com",
        subject: `【お問い合わせ（DX番長）】${req.body.name}様より`,
        text: req.body.message + "| Sent From " + req.body.email,
        html: `
            <p>【名前】</p>
            <p>${req.body.name}</p>
            <p>【お問い合せ内容】</p>
            <p>${req.body.content}</p>
            <p>【メールアドレス】</p>
            <p>${req.body.email}</p>
        `,
    }

    const toGuestMailData = {
        from: process.env.GMAILUSER,
        to: `${req.body.email}`,
        subject: `【お問い合せ自動受付メール】`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `
          <p>
            お問い合わせありがとうございます。
            <br>以下の内容でお問い合わせを承りました。
          </p>
          <p>-----------------------------------------</p>
          <h2>お問い合わせ内容</h2>
          <p>【名前】</p>
          <p>${req.body.name}</p>
          <p>【メッセージ】：</p>
          <p>${req.body.message}</p>
          <p>【メールアドレス】</p>
          <p>${req.body.email}</p>
          <p>-----------------------------------------</p>
        `,
    }

    transporter.sendMail(toHostMailData, function (err: any, info: any) {
        if (err) console.log(err)
        else console.log(info)
    })

    transporter.sendMail(toGuestMailData, function(err: any, info: any) {
        if(err) console.log(err)
        else console.log(info)
    })

    res.send("success")
}