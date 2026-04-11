import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Settings, Users, TrendingUp, Clock, UserCheck, BookOpen, Award, Repeat, Handshake } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import testimonials from "@/assets/testimonials.png";
import mentor from "@/assets/mentor.png";
import ContactModal from "@/components/ContactModal";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* HERO */}
      <section className="relative py-16 px-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl font-black leading-tight">
              Método V.E.L.A:{" "}
              <span className="text-primary">
                Coloque mais de R$10 mil todos os meses no seu bolso e
              </span>{" "}
              no caixa do seu Delivery.
            </h1>
            <div className="space-y-3 max-w-sm">
              <input placeholder="Email" className="w-full px-4 py-2 rounded bg-foreground text-background text-sm" />
              <input placeholder="Phone" className="w-full px-4 py-2 rounded bg-foreground text-background text-sm" />
              <button className="btn-cta w-full" onClick={() => setModalOpen(true)}>
                Enviar
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={heroPhone} alt="Delivery app" width={320} height={320} className="drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Users className="w-6 h-6 text-secondary" />, text: "Donos de delivery que já vendem entre R$50 a R$300 mil mensais mas não conseguem ver o dinheiro no final do mês." },
            { icon: <TrendingUp className="w-6 h-6 text-secondary" />, text: "Donos de restaurante que já possuem mais de 5 funcionários e querem aumentar o faturamento através do delivery." },
            { icon: <UserCheck className="w-6 h-6 text-secondary" />, text: "Profissionais CLT que desejam empreender e mudar de carreira, mas precisam de um empreendimento para trocar seus desejos." },
            { icon: <Settings className="w-6 h-6 text-secondary" />, text: "Para quem está começando do zero e tem sede de crescimento, com foco em escalar o delivery para o alto patamar em menos de 6 meses." },
          ].map((item, i) => (
            <motion.div key={i} className="flex gap-4 items-start p-4" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mt-1 shrink-0">{item.icon}</div>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PURPLE BANNER */}
      <section className="section-purple py-10 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-bold text-foreground">
            TODA A MENTORIA É BASEADA NO MÉTODO V.E.L.A., criada para{" "}
            <span className="highlight-purple-box bg-primary text-primary-foreground px-2 py-1 rounded font-black">
              TRANSFORMAR A GESTÃO DE DELIVERY
            </span>{" "}
            de todo Brasil
          </p>
        </div>
      </section>

      {/* 4 PILLARS */}
      <section className="py-16 px-4" style={{ background: "var(--gradient-purple)" }}>
        <div className="container max-w-3xl mx-auto space-y-6">
          {[
            { icon: <Brain className="w-10 h-10 text-primary" />, title: "VENDAS INTELIGENTES", desc: "Aplicação de estratégias de atração, retenção para garantir uma alta conversão." },
            { icon: <Settings className="w-10 h-10 text-primary" />, title: "ESTRUTURAÇÃO OPERACIONAL", desc: "Alinhamento de processos, sistemas para você parar de apagar incêndio no seu delivery." },
            { icon: <Users className="w-10 h-10 text-primary" />, title: "LIDERANÇA COM PROPÓSITO", desc: "Montagem e implementação de cultura dentro do seu delivery." },
            { icon: <TrendingUp className="w-10 h-10 text-primary" />, title: "ALAVANCAGEM LUCRATIVA", desc: "Como jogar o jogo dos cupons dos marketplaces e ainda lucrar MUITO com eles." },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              className="card-pillar flex items-start gap-5"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="shrink-0">{pillar.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-1">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 bg-background text-center">
        <motion.div className="container max-w-4xl mx-auto" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-primary font-semibold mb-8">
            Conheça outras pessoas, exatamente igual a você, que conseguiram alcançar os resultados esperados por você.
          </p>
          <img src={testimonials} alt="Depoimentos" loading="lazy" width={800} height={512} className="mx-auto rounded-xl max-w-full" />
          <button className="btn-cta mt-8" onClick={() => setModalOpen(true)}>
            EU QUERO COMEÇAR AGORA
          </button>
        </motion.div>
      </section>

      {/* WHAT WILL CHANGE */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-8">O que mudará na sua vida com o método V.E.L.A.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Vendas", "Alavancagem", "Escala", "Lucro"].map((item) => (
              <div key={item} className="bg-foreground text-background rounded-xl p-6 font-bold text-lg shadow-lg">
                {item}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            VALOR TOTAL DO QUE VOCÊ PRECISA PARA AGENDAR SUA SESSÃO = R$0,00
          </p>
        </div>
      </section>

      {/* E AINDA TEM MAIS */}
      <section className="py-16 px-4 bg-background text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-4 text-secondary">E AINDA TEM MAIS!</h2>
          <p className="text-muted-foreground text-sm">
            Vamos criar um kit completo de vendas com estrutura, que vai tirar o delivery com tráfego, incluindo o Funil e um Robô de Atendimento.
          </p>
        </div>
      </section>

      {/* O FIM DA BAGUNÇA */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, hsl(240 60% 20%) 0%, hsl(260 70% 30%) 100%)" }}>
        <div className="container max-w-4xl mx-auto">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              O fim da bagunça na gestão do seu delivery
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              E você que já está cansado de ficar perdido com números, não saber o que funciona, não conseguir controlar a operação... Chega!
              A mentoria V.E.L.A. foi feita para você que quer transformar completamente o seu delivery.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Quando você implementa processos reais, baseados em dados e estratégias validadas por dezenas de deliveries, os resultados aparecem.
              Não é sobre reinventar a roda, é sobre aplicar o que já funciona com consistência.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Chega de tentativa e erro. Entre para o método V.E.L.A. e veja a diferença nos seus resultados já nas primeiras semanas.
            </p>
            <div className="text-center">
              <button className="btn-cta" onClick={() => setModalOpen(true)}>
                EU QUERO CONHECER MAIS
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-10">Como funciona a mentoria V.E.L.A.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: <Clock className="w-5 h-5" />, title: "Duração", desc: "Acompanhamento completo de 6 meses." },
              { icon: <UserCheck className="w-5 h-5" />, title: "Acesso a equipe", desc: "Nosso time de especialistas está disponível para resolver qualquer dúvida." },
              { icon: <BookOpen className="w-5 h-5" />, title: "Jornada", desc: "Aulas, mentorias ao vivo semanais, grupo no WhatsApp e acompanhamento individual." },
              { icon: <Award className="w-5 h-5" />, title: "Aceleração de resultado", desc: "Você terá resultados nas primeiras semanas com nosso acompanhamento personalizado." },
              { icon: <Repeat className="w-5 h-5" />, title: "Frequência das aulas", desc: "Conteúdos semanais com aulas práticas e aplicáveis para o seu negócio." },
              { icon: <Handshake className="w-5 h-5" />, title: "Conexão", desc: "Networking com outros donos de delivery para trocar experiências e parcerias." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="border border-secondary rounded-xl p-5"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary">{item.icon}</span>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img src={mentor} alt="Mentor" loading="lazy" width={300} height={380} className="rounded-xl" />
          </div>
          <motion.div className="flex-1" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-4 text-secondary">
              Quem é será seu mentor?
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              Eu já faturei mais de R$5 milhões com delivery e agora quero te ajudar a alcançar os mesmos resultados. Com mais de 10 anos de experiência no mercado de food service.
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Comecei meu delivery com menos de R$500 e hoje tenho múltiplas operações funcionando de forma lucrativa e escalável.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Minha missão é mostrar para você que é possível ter um delivery lucrativo, organizado e que te dê liberdade financeira e de tempo.
            </p>
            <button className="btn-cta" onClick={() => setModalOpen(true)}>
              EU QUERO COMEÇAR AGORA
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-card border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Copyright © V.E.L.A. - De Delivery, 2025
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Todos os direitos reservados para Método V.E.L.A. LTDA, SP
        </p>
      </footer>
    </div>
  );
};

export default Index;
