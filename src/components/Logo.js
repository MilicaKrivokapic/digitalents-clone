const Logo = ({ src, alt }) => {
  return (
    <picture>
      <source srcSet={`img/${src}.avif`} type={"image/avif"} alt={alt} />
      <img src={`img/${src}.png`} type={"image/png"} alt={alt} />
    </picture>
  );
};
export default Logo;
/* tässä komponentissa on käytetty template literalia niin että stringin keskelle voi liittää propin,
 sekä html:n picture-ominaisuutta, 
 jonka ansioista meillä on komponentti joka valitsee sen tiedostoformaatin jota kukin selain tukee. */
