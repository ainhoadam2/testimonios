import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Testimonio from './Testimonio';

function App() {
  const testimonios = [
    {
      id: 1,
      nombre: "María García",
      cargo: "Desarrolladora Frontend",
      empresa: "TechCorp",
      imagen: "https://jcpportraits.com/wp-content/uploads/2024/03/Untitled-design-2.jpg",
      altImagen: "Retrato profesional de María García sonriendo con confianza",
      testimonio: "React ha transformado completamente mi forma de desarrollar aplicaciones web. La componentización y el manejo del estado hacen que todo sea más intuitivo y mantenible."
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      cargo: "Arquitecto de Software",
      empresa: "InnovateLab",
      imagen: "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      altImagen: "Foto profesional de Carlos Rodríguez en su oficina",
      testimonio: "Después de trabajar con varios frameworks, puedo decir que React ofrece la flexibilidad perfecta. Su ecosistema es increíble y la comunidad siempre está dispuesta a ayudar."
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      cargo: "Tech Lead",
      empresa: "WebSolutions",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrG-kf3XBNco9qxLEm9KB90sM4z_1wpDT2LQ&s",
      altImagen: "Imagen profesional de Ana Martínez en presentación técnica",
      testimonio: "Lo que más me gusta de React es su curva de aprendizaje. En poco tiempo puedes crear aplicaciones complejas. Los hooks han simplificado enormemente el código."
    },
    {
      id: 4,
      nombre: "David López",
      cargo: "Senior Developer",
      empresa: "CodeFactory",
      imagen: "https://media.istockphoto.com/id/1919265357/es/foto/retrato-de-cerca-del-hombre-de-negocios-confiado-de-pie-en-la-oficina.jpg?s=612x612&w=0&k=20&c=b7fTAWYXKpfAyzO-gCSJpF3wYXWdhjdy4fZSEVj0bfI=",
      altImagen: "Retrato de David López trabajando en su laptop",
      testimonio: "React me ha permitido ser más productivo. El virtual DOM optimiza el rendimiento automáticamente y las herramientas de desarrollo son excepcionales. ¡Totalmente recomendado!"
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Testimonios sobre React
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Lo que opinan los desarrolladores profesionales
        </Typography>
      </Box>
      
      {testimonios.map((testimonio) => (
        <Testimonio
          key={testimonio.id}
          nombre={testimonio.nombre}
          cargo={testimonio.cargo}
          empresa={testimonio.empresa}
          imagen={testimonio.imagen}
          altImagen={testimonio.altImagen}
          testimonio={testimonio.testimonio}
        />
      ))}
    </Container>
  );
}

export default App;