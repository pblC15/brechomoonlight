// CONFIGURE OS CONTATOS ANTES DE PUBLICAR:
// Instagram: usuário sem @. WhatsApp: DDI + DDD + número, apenas dígitos.
const CONFIG = {
  instagram: '_brechomoonlight',
  whatsapp: '55DDDNUMERO',
  mensagem: 'Olá! Vim pelo site do Brechó Moonlight e gostaria de saber mais sobre as peças disponíveis.'
};

const instagramOk = CONFIG.instagram !== 'SEU_USUARIO_INSTAGRAM';
const whatsappOk = /^55\d{10,11}$/.test(CONFIG.whatsapp);
for (const link of document.querySelectorAll('[data-link]')) {
  const isWhatsapp = link.dataset.link === 'whatsapp';
  if (isWhatsapp && whatsappOk) {
    link.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;
  } else if (!isWhatsapp && instagramOk) {
    link.href = `https://www.instagram.com/${CONFIG.instagram.replace(/^@/, '')}/`;
  } else {
    link.href = '#contato-pendente';
    link.addEventListener('click', e => {
      e.preventDefault();
      alert('Contato ainda não configurado. Edite o arquivo script.js com o Instagram e WhatsApp da loja.');
    });
  }
}
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header nav');
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.textContent = opened ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
