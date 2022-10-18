import FooterImgLarge from '../../assets/FooterImgLarge.png'

function Footer() {
    const titleFooter = 'Kasa'
  return (
    <div className="kasa-footer">
      <img src={FooterImgLarge} alt="logo du footer" className="logo-footer" />
      <h3 className='kasa-footer'>{titleFooter}</h3>
    </div>
  )
}

export default Footer