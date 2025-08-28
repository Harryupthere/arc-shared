import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Translator = () => {
  const language = useSelector((state) => state.language.language);

  // Load Google Translate script and initialize
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,kk,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }
  }, []);

  // Change language when Redux state changes
  useEffect(() => {
    const select = document.querySelector('.goog-te-combo');
    if (select && language) {
      select.value = language;
      select.dispatchEvent(new Event('change'));
    }
  }, [language]);

  return <div id="google_translate_element" style={{ display: 'none' }} />;
};

export default Translator;