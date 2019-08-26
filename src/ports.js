export const devport = process.env.NODE_ENV === 'production'?
window.location.href:'http://localhost:5000/';