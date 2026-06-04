export default function SiteFooter() {
  return (
    <footer className="hidden">
      <div id="footer-container">
        <div id="backtotop" className="button-wrap left">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <i className="fa-solid fa-angle-up" />
            </div>
          </div>
          <div className="button-text sticky left"><span data-hover="Retour en haut">Retour en haut</span></div>
        </div>
        <div className="footer-middle">
          <div className="copyright">
            2024 © <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/593floores/">Flores</a>. All rights reserved.
          </div>
        </div>
        <div className="socials-wrap">
          <div className="socials-icon"><i className="fa-solid fa-share-nodes" /></div>
          <div className="socials-text">Suivez-moi</div>
          <ul className="socials">
            <li><span className="parallax-wrap"><a className="parallax-element" href="https://discord.gg/KbA57NM9sC" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-discord" /></a></span></li>
            <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.twitch.tv/593maldito" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitch" /></a></span></li>
            <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.behance.net/flores_notion" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-behance" /></a></span></li>
            <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.tiktok.com/@593flores" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok" /></a></span></li>
            <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.instagram.com/593floores/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" /></a></span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
