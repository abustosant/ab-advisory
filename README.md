# AB Advisory — Sitio Web Corporativo

Sitio web de AB Advisory construido con **Next.js 16**, **Tailwind CSS** y **TypeScript**.

---

## 🚀 Deploy en Vercel (< 10 minutos)

### Opción A: GitHub + Vercel (recomendado)

1. Crea repositorio en github.com
2. Sube el proyecto:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/ab-advisory.git
   git push -u origin main
   ```
3. Ve a vercel.com → New Project → importa el repo → Deploy

### Opción B: Vercel CLI
```bash
npm i -g vercel && vercel login && vercel --prod
```

---

## 🛠 Desarrollo local

```bash
npm install
npm run dev      # localhost:3000
npm run build    # build producción
```

---

## ✏️ Personalizar contenido

Todo en `src/lib/data.ts`:
- `SITE` — teléfono, email, WhatsApp
- `FOUNDER` — bio, expertise
- `SERVICES` — los 3 servicios
- `TESTIMONIALS` — clientes

## Activar formulario de contacto

En `src/components/ContactForm.tsx`, reemplaza la URL de Formspree:
```
https://formspree.io/f/XXXXXXXX
```
Obtén tu ID gratis en formspree.io

---

## 📊 Build exitoso: ✓ Compiled successfully in ~11s
