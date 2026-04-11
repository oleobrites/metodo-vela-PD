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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Entraremos em contato em breve.");
    onOpenChange(false);
    setName("");
    setEmail("");
    setPhone("");
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
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          <Input
            type="tel"
            placeholder="Seu WhatsApp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          <button type="submit" className="btn-cta w-full">
            Quero começar agora!
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
