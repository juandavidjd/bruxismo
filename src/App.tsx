import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Shield, AlertTriangle, Moon, Headphones, ChevronDown,
  Phone, Mail, CheckCircle2, ArrowRight, Menu, X,
} from "lucide-react";

const CDN = "https://api.liveodi.com/covers/bruxismo/images";
const API = "https://api.liveodi.com/covers/lead";

const img = (name: string) => `${CDN}/${name}`;

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
const HERO_VIDEOS = [
  "https://api.liveodi.com/assets/videos/covers-01-rechinas.mp4",
  "https://api.liveodi.com/assets/videos/covers-02-costo.mp4",
  "https://api.liveodi.com/assets/videos/covers-03-sport.mp4",
  "https://api.liveodi.com/assets/videos/covers-04-inec.mp4",
  "https://api.liveodi.com/assets/videos/covers-05-smokover.mp4",
  "https://api.liveodi.com/assets/videos/covers-06-alejandra.mp4",
  "https://api.liveodi.com/assets/videos/covers-07-testimonio.mp4",
  "https://api.liveodi.com/assets/videos/covers-08-3pasos.mp4",
  "https://api.liveodi.com/assets/videos/covers-09-ninos.mp4",
  "https://api.liveodi.com/assets/videos/covers-10-odi.mp4",
];

function HeroVideo() {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  const idx = useRef(0);
  const current = useRef<"a" | "b">("a");

  const getEls = () => ({ a: refA.current!, b: refB.current! });

  const swap = () => {
    const { a, b } = getEls();
    idx.current = (idx.current + 1) % HERO_VIDEOS.length;
    const next = current.current === "a" ? b : a;
    const prev = current.current === "a" ? a : b;
    next.src = HERO_VIDEOS[idx.current];
    next.play();
    next.style.opacity = "1";
    prev.style.opacity = "0";
    current.current = current.current === "a" ? "b" : "a";
    // Preload next
    const nextIdx = (idx.current + 1) % HERO_VIDEOS.length;
    prev.src = HERO_VIDEOS[nextIdx];
    prev.load();
  };

  return (
    <>
      <video ref={refA} className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-700"
        autoPlay muted playsInline onEnded={swap} src={HERO_VIDEOS[0]} />
      <video ref={refB} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
        muted playsInline onEnded={swap} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden" animate="visible" variants={stagger}
          className="max-w-2xl"
        >
          <motion.p variants={fade} className="text-teal font-semibold text-sm tracking-wider uppercase mb-4">
            COVER'S Lab — Salud dental preventiva
          </motion.p>
          <motion.h1 variants={fade} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Bruxismo: lo que tus dientes <span className="text-teal">no te dicen</span>
          </motion.h1>
          <motion.p variants={fade} className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            El 70% de las personas que rechinan los dientes no lo saben.
            Tu cuerpo te avisa — aprende a escucharlo.
          </motion.p>
          <motion.div variants={fade} className="flex flex-wrap gap-4">
            <a href="#contacto" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/25">
              Quiero protegerme
            </a>
            <a href="#que-es" className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              Aprender mas <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   QUE ES BRUXISMO
   ═══════════════════════════════════════════ */
function QueEsBruxismo() {
  return (
    <section id="que-es" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger} className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fade}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              ¿Que es el bruxismo?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              El bruxismo es el habito involuntario de apretar o rechinar los dientes,
              principalmente durante el sueno. Afecta a <strong>1 de cada 5 adultos</strong> y
              puede causar dano severo en el esmalte dental, dolor cronico de mandibula
              y cabeza, e incluso fracturas dentales.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              El estres, la ansiedad, la mala alineacion dental y los trastornos del sueno
              son los principales detonantes. Lo peligroso es que la mayoria de las personas
              no saben que lo padecen hasta que el dano ya esta hecho.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Respaldado por <strong>186 papers cientificos</strong> indexados en nuestro
              sistema de conocimiento ODI.
            </p>
          </motion.div>
          <motion.div variants={fade}>
            <img
              src={img("dolor-mandibula-sintoma.jpg")}
              alt="Dolor de mandibula como sintoma de bruxismo"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7 SENALES
   ═══════════════════════════════════════════ */
const SENALES = [
  { icon: Moon, text: "Rechinar de dientes durante la noche" },
  { icon: AlertTriangle, text: "Dolor de mandibula al despertar" },
  { icon: Headphones, text: "Dolores de cabeza frecuentes al levantarte" },
  { icon: AlertTriangle, text: "Dientes desgastados, aplanados o astillados" },
  { icon: Shield, text: "Sensibilidad dental sin causa aparente" },
  { icon: Moon, text: "Rigidez o cansancio en los musculos de la cara" },
  { icon: AlertTriangle, text: "Tu pareja te dice que rechinas dormido" },
];

function ComoSaberSiLoTengo() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} className="text-3xl md:text-4xl font-bold text-center mb-4">
            ¿Como saber si lo tengo?
          </motion.h2>
          <motion.p variants={fade} className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Si identificas 2 o mas de estas senales, consulta con un especialista.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SENALES.map((s, i) => (
              <motion.div key={i} variants={fade}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
              >
                <s.icon className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">{s.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONSECUENCIAS
   ═══════════════════════════════════════════ */
function Consecuencias() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Las consecuencias son reales
          </motion.h2>
          <motion.p variants={fade} className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            El bruxismo no tratado causa dano acumulativo e irreversible.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fade}>
              <img
                src={img("desgaste-dental-bruxismo.jpg")}
                alt="Desgaste dental por bruxismo"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div variants={fade} className="space-y-4">
              {[
                "Erosion del esmalte — la capa protectora del diente se destruye",
                "Fracturas dentales — los dientes se astillan o quiebran",
                "Dolor cronico de mandibula — disfuncion temporomandibular (ATM)",
                "Recesion de encias — las raices quedan expuestas",
                "Migranas y dolor cervical — tension muscular constante",
                "Perdida de piezas dentales — en casos severos no tratados",
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">{c}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div variants={fade} className="mt-12">
            <img
              src={img("comparacion-antes-despues.jpg")}
              alt="Comparacion dientes con desgaste vs protegidos"
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto"
            />
            <p className="text-center text-sm text-gray-400 mt-3">
              Izquierda: el dolor de no protegerte. Derecha: la tranquilidad de dormir protegida.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   LINEAS COVERS
   ═══════════════════════════════════════════ */
const LINEAS = [
  {
    name: "Medical COVER'S",
    desc: "Protector nocturno personalizado para bruxismo. Fabricado con termoplastico de grado medico, ajuste exacto a tu mordida. Evita el desgaste y alivia la tension mandibular.",
    img: "medical-covers-protector-nocturno.jpg",
    color: "bg-teal",
    tag: "Bruxismo nocturno",
  },
  {
    name: "Sport COVER'S",
    desc: "Protector deportivo personalizado para deportes de contacto. Absorcion de impacto certificada. Disponible en colores. Tu sonrisa no se negocia en el ring.",
    img: "sport-covers-protector-deportivo.jpg",
    color: "bg-accent",
    tag: "Deportes de contacto",
  },
  {
    name: "Smokover",
    desc: "Protector disenado para fumadores. Barrera entre el humo y el esmalte. Reduce manchas, protege contra el desgaste termico y quimico del tabaco.",
    img: "smokover-protector-fumadores.jpg",
    color: "bg-navy",
    tag: "Fumadores",
  },
];

function LineasCovers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Tres lineas, una mision
          </motion.h2>
          <motion.p variants={fade} className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Cada protector es unico — fabricado a la medida exacta de tu boca.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {LINEAS.map((l, i) => (
              <motion.div key={i} variants={fade}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative">
                  <img src={img(l.img)} alt={l.name} className="w-full h-48 md:h-56 object-cover" />
                  <span className={`absolute top-4 left-4 ${l.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {l.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{l.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROCESO
   ═══════════════════════════════════════════ */
function Proceso() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} className="text-3xl md:text-4xl font-bold text-center mb-12">
            3 pasos para protegerte
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Impresion dental",
                desc: "Un profesional toma la impresion exacta de tu mordida. Sin dolor, 15 minutos.",
                image: "proceso-impresion-dental.jpg",
              },
              {
                step: "02",
                title: "Fabricacion a medida",
                desc: "COVER'S Lab fabrica tu protector con termoplastico de grado medico. 5-7 dias.",
                image: "medical-covers-protector-nocturno.jpg",
              },
              {
                step: "03",
                title: "Proteccion completa",
                desc: "Usalo cada noche. Tu esmalte deja de desgastarse. Tu mandibula descansa.",
                image: "sueno-tranquilo-proteccion.jpg",
              },
            ].map((p, i) => (
              <motion.div key={i} variants={fade} className="text-center">
                <div className="relative mb-6">
                  <img src={img(p.image)} alt={p.title}
                    className="w-full h-40 md:h-48 object-cover rounded-xl"
                  />
                  <span className="absolute -top-3 -left-3 w-10 h-10 bg-teal text-white font-bold rounded-full flex items-center justify-center text-sm shadow-lg">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CURSO INEC — SECCIÓN EXPANDIDA
   ═══════════════════════════════════════════ */
const MODULOS = [
  { num: "01", title: "Fundamentos del bruxismo", desc: "Que es, tipos (sueno vs diurno), prevalencia, factores de riesgo. Basado en 186 papers cientificos indexados.", icon: "📚" },
  { num: "02", title: "Diagnostico clinico", desc: "7 senales de alerta, herramientas de evaluacion, como identificar bruxismo en tus pacientes.", icon: "🔍" },
  { num: "03", title: "Tecnicas de impresion", desc: "Materiales, cubetas, tiempos de fraguado, errores comunes. Sesion practica en vivo.", icon: "🦷" },
  { num: "04", title: "Fabricacion de protectores", desc: "Termoplastico de grado medico, calibracion de grosor, acabado y pulido. Medical, Sport y Smokover.", icon: "🏭" },
  { num: "05", title: "Manejo de pacientes", desc: "Comunicacion, seguimiento, ajustes post-entrega, casos especiales (ninos, deportistas, fumadores).", icon: "🤝" },
  { num: "06", title: "Certificacion y practica", desc: "Evaluacion final, caso clinico completo, entrega de certificacion INEC.", icon: "🎓" },
];

function CursoINEC() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profile: "", city: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    setError("");
    try {
      const resp = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interest: "curso_inec", source: "bruxismo.my-covers.com" }),
      });
      if (resp.ok) setSent(true);
      else setError("No se pudo enviar. Intenta de nuevo.");
    } catch {
      setError("Error de conexion. Intenta de nuevo.");
    }
    setSending(false);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* HEADER DEL CURSO */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
          <motion.span variants={fade} className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Convocatoria abierta — Cupos limitados
          </motion.span>
          <motion.h2 variants={fade} className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Curso de Proteccion Dental Personalizada
          </motion.h2>
          <motion.p variants={fade} className="text-xl text-gray-500 mb-2">
            COVER'S Lab + INEC
          </motion.p>
          <motion.p variants={fade} className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            El bruxismo afecta al 30% de la poblacion adulta, pero menos del 5% de los profesionales
            saben fabricar la solucion. Este curso te certifica en diagnostico, impresion y fabricacion
            de protectores dentales personalizados.
          </motion.p>
        </motion.div>

        {/* IMAGEN HERO CURSO */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <img
            src={img("curso-laboratorio-dental.jpg")}
            alt="Laboratorio dental moderno COVERS"
            className="rounded-2xl shadow-xl w-full"
          />
        </motion.div>

        {/* PARA QUIEN ES */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h3 variants={fade} className="text-2xl font-bold text-navy mb-6 text-center">¿Para quien es este curso?</motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🦷", title: "Odontologos", desc: "Que quieren ofrecer proteccion dental como servicio adicional en su consultorio." },
              { icon: "🎓", title: "Estudiantes", desc: "De odontologia, protesis dental o higiene oral que buscan especializarse." },
              { icon: "🔬", title: "Tecnicos dentales", desc: "Que fabrican protesis y quieren dominar protectores oclusales personalizados." },
              { icon: "💼", title: "Emprendedores", desc: "Del sector salud que ven oportunidad en proteccion dental preventiva." },
            ].map((p, i) => (
              <motion.div key={i} variants={fade} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h4 className="font-bold text-navy mb-1">{p.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 6 MODULOS */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h3 variants={fade} className="text-2xl font-bold text-navy mb-8 text-center">6 modulos — De teoria a practica</motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULOS.map((m, i) => (
              <motion.div key={i} variants={fade} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <span className="text-xs font-semibold text-teal">Modulo {m.num}</span>
                    <h4 className="font-bold text-navy mt-0.5 mb-2">{m.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IMAGENES: ODONTOLOGA + 3 LINEAS */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fade}>
            <img src={img("curso-odontologa-paciente.jpg")} alt="Odontologa con paciente" className="rounded-2xl shadow-xl w-full h-52 md:h-72 object-cover" />
            <p className="text-center text-sm text-gray-400 mt-3">Sesion practica: impresion dental en paciente real</p>
          </motion.div>
          <motion.div variants={fade}>
            <img src={img("tres-lineas-covers.jpg")} alt="3 lineas COVERS" className="rounded-2xl shadow-xl w-full h-52 md:h-72 object-cover" />
            <p className="text-center text-sm text-gray-400 mt-3">Medical · Sport · Smokover — fabricacion personalizada</p>
          </motion.div>
        </motion.div>

        {/* QUE INCLUYE */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-navy rounded-3xl p-8 md:p-12 text-white">
          <motion.h3 variants={fade} className="text-2xl font-bold mb-8 text-center">¿Que incluye tu inscripcion?</motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Material didactico completo (digital)",
              "Acceso a 186 papers cientificos indexados sobre bruxismo",
              "Sesion practica de impresion dental en vivo",
              "Kit de materiales para practica (incluido)",
              "Fabricacion supervisada de tu primer protector",
              "Certificacion INEC al completar todos los modulos",
              "Acceso al grupo profesional COVER'S Lab",
              "Descuento permanente en materiales de fabricacion",
            ].map((item, i) => (
              <motion.div key={i} variants={fade} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CERTIFICACION */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center">
          <img src={img("curso-certificacion-profesional.jpg")} alt="Certificacion INEC" className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto" />
          <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
            Al completar los 6 modulos y aprobar la evaluacion practica, recibes certificacion oficial del INEC
            en Proteccion Dental Personalizada — respaldada por COVER'S Lab.
          </p>
        </motion.div>

        {/* FORMULARIO DE INSCRIPCION */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-2xl mx-auto"
        >
          <motion.div variants={fade} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy mb-2">Inscribete al curso</h3>
            <p className="text-gray-500">Dejanos tus datos y te contactamos con fechas, costos y toda la informacion.</p>
          </motion.div>

          {sent ? (
            <motion.div variants={fade} className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-teal mx-auto mb-4" />
              <h4 className="text-xl font-bold text-navy mb-2">Inscripcion recibida</h4>
              <p className="text-gray-500">Te contactaremos con los detalles del curso. Revisa tu email.</p>
            </motion.div>
          ) : (
            <motion.form variants={fade} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input type="text" required value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900"
                    placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" required value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900"
                    placeholder="tu@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefono / WhatsApp</label>
                  <input type="tel" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900"
                    placeholder="+57 300 123 4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
                  <input type="text" value={form.city}
                    onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900"
                    placeholder="Pereira, Bogota, Medellin..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Perfil profesional</label>
                <select value={form.profile}
                  onChange={e => setForm(f => ({ ...f, profile: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all text-gray-900">
                  <option value="">Selecciona tu perfil</option>
                  <option value="odontologo">Odontologo(a)</option>
                  <option value="estudiante">Estudiante de odontologia</option>
                  <option value="tecnico_dental">Tecnico dental / Protesista</option>
                  <option value="higienista">Higienista oral</option>
                  <option value="emprendedor">Emprendedor sector salud</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">¿Por que te interesa el curso?</label>
                <textarea value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all resize-none text-gray-900"
                  rows={3} placeholder="Cuentanos sobre tu experiencia y que esperas del curso..." />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" disabled={sending}
                className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2">
                {sending ? "Enviando..." : <><ArrowRight className="w-5 h-5" /> Quiero inscribirme</>}
              </button>
              <p className="text-center text-xs text-gray-400">Sin compromiso. Te contactamos para darte toda la informacion.</p>
            </motion.form>
          )}
        </motion.div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACTO / LEAD CAPTURE
   ═══════════════════════════════════════════ */
const INTERESTS = [
  { id: "curso_inec", label: "Curso INEC" },
  { id: "protector_nocturno", label: "Protector nocturno (bruxismo)" },
  { id: "sport", label: "Protector deportivo" },
  { id: "smokover", label: "Smokover" },
  { id: "info", label: "Solo informacion" },
];

function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    setError("");
    try {
      const resp = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "bruxismo.my-covers.com" }),
      });
      if (resp.ok) {
        setSent(true);
      } else {
        setError("No se pudo enviar. Intenta de nuevo.");
      }
    } catch {
      setError("Error de conexion. Intenta de nuevo.");
    }
    setSending(false);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fade} className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            ¿Te interesa?
          </motion.h2>
          <motion.p variants={fade} className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Dejanos tus datos y te contactamos. Sin compromiso.
          </motion.p>

          {sent ? (
            <motion.div variants={fade} className="max-w-md mx-auto text-center bg-teal/10 rounded-2xl p-10">
              <CheckCircle2 className="w-16 h-16 text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-2">Recibido</h3>
              <p className="text-gray-600">Te contactaremos pronto. Gracias por tu interes.</p>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              variants={fade}
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                <input
                  type="text" required value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                <input
                  type="tel" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="+57 300 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">¿Que te interesa?</label>
                <select
                  value={form.interest}
                  onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecciona una opcion</option>
                  {INTERESTS.map(i => (
                    <option key={i.id} value={i.id}>{i.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all resize-none"
                  rows={3}
                  placeholder="Cuentanos mas..."
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit" disabled={sending}
                className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-white py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent/25"
              >
                {sending ? "Enviando..." : "Enviar"}
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">COVER'S Lab</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Protectores dentales personalizados. Fabricados a la medida exacta de tu mordida.
              Medical · Sport · Smokover.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contacto</h3>
            <div className="space-y-2">
              <a href="tel:+573001234567" className="flex items-center gap-2 text-gray-400 hover:text-teal text-sm transition-colors">
                <Phone className="w-4 h-4" /> COVER'S Lab
              </a>
              <a href="mailto:contacto@my-covers.com" className="flex items-center gap-2 text-gray-400 hover:text-teal text-sm transition-colors">
                <Mail className="w-4 h-4" /> contacto@my-covers.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Ecosistema</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Contenido generado automaticamente por ODI — Organismo Digital Industrial.
              Respaldado por 186 papers cientificos indexados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Ecosistema ADSI-ODI · Pereira, Colombia
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} COVER'S Lab — Todos los derechos reservados
          </p>
          <p className="text-gray-600 text-xs">
            Generado por ODI · Somos Industrias ODI
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════ */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          COVER'S <span className="text-teal font-normal text-sm ml-1">Bruxismo</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {[
            ["#que-es", "Bruxismo"],
            ["#sintomas", "Sintomas"],
            ["#lineas", "Protectores"],
            ["#proceso", "Proceso"],
            ["#curso", "Curso INEC"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-gray-300 hover:text-white text-sm transition-colors">
              {label}
            </a>
          ))}
          <a href="#contacto" className="bg-accent hover:bg-accent/90 text-white text-sm px-5 py-2 rounded-lg font-semibold transition-all">
            Contacto
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 space-y-3">
          {[
            ["#que-es", "Bruxismo"],
            ["#sintomas", "Sintomas"],
            ["#lineas", "Protectores"],
            ["#proceso", "Proceso"],
            ["#curso", "Curso INEC"],
            ["#contacto", "Contacto"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white text-sm py-2">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-16">
        <Hero />
        <div id="sintomas">
          <QueEsBruxismo />
          <ComoSaberSiLoTengo />
        </div>
        <Consecuencias />
        <div id="lineas"><LineasCovers /></div>
        <div id="proceso"><Proceso /></div>
        <div id="curso"><CursoINEC /></div>
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
