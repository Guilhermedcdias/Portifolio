// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nome, email, telefone, assunto, mensagem } = req.body;

    // Configuração do servidor SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "seu-email@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: 'seu-email@gmail.com',
        to: 'destinatario@gmail.com',
        subject: assunto,
        text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
      });

      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
