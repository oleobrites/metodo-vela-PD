import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [revenue, setRevenue] = useState("");
  const [hasDelivery, setHasDelivery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      nome: name,
      email: email,
      telefone: phone,
      faturamento_mensal: revenue,
      trabalha_com_delivery: hasDelivery
    };

    try {
      // Substitua pela URL do seu webhook no n8n (Production ou Test)
      const webhookUrl = "SUA_URL_DO_WEBHOOK_N8N_AQUI"; 
      
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      alert("Obrigado! Entraremos em contato em breve.");
      onOpenChange(false);
      
      // Limpa os campos após o envio
      setName("");
      setEmail("");
      setPhone("");
      setRevenue("");
      setHasDelivery("");
    } catch (error) {
      console.error("Erro ao enviar lead para o n8n:", error);
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border text-foreground max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Quero saber mais sobre o
            <span className="text-primary"> Método V.E.L.A.</span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          <Input
            type="email"
            placeholder="Melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          <Input
            type="tel"
            placeholder="Telefone (WhatsApp)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          
          <select
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            required
            className="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
          >
            <option value="" disabled>Receita/faturamento mensal</option>
            <option value="Ainda não faturo">Ainda não faturo</option>
            <option value="Até R$ 10.000">Até R$ 10.000</option>
            <option value="R$ 10.001 a R$ 50.000">R$ 10.001 a R$ 50.000</option>
            <option value="R$ 50.001 a R$ 100.000">R$ 50.001 a R$ 100.000</option>
            <option value="Mais de R$ 100.000">Mais de R$ 100.000</option>
          </select>

          <select
            value={hasDelivery}
            onChange={(e) => setHasDelivery(e.target.value)}
            required
            className="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
          >
            <option value="" disabled>Já trabalha com delivery?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

          <button 
            type="submit" 
            disabled={isLoading} 
            className="btn-cta w-full disabled:opacity-70 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? "Enviando..." : "Quero começar agora!"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;