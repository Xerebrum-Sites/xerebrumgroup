import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { CtaButton } from "@/components/CtaButton";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/data/services";
import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import headerContact from "@/assets/header-contact.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  company: z.string().trim().min(2, "Ingresa tu empresa").max(120),
  email: z.string().trim().email("Email inválido").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Selecciona un servicio de interés"),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mín. 10 caracteres)").max(1200),
});

type FormState = z.infer<typeof schema>;

const Contact = () => {
  const [params] = useSearchParams();
  const initialService = params.get("servicio") || "";
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [form, setForm] = useState<FormState>({
    name: "", company: "", email: "", phone: "", service: initialService, message: "",
  });

  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof FormState] = i.message; });
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      // Mock submission ready to wire to Laravel API:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(parsed.data) });
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      toast({ title: "Mensaje enviado", description: "Te contactaremos en menos de 24 horas hábiles." });
    } catch {
      toast({ title: "Error", description: "No pudimos enviar tu mensaje. Intenta nuevamente.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <Seo title="Contacto · Xerebrum" description="Hablemos de tu proyecto. Estrategia, desarrollo, plataformas y automatización con IA." />
      <PageHeader
        eyebrow="Contacto"
        title={<>Conversemos sobre tu próximo movimiento.</>}
        description="Cuéntanos brevemente qué buscas resolver. Un especialista del área correspondiente te responde en menos de 24 horas hábiles."
        image={headerContact}
        imageAlt="Profesional escribiendo en laptop, conversación en curso"
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <aside className="space-y-5">
            <div className="surface-card p-6">
              <Mail className="h-5 w-5 text-accent mb-3" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
              <a href="mailto:hola@xerebrum.com" className="text-foreground hover:text-accent transition-smooth">hola@xerebrum.com</a>
            </div>
            <div className="surface-card p-6">
              <MapPin className="h-5 w-5 text-accent mb-3" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Cobertura</div>
              <p className="text-sm">LATAM · Operación 100% remota</p>
            </div>
            <div className="surface-card p-6">
              <Clock className="h-5 w-5 text-accent mb-3" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Tiempo de respuesta</div>
              <p className="text-sm">Menos de 24 horas hábiles</p>
            </div>
          </aside>

          <div className="surface-card p-8 lg:p-10">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-5">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-2">¡Mensaje recibido!</h2>
                <p className="text-muted-foreground">Te contactaremos en menos de 24 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nombre" error={errors.name}>
                    <input value={form.name} onChange={(e) => set("name", e.target.value)} maxLength={80} className={inputCls} placeholder="Tu nombre" />
                  </Field>
                  <Field label="Empresa" error={errors.company}>
                    <input value={form.company} onChange={(e) => set("company", e.target.value)} maxLength={120} className={inputCls} placeholder="Nombre de la empresa" />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email corporativo" error={errors.email}>
                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={160} className={inputCls} placeholder="tu@empresa.com" />
                  </Field>
                  <Field label="Teléfono (opcional)" error={errors.phone}>
                    <input value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={40} className={inputCls} placeholder="+57 ..." />
                  </Field>
                </div>
                <Field label="Servicio de interés" error={errors.service}>
                  <select value={form.service} onChange={(e) => set("service", e.target.value)} className={inputCls}>
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                    <option value="general">No estoy seguro / Otro</option>
                  </select>
                </Field>
                <Field label="Cuéntanos sobre tu proyecto" error={errors.message}>
                  <textarea value={form.message} onChange={(e) => set("message", e.target.value)} maxLength={1200} rows={5} className={inputCls + " resize-none"} placeholder="Objetivo, contexto, plazos..." />
                </Field>
                <CtaButton type="submit" variant="primary" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  {submitting ? "Enviando..." : "Enviar mensaje"}
                </CtaButton>
                <p className="text-xs text-muted-foreground">
                  Al enviar aceptas que te contactemos sobre tu consulta. No compartiremos tus datos.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

const inputCls = "w-full h-11 px-4 rounded-lg bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth";

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
    {children}
    {error && <span className="block text-xs text-destructive mt-1.5">{error}</span>}
  </label>
);

export default Contact;
