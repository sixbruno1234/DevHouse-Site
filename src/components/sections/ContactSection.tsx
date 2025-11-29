'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', service: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', service: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro');
    }
  };

  return (
    <section id="contato" className="section-padding bg-dark-800">
      <div className="container max-w-4xl">
        <FadeIn className="text-center mb-12">
          <h2 className="heading-2 gradient-text mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-400">Transforme sua ideia em realidade!</p>
        </FadeIn>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Nome" type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} disabled={status==='loading'} placeholder="Seu nome" />
            <Input label="Email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} disabled={status==='loading'} placeholder="seu@email.com" />
          </div>
          <Input label="Assunto" type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} disabled={status==='loading'} />
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Serviço</label>
            <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} disabled={status==='loading'} className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500">
              <option value="">Selecione</option>
              <option value="bots">Bots Discord</option>
              <option value="sites">Sites</option>
              <option value="apis">APIs</option>
              <option value="plugins">Plugins</option>
              <option value="servidores">Servidores DayZ</option>
            </select>
          </div>
          <Textarea label="Mensagem" rows={6} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} disabled={status==='loading'} />
          {status==='success' && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"><CheckCircle className="w-5 h-5" /><p className="text-sm">Sucesso! Mensagem enviada.</p></motion.div>}
          {status==='error' && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"><AlertCircle className="w-5 h-5" /><p className="text-sm">{errorMessage}</p></motion.div>}
          <Button type="submit" variant="primary" size="lg" isLoading={status==='loading'} className="w-full"><Send className="w-5 h-5 mr-2" />Enviar</Button>
        </form>
      </div>
    </section>
  );
}
