import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  service?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL não configurada');
      return NextResponse.json({ error: 'Configuração incompleta' }, { status: 500 });
    }

    const embed = {
      title: '📧 Novo Contato - DevHouse',
      color: 0x0066cc,
      fields: [
        { name: '👤 Nome', value: data.name, inline: true },
        { name: '📧 Email', value: data.email, inline: true },
        { name: '📋 Assunto', value: data.subject || 'Não especificado', inline: false },
        { name: '🛠️ Serviço', value: data.service || 'Não especificado', inline: false },
        { name: '💬 Mensagem', value: data.message, inline: false },
      ],
      timestamp: new Date().toISOString(),
      footer: { text: 'DevHouse Portfolio' },
    };

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'DevHouse Contact', embeds: [embed] }),
    });

    if (!discordResponse.ok) {
      throw new Error('Falha ao enviar para Discord');
    }

    return NextResponse.json({ success: true, message: 'Mensagem enviada!' }, { status: 200 });
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
