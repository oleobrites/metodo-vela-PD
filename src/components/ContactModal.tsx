import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

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
  const [isSubmitted, setIsSubmitted] = useState(false); // Novo estado

  const [utms, setUtms] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    page_url: ""
  });

  useEffect(() => {
    if (open) {
      const searchParams = new URLSearchParams(window.location.search);
      setUtms({
        utm_source: searchParams.get("utm_source") || "",
        utm_medium: searchParams.get("utm_medium") || "",
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_content: searchParams.get("utm_content") || "",
        utm_term: searchParams.get("utm_term") || "",
        page_url: window.location.href.split('?')[0]
      });
      // Reseta o estado de sucesso ao abrir o modal novamente
      setIsSubmitted(false);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      nome: name,
      email: email,
      telefone: phone,
      faturamento_mensal: revenue,
      trabalha_com_delivery: hasDelivery,
      ...utms,
      data_envio: new Date().toISOString()
    };

    try {
      const webhookUrl = "https://nwn.ramonbarata.com.br/webhook/form_lp"; 
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Erro no servidor");

      // Em vez de alert, define como enviado
      setIsSubmitted(true);
      
      // Limpa os campos
      setName("");
      setEmail("");
      setPhone("");
      setRevenue("");
      setHasDelivery("");

      // Opcional: Fechar o modal automaticamente após 3 segundos
      setTimeout(() => {
        onOpenChange(false);
      }, 3000);

    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border text-foreground max-w-md min-h-[300px] flex flex-col justify-center">
        {isSubmitted ? (
          // Mensagem de Agradecimento
          <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="text-5xl text-primary">✓</div>
            <h2 className="text-3xl font-bold text-center">Obrigado!</h2>
            <p className="text-muted-foreground text-center">
              Recebemos seus dados e entraremos em contato em breve.
            </p>
          </div>
        ) : (
          // Formulário Original
          <>
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
                className="bg-muted border-border"
              />
              <Input
                type="email"
                placeholder="Melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-muted border-border"
              />
              <Input
                type="tel"
                placeholder="Telefone (WhatsApp)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-muted border-border"
              />
              
              <select
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm"
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
                className="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm"
              >
                <option value="" disabled>Já trabalha com delivery?</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>

              <button 
                type="submit" 
                disabled={isLoading} 
                className="btn-cta w-full disabled:opacity-70 transition-all"
              >
                {isLoading ? "Enviando..." : "Quero começar agora!"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;