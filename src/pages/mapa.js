import '../css/mapa.css'
const Mapa = (props) => {
return (
    <div className="mapa">
      <h2> Ubicacion </h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9905.962896027404!2d-69.2181389338259!3d-51.6325376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1699877345944!5m2!1ses-419!2sar"
      style={{width:900, height:450, style:"border:0;", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}
      ></iframe>
   </div>
)
}

export default Mapa;